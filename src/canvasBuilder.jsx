import { useEffect, useRef } from 'react'
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

import * as THREE from 'three';

import cookTorranceVertexShader from "./shaders/cook-torrance.v.glsl?raw";
import cookTorranceFragmentShader from './shaders/cook-torrance.f.glsl?raw';

let camera;

function CanvasBuilder() {
    const canvasRef = useRef(null)


    useEffect(() => { // basically our init
        const canvas = canvasRef.current;

        // Renderer using React-managed canvas
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);


        const scene = new THREE.Scene();
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

        let sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        let noise = openSimplexNoise.makeNoise4D(Date.now());
        let clock = new THREE.Clock();

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 2, 2);
        scene.add(light);

        const light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(-2,2,2);
        scene.add(light2);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            // Offset each vertex by a noise amount (liquid metal effect)
            let t = clock.getElapsedTime();
            geometry.userData.nPos.forEach((p, idx) => {
                let ns = noise(p.x, p.y, p.z, t);
                v3.copy(p).multiplyScalar(radius).addScaledVector(p, ns);
                pos.setXYZ(idx, v3.x, v3.y, v3.z);
            })
            geometry.computeVertexNormals();
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

    return (
        <canvas ref={canvasRef}/>
    )
}

export default CanvasBuilder
