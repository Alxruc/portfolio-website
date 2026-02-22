import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import vertexShader from './shaders/julia.v.glsl?raw'; 
import fragmentShader from './shaders/julia.f.glsl?raw'; 
import bgTexPath from './textures/multi_nebulae.jpg';
import reflectTexPath from './textures/nebula.jpg'; 
import tileNormalPath from './textures/tile_normal.jpg';
import noisePath from './textures/noise.png';

function CanvasBuilder({ activeButtonId }) {
    const canvasRef = useRef(null);
    const targetGroupY = useRef(0);
    const speed = 5.0;

    useEffect(() => {
        if (activeButtonId != 'home') {
            targetGroupY.current = 2;
        } else {
            targetGroupY.current = 0; 
        }
    }, [activeButtonId]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
        
        const slideGroup = new THREE.Group();
        scene.add(slideGroup);

        // fractals
        const geometry = new THREE.PlaneGeometry(2, 2);
        const loader = new THREE.TextureLoader();
        
        // "normal" space
        const bgTex = loader.load(bgTexPath);
        bgTex.generateMipmaps = false;
        bgTex.minFilter = THREE.LinearFilter;
        bgTex.magFilter = THREE.LinearFilter;

        // pink nebula reflected in the fractal
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

        const fractalMesh = new THREE.Mesh(geometry, material);
        slideGroup.add(fractalMesh); 
        

        const tileNormal = loader.load(tileNormalPath);
        const tileGeometry = new THREE.PlaneGeometry(2, 2, 40, 40);
        const tileMaterial = new THREE.MeshStandardMaterial({
            color: 0x050505,
            roughness: 0.2,
            metalness: 0.8,
            normalMap: tileNormal
        });
        const tile = new THREE.Mesh(tileGeometry, tileMaterial);
        tile.position.y = -2;
        slideGroup.add(tile);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(0, 2, 7);
        scene.add(directionalLight);


        // TODO port this to GPU
        const noiseData = { pixels: null, width: 0, height: 0 };
        const img = new Image();
        img.src = noisePath;
        img.onload = () => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = img.width;
            tempCanvas.height = img.height;
            const ctx = tempCanvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            noiseData.pixels = ctx.getImageData(0, 0, img.width, img.height).data;
            noiseData.width = img.width;
            noiseData.height = img.height;
        };

      
        let animationFrameId;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const deltaTime = clock.getDelta();
            const elapsedTime = clock.getElapsedTime();
            material.uniforms.u_time.value = elapsedTime;
            slideGroup.position.y += (targetGroupY.current - slideGroup.position.y) * (1.0 - Math.exp(-speed * deltaTime));

            if (noiseData.pixels) {
                const posAttr = tileGeometry.attributes.position;
                for (let i = 0; i < posAttr.count; i++) {
                    const x = posAttr.getX(i);
                    const y = posAttr.getY(i);

                    // crawling effect
                    let u = ((x + 1) / 2 + elapsedTime * 0.05) % 1;
                    let v = ((y + 1) / 2 + elapsedTime * 0.05) % 1;

                    // Convert to pixel indices
                    const px = Math.floor(u * (noiseData.width - 1));
                    const py = Math.floor(v * (noiseData.height - 1));
                    const index = (py * noiseData.width + px) * 4;

                    const noiseValue = noiseData.pixels[index] / 255;
                    posAttr.setZ(i, noiseValue * 0.25); 
                }
                posAttr.needsUpdate = true;
                tileGeometry.computeVertexNormals();
            }
            // Since vertices moved, normals must be recalculated for lighting to look right
            tileGeometry.computeVertexNormals();

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
            //mesh stuff
            geometry.dispose();
            material.dispose();
            tileGeometry.dispose();
            tileMaterial.dispose();

            //textures
            bgTex.dispose();
            reflectTex.dispose();
            tileNormal.dispose();
        };
    }, []); 

    return (
        <canvas 
            ref={canvasRef} 
            style={{ display: 'block', width: '100vw', height: '100vh', pointerEvents: 'none' }}
        />
    )
}

export default CanvasBuilder;