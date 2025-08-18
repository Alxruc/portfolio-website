import { useEffect, useRef } from 'react'

import * as THREE from 'three';

// Import shaders as text
import vertexShader from './shaders/particles.v.glsl?raw';
import fragmentShader from './shaders/particles.f.glsl?raw';

let camera, scene, clock, renderer;
let points, particleGeometry, particleMaterial;
let shaderUniforms;

function changeSceneVisibility(changedId, animationStateRef) {
    const animState = animationStateRef.current;
    
    switch(changedId) {
        case "home":
            // If coming from flowfield, first converge then go to rotating sphere
            if (animState.animationMode === 0) {
                animState.animationMode = 1; // converge first
                animState.targetMode = 2; // then rotating sphere
                animState.convergenceStartTime = performance.now();
                animState.convergenceDuration = 1000; // 1 second to converge
            } else {
                animState.animationMode = 2; // direct to rotating sphere
                animState.targetMode = 2;
            }
            // Reset flowfield for next time
            animState.flowfieldStartTime = -1; // Will be set when flowfield starts again
            break;
        case "about":
        case "projects":
        case "contact":
            if (animState.animationMode != 0) {
                animState.animationMode = 0; // flowfield
                animState.targetMode = 0;
                // Mark that flowfield start time needs to be set (will be set in animation loop)
                animState.flowfieldStartTime = -1;
            }
            break;
    }
}




function CanvasBuilder({activeButtonId}) {
    const canvasRef = useRef(null);
    const animationStateRef = useRef({
        animationMode: 2, // 0 = flowfield, 1 = converge, 2 = rotating sphere
        targetMode: 2, // Final target mode after transitions
        convergenceStartTime: 0,
        convergenceDuration: 1000,
        flowfieldStartTime: -1 // Will be set when flowfield starts
    });
    const dimensionsRef = useRef({ width: 0, height: 0 });

    useEffect(() => { // basically our init
        console.log("init")
        const canvas = canvasRef.current;

        // Renderer using React-managed canvas
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Check for float texture support
        const gl = renderer.getContext();
        const floatExtension = gl.getExtension('OES_texture_float') || gl.getExtension('WEBGL_color_buffer_float');
        if (!floatExtension) {
            console.warn('Float textures not supported, falling back to half float');
        }

        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505); // Dark background

        let fov = 70;
        camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 50;

        // Calculate screen dimensions
        let fovRad = fov/360 * 2 * Math.PI
        let height = 2 * Math.tan(fovRad / 2) * camera.position.z;
        let width = height * camera.aspect;
        dimensionsRef.current = {width, height}

        // Create sphere geometry for particle positions
        const radius = 25.0;
        const sphereGeometry = new THREE.SphereGeometry(radius, 222, 222);
        const spherePositions = sphereGeometry.attributes.position.array;
        const particleCount = spherePositions.length / 3;

        // Create particle geometry
        particleGeometry = new THREE.BufferGeometry();
        
        // Create positions and original positions
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Initial positions
            positions[i3] = spherePositions[i3];
            positions[i3 + 1] = spherePositions[i3 + 1];
            positions[i3 + 2] = spherePositions[i3 + 2];
            
            // Original positions
            originalPositions[i3] = spherePositions[i3];
            originalPositions[i3 + 1] = spherePositions[i3 + 1];
            originalPositions[i3 + 2] = spherePositions[i3 + 2];
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('originalPosition', new THREE.BufferAttribute(originalPositions, 3));

        // Setup shader uniforms
        shaderUniforms = {
            time: { value: 0 },
            deltaTime: { value: 0 },
            radius: { value: radius },
            animationMode: { value: animationStateRef.current.animationMode },
            dimensions: { value: new THREE.Vector2(width, height) },
            noiseScale: { value: 0.1 },
            flowSpeed: { value: 2.0 },
            flowfieldStartTime: { value: -1 }
        };

        // Create shader material
        particleMaterial = new THREE.ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        // Create points
        points = new THREE.Points(particleGeometry, particleMaterial);
        points.rotateX(Math.PI/4.0)
        points.rotateZ(Math.PI/5.0)
        scene.add(points);

        // Animation loop        
        const animate = () => {
            setTimeout( function() {

                requestAnimationFrame( animate );

            }, 1000 / 60 );
            
            const deltaTime = clock.getDelta();
            const elapsedTime = clock.getElapsedTime();
            const animState = animationStateRef.current;
            
            // Handle convergence transition timing
            if (animState.animationMode === 1 && animState.targetMode === 2) {
                const convergenceTime = performance.now() - animState.convergenceStartTime;
                const convergenceProgress = Math.min(convergenceTime / animState.convergenceDuration, 1.0);
                
                // Switch to rotating sphere when convergence is complete
                if (convergenceProgress >= 1.0) {
                    animState.animationMode = 2;
                }
            }
            
            
            // Update shader uniforms
            shaderUniforms.time.value = elapsedTime;
            shaderUniforms.deltaTime.value = deltaTime;
            shaderUniforms.animationMode.value = animState.animationMode;
            
            // Handle flowfield start time synchronization
            if (animState.animationMode === 0 && animState.flowfieldStartTime === -1) {
                // If we just switched to flowfield mode but start time isn't set, set it now
                animState.flowfieldStartTime = elapsedTime;
            }
            shaderUniforms.flowfieldStartTime.value = animState.flowfieldStartTime;
            
            // Render particles to screen
            renderer.render(scene, camera);
        };
        animate();

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            let fovRad = fov / 360 * 2 * Math.PI;
            height = 2 * Math.tan(fovRad / 2) * camera.position.z;
            width = height * camera.aspect;
            dimensionsRef.current = { width, height };
            
            // Update shader uniforms
            if (shaderUniforms) {
                shaderUniforms.dimensions.value.set(width, height);
            }
        };
        window.addEventListener('resize', onWindowResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
            if (particleGeometry) particleGeometry.dispose();
            if (particleMaterial) particleMaterial.dispose();
        };
    }, []);

    useEffect(() => {
        if (activeButtonId) {
            changeSceneVisibility(activeButtonId, animationStateRef);
        }
    }, [activeButtonId]);

    return (
        <canvas ref={canvasRef}/>
    )
}

export default CanvasBuilder
