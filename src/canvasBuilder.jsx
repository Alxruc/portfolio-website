import { useEffect, useRef } from 'react';
import { 
    WebGLRenderer, 
    Scene, 
    OrthographicCamera, 
    Group, 
    PlaneGeometry, 
    TextureLoader, 
    ShaderMaterial, 
    Mesh, 
    AmbientLight, 
    DirectionalLight, 
    Clock, 
    Vector2, 
    RepeatWrapping, 
    LinearFilter 
} from 'three';

import vertexShader from './shaders/julia.v.glsl?raw'; 
import fragmentShader from './shaders/julia.f.glsl?raw'; 
import waterVertex from './shaders/water.v.glsl?raw';
import waterFragment from './shaders/water.f.glsl?raw';
import bgTexPath from './textures/multi_nebulae.webp';
import reflectTexPath from './textures/nebula.webp'; 
import waterColorPath from './textures/water_color.webp';
import waterNormalPath from './textures/water_normal.webp';

function CanvasBuilder({ activeButtonId }) {
    const canvasRef = useRef(null);
    const targetGroupY = useRef(0);
    const ANIMATION_DURATION = 0.8; // match CSS 0.8s
    let animProgress = 1.0;    

    useEffect(() => {
        if (activeButtonId != 'home') {
            targetGroupY.current = 2;
        } else {
            targetGroupY.current = 0; 
        }
    }, [activeButtonId]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new WebGLRenderer({
            canvas: canvas,
            antialias: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new Scene();
        const camera = new OrthographicCamera(-1, 1, 1, -1, -10, 10);
        
        const slideGroup = new Group();
        scene.add(slideGroup);

        // fractals
        const geometry = new PlaneGeometry(2, 2);
        const loader = new TextureLoader();
        
        // "normal" space
        const bgTex = loader.load(bgTexPath);
        bgTex.generateMipmaps = false;
        bgTex.minFilter = LinearFilter;
        bgTex.magFilter = LinearFilter;

        // pink nebula reflected in the fractal
        const reflectTex = loader.load(reflectTexPath);
        reflectTex.generateMipmaps = false;
        reflectTex.minFilter = LinearFilter;
        reflectTex.magFilter = LinearFilter;

        const material = new ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
                u_bgTex: { value: bgTex },
                u_reflectTex: { value: reflectTex },
                u_showFractal: { value: true }
            }
        });

        const fractalMesh = new Mesh(geometry, material);
        slideGroup.add(fractalMesh); 
        

        const ambientLight = new AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(0, 2, 7);
        scene.add(directionalLight);

        const colorTex = loader.load(waterColorPath);
        colorTex.wrapS = colorTex.wrapT = RepeatWrapping;

        const normalTex = loader.load(waterNormalPath);
        normalTex.wrapS = normalTex.wrapT = RepeatWrapping;

        const waterGeometry = new PlaneGeometry(2, 2); 

        const waterMaterial = new ShaderMaterial({
            vertexShader: waterVertex,
            fragmentShader: waterFragment,
            transparent: true,
            uniforms: {
                u_time: { value: 0 },
                u_colorMap: { value: colorTex },   
                u_normalMap: { value: normalTex }  
            }
        });

        const water = new Mesh(waterGeometry, waterMaterial);
        water.position.y = -2;
        slideGroup.add(water);
        let animationFrameId;
        const clock = new Clock();

        let startY = slideGroup.position.y;
        let previousTargetY = targetGroupY.current;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const deltaTime = clock.getDelta();
            const elapsedTime = clock.getElapsedTime();
            material.uniforms.u_time.value = elapsedTime;
            water.material.uniforms.u_time.value = elapsedTime;

            if (targetGroupY.current !== previousTargetY) {
                startY = slideGroup.position.y;
                previousTargetY = targetGroupY.current;
                animProgress = 0.0; // Reset progress
            }

            if (animProgress < ANIMATION_DURATION) {
                animProgress += deltaTime;
                let t = Math.min(animProgress / ANIMATION_DURATION, 1.0);
                // Mathematical Cubic Ease-Out matches CSS ease-out
                let easeOut = 1.0 - Math.pow(1.0 - t, 3.0);
                
                slideGroup.position.y = startY + (targetGroupY.current - startY) * easeOut;
            }

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
            waterGeometry.dispose();
            waterMaterial.dispose();
            //textures
            bgTex.dispose();
            reflectTex.dispose();
            colorTex.dispose();
            normalTex.dispose();
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