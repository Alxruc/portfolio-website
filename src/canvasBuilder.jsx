import { useEffect, useRef } from 'react'
import * as THREE from 'three';

import vertexShader from './shaders/julia.v.glsl?raw'; 
import fragmentShader from './shaders/julia.f.glsl?raw'; 


function CanvasBuilder() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false, // Raymarching handles its own AA usually
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();

        // Use an Orthographic Camera for a full-screen shader
        // This ensures coordinates map 1:1 with the screen
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Create a plane that fills the screen (2x2)
        const geometry = new THREE.PlaneGeometry(2, 2);

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationFrameId;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            // Update uniforms
            material.uniforms.u_time.value = clock.getElapsedTime();
            
            renderer.render(scene, camera);
        };
        animate();

        const onWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            renderer.setSize(width, height);
            
            // Update shader resolution uniform
            material.uniforms.u_resolution.value.set(width, height);
        };
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ display: 'block', width: '100vw', height: '100vh' }}
        />
    )
}

export default CanvasBuilder