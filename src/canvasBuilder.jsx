import { useEffect, useRef } from 'react'
import * as THREE from 'three';

import vertexShader from './shaders/julia.v.glsl?raw'; 
import fragmentShader from './shaders/julia.f.glsl?raw'; 
import bgTexPath from './textures/multi_nebulae.jpg';
import reflectTexPath from './textures/nebula.jpg'; 

function CanvasBuilder( {activeButtonId} ) {
    const canvasRef = useRef(null);

    const canvasWrapperStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        transition: 'transform 1.0s cubic-bezier(0.77, 0, 0.175, 1)', // Smooth ease-in-out
        // If we are on home, stay at 0. If not, slide the entire canvas UP by 100% of the screen height
        transform: activeButtonId === 'home' ? 'translateY(0%)' : 'translateY(-100%)',
        pointerEvents: activeButtonId === 'home' ? 'auto' : 'none'
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const loader = new THREE.TextureLoader();
        
        // "normal" space
        const bgTex = loader.load(bgTexPath);
        bgTex.generateMipmaps = false;
        bgTex.minFilter = THREE.LinearFilter;
        bgTex.magFilter = THREE.LinearFilter;

        // pink nebula to reflect inside the fractal
        const reflectTex = loader.load(reflectTexPath);
        reflectTex.generateMipmaps = false;
        reflectTex.minFilter = THREE.LinearFilter;
        reflectTex.magFilter = THREE.LinearFilter;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_bgTex: { value: bgTex },
                u_reflectTex: { value: reflectTex },
                u_showFractal: { value: true }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationFrameId;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            material.uniforms.u_time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        };
        animate();

        const onWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
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
        <div style={canvasWrapperStyle}>
        <canvas 
            ref={canvasRef} 
            style={{ display: 'block', width: '100vw', height: '100vh' }}
        />
        </div>
    )
}

export default CanvasBuilder