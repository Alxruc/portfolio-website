import { useEffect, useRef } from 'react'
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

import * as THREE from 'three';

let camera, scene, clock, noise;
let sphere, box;


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

function changeSceneVisibility(changedId, animationStateRef) {
    const animState = animationStateRef.current;
    
    switch(changedId) {
        case "home":
            animState.targetSphereScale = 1;
            animState.targetBoxScale = 0;
            break;
        case "about":
        case "projects":
        case "contact":
            animState.targetSphereScale = 0;
            animState.targetBoxScale = 0;
            break;
    }
}


function CanvasBuilder({activeButtonId}) {
    const canvasRef = useRef(null);
    const animationStateRef = useRef({
        targetSphereScale: 1,
        targetBoxScale: 0
    });

    useEffect(() => { // basically our init
        console.log("init")
        const canvas = canvasRef.current;

        // Renderer using React-managed canvas
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        noise = openSimplexNoise.makeNoise4D(Date.now());
        clock = new THREE.Clock();

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
        let sphereGeometry = new THREE.SphereGeometry(radius, 128, 128); 

        let nPos = [];
        let v3 = new THREE.Vector3();
        let pos = sphereGeometry.attributes.position;
        for (let i = 0; i < pos.count; i++){
            v3.fromBufferAttribute(pos, i).normalize();
            nPos.push(v3.clone());
        }
        sphereGeometry.userData.nPos = nPos;

        let material = new THREE.MeshStandardMaterial({
            color: '#aaa9ad',
            roughness: 0.3,
            metalness: 1.0,
            envMap: new THREE.PMREMGenerator(renderer).fromScene(scene)
        });

        sphere = new THREE.Mesh(sphereGeometry, material);
        scene.add(sphere);


        let boxGeo = new THREE.BoxGeometry(1,1,1);
        box = new THREE.Mesh(boxGeo, material);
        box.scale.x = 0;
        scene.add(box);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 2, 2);
        scene.add(light);

        const light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(-2,2,2);
        scene.add(light2);

    
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
            
            
            // Smoothly interpolate scale
            const currentSphereScale = sphere.scale.x;
            const newSphereScale = lerp(currentSphereScale, animState.targetSphereScale, lerpFactor);
            sphere.scale.setScalar(newSphereScale);
            
            const currentBoxScale = box.scale.x;
            const newBoxScale = lerp(currentBoxScale, animState.targetBoxScale, lerpFactor);
            box.scale.setScalar(newBoxScale);


            sphereGeometry = liquidMetal(sphereGeometry, radius);
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
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        console.log("Hello from canvasBuilder ", activeButtonId);
        if (activeButtonId) {
            changeSceneVisibility(activeButtonId, animationStateRef);
        }
    }, [activeButtonId]);

    return (
        <canvas ref={canvasRef}/>
    )
}

export default CanvasBuilder
