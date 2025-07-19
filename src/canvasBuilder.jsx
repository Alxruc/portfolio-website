import { useEffect, useRef } from 'react'
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

import * as THREE from 'three';

let camera, sphere, scene, clock, noise;

function liquidMetal(geometry, radius) {
    // Effect that makes the sphere seem liquid / goo-like
    if(!clock || !noise) {
        return geometry;
    }
    let t = clock.getElapsedTime();
    let v3 = new THREE.Vector3();
    let pos = geometry.attributes.position;
    geometry.userData.nPos.forEach((p, idx) => {
        let ns = noise(p.x, p.y, p.z, t);
        v3.copy(p).multiplyScalar(radius).addScaledVector(p, ns);
        pos.setXYZ(idx, v3.x, v3.y, v3.z);
    });
    geometry.computeVertexNormals();
    return geometry
}

function CanvasBuilder({ scrollState }) {
    const canvasRef = useRef(null);
    const animationStateRef = useRef({
        targetRotation: { x: 0, y: 0, z: 0 },
        targetPosition: { x: 0, y: 0, z: 10 },
        targetScale: 1,
        targetColor: new THREE.Color('#aaa9ad')
    });


    useEffect(() => { // basically our init
        const canvas = canvasRef.current;

        // Renderer using React-managed canvas
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505); // Dark background

        camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 10;

        // Sphere
        const radius = 1;
        let geometry = new THREE.SphereGeometry(radius, 128, 128); 

        let nPos = [];
        let v3 = new THREE.Vector3();
        let pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++){
            v3.fromBufferAttribute(pos, i).normalize();
            nPos.push(v3.clone());
        }
        geometry.userData.nPos = nPos;

        let material = new THREE.MeshStandardMaterial({
            color: '#aaa9ad',
            roughness: 0.3,
            metalness: 1.0,
            envMap: new THREE.PMREMGenerator(renderer).fromScene(scene)
        });

        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        noise = openSimplexNoise.makeNoise4D(Date.now());
        clock = new THREE.Clock();

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 2, 2);
        scene.add(light);

        const light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(-2,2,2);
        scene.add(light2);

        // Section-based animations
        const handleSectionChange = (event) => {
            const { section } = event.detail;
            const animState = animationStateRef.current;
            
            switch(section) {
                case 0: // Title section
                    animState.targetPosition = { x: 0, y: 0, z: 10 };
                    animState.targetScale = 1;
                    break;
                case 1: // First content section
                case 3:
                    animState.targetPosition = { x: 3, y: 0, z: 10 };
                    animState.targetScale = 0.8;
                    break;
                case 2: // Second content section
                    animState.targetPosition = { x: -3, y: 0, z: 10 };
                    animState.targetScale = 1.2;
                    break;
                default:
                    break;
            }
        };

        // Smooth scroll-based animations
        const handleScrollProgress = (event) => {
            const { progress } = event.detail;
            // Subtle rotation based on scroll position
            const baseRotationY = progress * Math.PI * 2;
            animationStateRef.current.targetRotation.y = baseRotationY * 0.1;
        };

        // Add event listeners
        window.addEventListener('sectionChange', handleSectionChange);
        window.addEventListener('scrollProgress', handleScrollProgress);

        // Smooth interpolation function
        const lerp = (start, end, factor) => {
            return start + (end - start) * factor;
        };

        const lerpVector3 = (current, target, factor) => {
            current.x = lerp(current.x, target.x, factor);
            current.y = lerp(current.y, target.y, factor);
            current.z = lerp(current.z, target.z, factor);
        };

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            // Smooth interpolation to target values
            const lerpFactor = 0.05; // Adjust for animation speed
            const animState = animationStateRef.current;
            
            // Smoothly interpolate position
            lerpVector3(camera.position, animState.targetPosition, lerpFactor);
            
            // Smoothly interpolate rotation
            sphere.rotation.x = lerp(sphere.rotation.x, animState.targetRotation.x, lerpFactor);
            sphere.rotation.y = lerp(sphere.rotation.y, animState.targetRotation.y, lerpFactor);
            sphere.rotation.z = lerp(sphere.rotation.z, animState.targetRotation.z, lerpFactor);
            
            // Smoothly interpolate scale
            const currentScale = sphere.scale.x;
            const newScale = lerp(currentScale, animState.targetScale, lerpFactor);
            sphere.scale.setScalar(newScale);
            
            // Smoothly interpolate color
            sphere.material.color.lerp(animState.targetColor, lerpFactor);
            
            geometry = liquidMetal(geometry, radius);
            pos.needsUpdate = true;
            
            
            renderer.render(scene, camera);
        };
        animate();

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('sectionChange', handleSectionChange);
            window.removeEventListener('scrollProgress', handleScrollProgress);
            renderer.dispose();
        };
    }, []);

    return (
        <canvas ref={canvasRef}/>
    )
}

export default CanvasBuilder
