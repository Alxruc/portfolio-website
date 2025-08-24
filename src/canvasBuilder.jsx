import { useEffect, useRef } from 'react'

import * as THREE from 'three';

// Import shaders as text
import vertexShader from './shaders/particles.v.glsl?raw';
import fragmentShader from './shaders/particles.f.glsl?raw';
import positionComputeVertexShader from './shaders/position-compute.v.glsl?raw';
import positionComputeFragmentShader from './shaders/position-compute.f.glsl?raw';

let camera, scene, clock, renderer;
let points, particleGeometry, particleMaterial;
let shaderUniforms;
let positionTexture1, positionTexture2, originalPositionTexture;
let renderTarget1, renderTarget2;
let computeMaterial, computeScene, computeCamera;
let currentTexture = 0; // 0 or 1 for ping-pong

const convergenceDuration = 500

function changeSceneVisibility(changedId, animationStateRef) {
    const animState = animationStateRef.current;
    
    switch(changedId) {
        case "home":
            // If coming from flowfield, first converge then go to rotating sphere
            if (animState.animationMode === 0) {
                animState.animationMode = 1; // converge first
                animState.targetMode = 2; // then rotating sphere
                animState.convergenceStartTime = performance.now();
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
        flowfieldStartTime: -1 // Will be set when flowfield starts
    });
    const dimensionsRef = useRef({ width: 0, height: 0 });

    const isPortraitMode = () => {
        return window.innerHeight > window.innerWidth;
    };

    // Get proper viewport dimensions (especially important for mobile)
    const getViewportDimensions = () => {
        return {
            width: Math.min(window.innerWidth, document.documentElement.clientWidth),
            height: Math.min(window.innerHeight, document.documentElement.clientHeight)
        };
    };

    useEffect(() => { // basically our init
        const canvas = canvasRef.current;

        // Get proper viewport dimensions
        const { width: viewportWidth, height: viewportHeight } = getViewportDimensions();

        // Renderer using React-managed canvas
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setSize(viewportWidth, viewportHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance

        // Check for float texture support
        const gl = renderer.getContext();
        const floatExtension = gl.getExtension('OES_texture_float') || gl.getExtension('WEBGL_color_buffer_float');
        if (!floatExtension) {
            console.warn('Float textures not supported, falling back to half float');
        }

        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505); // Dark background

        let fov = isPortraitMode() ? 80 : 70; // Wider FOV for portrait
        camera = new THREE.PerspectiveCamera(
            fov,
            viewportWidth / viewportHeight,
            0.1,
            100
        );
        camera.position.z = 5;

        // Calculate screen dimensions
        let fovRad = fov/360 * 2 * Math.PI
        let height = 2 * Math.tan(fovRad / 2) * camera.position.z;
        let width = height * camera.aspect;
        dimensionsRef.current = {width, height}

        // Create sphere geometry for particle positions
        const radius = 2.0;
        const sphereGeometry = new THREE.SphereGeometry(radius, 222, 222);
        const spherePositions = sphereGeometry.attributes.position.array;
        const particleCount = spherePositions.length / 3;

        // Calculate texture size (square texture to hold all particles)
        const textureSize = Math.ceil(Math.sqrt(particleCount));
        const textureData = new Float32Array(textureSize * textureSize * 4); // RGBA

        // Fill texture with particle positions
        for (let i = 0; i < particleCount; i++) {
            const i4 = i * 4;
            const i3 = i * 3;
            textureData[i4] = spherePositions[i3];     // x
            textureData[i4 + 1] = spherePositions[i3 + 1]; // y
            textureData[i4 + 2] = spherePositions[i3 + 2]; // z
            textureData[i4 + 3] = 1.0; // w (unused)
        }

        // Create textures for ping-pong
        const textureOptions = {
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            wrapS: THREE.ClampToEdgeWrapping,
            wrapT: THREE.ClampToEdgeWrapping
        };

        // Position textures (ping-pong)
        positionTexture1 = new THREE.DataTexture(textureData, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
        positionTexture1.needsUpdate = true;
        Object.assign(positionTexture1, textureOptions);

        positionTexture2 = new THREE.DataTexture(textureData, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
        positionTexture2.needsUpdate = true;
        Object.assign(positionTexture2, textureOptions);

        // Original position texture (constant)
        originalPositionTexture = new THREE.DataTexture(textureData, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
        originalPositionTexture.needsUpdate = true;
        Object.assign(originalPositionTexture, textureOptions);

        // Create render targets for ping-pong
        renderTarget1 = new THREE.WebGLRenderTarget(textureSize, textureSize, {
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter
        });

        renderTarget2 = new THREE.WebGLRenderTarget(textureSize, textureSize, {
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter
        });

        // Set initial texture content
        renderer.setRenderTarget(renderTarget1);
        renderer.clear();
        renderer.setRenderTarget(renderTarget2);
        renderer.clear();
        renderer.setRenderTarget(null);

        // Create particle geometry with texture coordinates
        particleGeometry = new THREE.BufferGeometry();
        
        const particlePositions = new Float32Array(particleCount * 3);
        const textureIndices = new Float32Array(particleCount * 2);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const i2 = i * 2;
            
            // Dummy positions (will be overridden by shader)
            particlePositions[i3] = 0;
            particlePositions[i3 + 1] = 0;
            particlePositions[i3 + 2] = 0;
            
            // Texture coordinates for sampling position texture
            const x = (i % textureSize) / textureSize;
            const y = Math.floor(i / textureSize) / textureSize;
            textureIndices[i2] = x;
            textureIndices[i2 + 1] = y;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('textureIndex', new THREE.BufferAttribute(textureIndices, 2));

        // Setup compute material for position updates
        const computeUniforms = {
            positionTexture: { value: positionTexture1 },
            originalPositionTexture: { value: originalPositionTexture },
            time: { value: 0 },
            deltaTime: { value: 0 },
            animationMode: { value: animationStateRef.current.animationMode },
            dimensions: { value: new THREE.Vector2(width, height) },
            flowSpeed: { value: 0.5 },
            noiseScale: { value: 0.7 },
            convergenceProgress: { value: 1 },
            flowfieldStartTime: { value: -1 }
        };

        computeMaterial = new THREE.ShaderMaterial({
            uniforms: computeUniforms,
            vertexShader: positionComputeVertexShader,
            fragmentShader: positionComputeFragmentShader
        });

        // Create compute scene and camera
        computeScene = new THREE.Scene();
        computeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        
        // Create fullscreen quad for compute
        const computeGeometry = new THREE.PlaneGeometry(2, 2);
        const computeMesh = new THREE.Mesh(computeGeometry, computeMaterial);
        computeScene.add(computeMesh);

        // Setup particle render uniforms
        shaderUniforms = {
            positionTexture: { value: positionTexture1 },
            time: { value: 0 },
            textureSize: { value: new THREE.Vector2(textureSize, textureSize) },
            pointSize: { value: 1.0 }
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
            requestAnimationFrame(animate); 
            
            const deltaTime = clock.getDelta();
            const elapsedTime = clock.getElapsedTime();
            const animState = animationStateRef.current;
            
            // Handle convergence transition timing
            if (animState.animationMode === 1 && animState.targetMode === 2) {
                const convergenceTime = performance.now() - animState.convergenceStartTime;
                const convergenceProgress = Math.min(convergenceTime / convergenceDuration, 1.0);
                
                computeMaterial.uniforms.convergenceProgress.value = convergenceProgress;
                // Switch to rotating sphere when convergence is complete
                if (convergenceProgress >= 1.0) {
                    animState.animationMode = 2;
                }
            }
            
            // Handle flowfield start time synchronization
            if (animState.animationMode === 0 && animState.flowfieldStartTime === -1) {
                // If we just switched to flowfield mode but start time isn't set, set it now
                animState.flowfieldStartTime = performance.now() * 0.001; // Use actual time
            }

            // Update compute shader uniforms
            const actualTime = performance.now() * 0.001; // Convert milliseconds to seconds
            computeMaterial.uniforms.time.value = actualTime;
            computeMaterial.uniforms.deltaTime.value = deltaTime;
            computeMaterial.uniforms.animationMode.value = animState.animationMode;
            computeMaterial.uniforms.flowfieldStartTime.value = animState.flowfieldStartTime;
            
            // Ping-pong: read from current texture, write to other
            const inputTexture = currentTexture === 0 ? positionTexture1 : positionTexture2;
            const outputTarget = currentTexture === 0 ? renderTarget2 : renderTarget1;
            
            // Update position texture input
            computeMaterial.uniforms.positionTexture.value = inputTexture;
            
            // Render compute shader to update positions
            renderer.setRenderTarget(outputTarget);
            renderer.render(computeScene, computeCamera);
            
            // Update particle material to use new positions
            const outputTexture = currentTexture === 0 ? renderTarget2.texture : renderTarget1.texture;
            shaderUniforms.positionTexture.value = outputTexture;
            
            // Swap textures for next frame
            if (currentTexture === 0) {
                positionTexture2 = outputTexture;
                currentTexture = 1;
            } else {
                positionTexture1 = outputTexture;
                currentTexture = 0;
            }
            
            // Render particles to screen
            renderer.setRenderTarget(null);
            renderer.render(scene, camera);
        };
        animate();

        const onWindowResize = () => {
            const { width: viewportWidth, height: viewportHeight } = getViewportDimensions();
            
            camera.aspect = viewportWidth / viewportHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(viewportWidth, viewportHeight);
            const newFov = isPortraitMode() ? 80 : 70;
            camera.fov = newFov;
            let fovRad = newFov / 360 * 2 * Math.PI;
            height = 2 * Math.tan(fovRad / 2) * camera.position.z;
            width = height * camera.aspect;
            dimensionsRef.current = { width, height };
            
            // Update compute shader uniforms
            if (computeMaterial) {
                computeMaterial.uniforms.dimensions.value.set(width, height);
            }

            if (shaderUniforms) {
                shaderUniforms.pointSize.value = isPortraitMode() ? 1.5 : 1.0;
            }
        };
        window.addEventListener('resize', onWindowResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
            if (particleGeometry) particleGeometry.dispose();
            if (particleMaterial) particleMaterial.dispose();
            if (computeMaterial) computeMaterial.dispose();
            if (renderTarget1) renderTarget1.dispose();
            if (renderTarget2) renderTarget2.dispose();
            if (positionTexture1) positionTexture1.dispose();
            if (positionTexture2) positionTexture2.dispose();
            if (originalPositionTexture) originalPositionTexture.dispose();
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
