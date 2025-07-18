import { useEffect, useRef } from 'react'
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

import * as THREE from 'three';

import cookTorranceVertexShader from "./shaders/cook-torrance.v.glsl?raw";
import cookTorranceFragmentShader from './shaders/cook-torrance.f.glsl?raw';


function CanvasBuilder() {
    const canvasRef = useRef(null)


    useEffect(() => {
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


        const camera = new THREE.PerspectiveCamera(
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
        let material = new THREE.RawShaderMaterial( {
            uniforms : {
                light_color: {value: new THREE.Vector3(1.0,1.0,1.0)},
                lightPosition: {value: new THREE.Vector3(12.0,12.0,12.0)},
                ambient_reflectance: {value: 0.5},
                ambient_color: {value: new THREE.Vector3(255/255,255/255,255/255)},
                diffuse_reflectance: {value: 1.0},
                diffuse_color: {value: new THREE.Vector3(210/255,210/255,210/255)},
                specular_reflectance: {value: 0.6},
                specular_color: {value: new THREE.Vector3(255/255,255/255,255/255)},
                intensity: {value: 1.0},
                roughness: {value: 0.2}
            },
            vertexShader: cookTorranceVertexShader,
            fragmentShader: cookTorranceFragmentShader,
            glslVersion: THREE.GLSL3
        });
        material.uniformsNeedUpdate = true;

        let sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        let noise = openSimplexNoise.makeNoise4D(Date.now());
        let clock = new THREE.Clock();

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 2, 2);
        scene.add(light);

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
