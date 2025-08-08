import { useEffect, useRef } from 'react'
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

import * as THREE from 'three';

let camera, scene, clock, noise;
let sphere, points;
let pgeometry;

const numParticles = 7000;
const point_positions = new Float32Array(numParticles * 3);
const point_velocities = new Float32Array(numParticles * 3);

function convergeToCenter(geometry, deltaTime, animStateRef, radius) {
    const animState = animStateRef.current;
    const pos = geometry.attributes.position;
    const convergenceSpeed = 500.0;
    let allConverged = true;
    const convergenceThreshold = 1; 
    let convergedCount = 0;

    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        
        // Calculate distance to center
        const distance = Math.sqrt(x * x + y * y + z * z);
        
        // Skip particles that are too close to origin (division by zero)
        if (distance < 0.001) {
            continue;
        }
        
        // Get target position on sphere surface
        const targetX = (x / distance) * radius;
        const targetY = (y / distance) * radius;
        const targetZ = (z / distance) * radius;
        
        // Calculate distance to target sphere position
        const distanceToTarget = Math.sqrt(
            (x - targetX) * (x - targetX) + 
            (y - targetY) * (y - targetY) + 
            (z - targetZ) * (z - targetZ)
        );
        
        // Check if particle needs to move
        if (distanceToTarget > convergenceThreshold) {
            allConverged = false;
            
            // Move towards target sphere position
            const dirX = (targetX - x) / distanceToTarget;
            const dirY = (targetY - y) / distanceToTarget;
            const dirZ = (targetZ - z) / distanceToTarget;
            
            const moveDistance = convergenceSpeed * deltaTime;
            const actualMoveDistance = Math.min(moveDistance, distanceToTarget);
            
            const newX = x + dirX * actualMoveDistance;
            const newY = y + dirY * actualMoveDistance;
            const newZ = z + dirZ * actualMoveDistance;
            
            pos.setXYZ(i, newX, newY, newZ);
        } else {
            convergedCount++;
        }
    }
    
    pos.needsUpdate = true;
    animState.allConverged = allConverged;
}


function flowfield_animation(geometry, height, width, deltaTime) {
    const halfW = width / 2;
    const halfH = height / 2;
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i) * 0.1;
        const y = pos.getY(i) * 0.1;
        const t = performance.now() * 0.0001;


        // Get angle from noise
        const angle = noise(x, y, 0, t) * Math.PI * 2;
        const speed = 4.0;
        const velX = speed * deltaTime * (Math.cos(angle) + 3 * Math.random() - 1.5 ); // adding a bit of randomness so they dont all bunch up
        const velY = speed * deltaTime * (Math.sin(angle) + 1 * Math.random() - 0.5);

        const newX = pos.getX(i) + velX;
        const newY = pos.getY(i) + velY;

        // Wrap around screen edges
        let finalX = newX;
        let finalY = newY;
        
        if (newX > halfW) finalX = -halfW;
        else if (newX < -halfW) finalX = halfW;
        if (newY > halfH) finalY = -halfH;
        else if (newY < -halfH) finalY = halfH;

        pos.setXYZ(i, finalX, finalY, 0);
    }
    
    pos.needsUpdate = true;
}


function initializeParticlePositions(width, height) {
    // Initialize positions and velocities
    for (let i = 0; i < numParticles; i++) {
        point_positions[i * 3] = (Math.random() - 0.5) * width;
        point_positions[i * 3 + 1] = (Math.random() - 0.5) * height;
        point_positions[i * 3 + 2] = 0;
        point_velocities[i * 3] = 0;
        point_velocities[i * 3 + 1] = 0;
        point_velocities[i * 3 + 2] = 0;
    }
}

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
    pos.needsUpdate = true;
}

function changeSceneVisibility(changedId, animationStateRef, width, height) {
    const animState = animationStateRef.current;
    
    switch(changedId) {
        case "home":
            animState.targetSphereScale = 1;
            animState.particleFlag = false;
            animState.allConverged = false;
            break;
        case "about":
        case "projects":
        case "contact":
            animState.targetSphereScale = 0;
            animState.particleFlag = true;
            animState.allConverged = false;
            break;
    }
}


function CanvasBuilder({activeButtonId}) {
    const canvasRef = useRef(null);
    const animationStateRef = useRef({
        targetSphereScale: 1,
        particleFlag: false,
        allConverged: true
    });
    const dimensionsRef = useRef({ width: 0, height: 0 });

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

        let fov = 70;
        camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 20;

        // Sphere
        const radius = 5.0;
        let sphereGeometry = new THREE.SphereGeometry(radius, 128, 128); 

        let nPos = [];
        let v3 = new THREE.Vector3();
        let pos = sphereGeometry.attributes.position;
        for (let i = 0; i < pos.count; i++){
            v3.fromBufferAttribute(pos, i).normalize();
            nPos.push(v3.clone());
        }
        sphereGeometry.userData.nPos = nPos;

        // let material = new THREE.MeshStandardMaterial({
        //     color: '#aaa9ad',
        //     roughness: 0.3,
        //     metalness: 1.0,
        //     envMap: new THREE.PMREMGenerator(renderer).fromScene(scene)
        // });

        // sphere = new THREE.Mesh(sphereGeometry, material);
        // scene.add(sphere);


        // const light = new THREE.DirectionalLight(0xffffff, 1);
        // light.position.set(2, 2, 2);
        // scene.add(light);

        // const light2 = new THREE.DirectionalLight(0xffffff, 1);
        // light2.position.set(-2,2,2);
        // scene.add(light2);


        let fovRad = fov/360 * 2 * Math.PI
        let height = 2 * Math.tan(fovRad / 2) * camera.position.z; // get how far to the top the camera can see
        let width = height * camera.aspect;

        dimensionsRef.current = {width, height}
        initializeParticlePositions(width, height);

        pgeometry = new THREE.BufferGeometry();
        pgeometry.setAttribute('position', new THREE.BufferAttribute(point_positions, 3));

        const pmaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01});
        points = new THREE.Points(sphereGeometry, pmaterial);
        scene.add(points);


    
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
            console.log(animState.allConverged);
            
            // // Smoothly interpolate scale
            // const currentSphereScale = sphere.scale.x;
            // const newSphereScale = lerp(currentSphereScale, animState.targetSphereScale, lerpFactor);
            // sphere.scale.setScalar(newSphereScale);

            const deltaTime = clock.getDelta();

            if (animState.particleFlag) {
                flowfield_animation(sphereGeometry, height, width, deltaTime);
            } else if (!animState.allConverged) {
                convergeToCenter(sphereGeometry, deltaTime, animationStateRef, radius);
            } else {
                liquidMetal(sphereGeometry, radius);
            }
            
            
            
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
        };
        window.addEventListener('resize', onWindowResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        if (activeButtonId) {
            const { width, height } = dimensionsRef.current;
            changeSceneVisibility(activeButtonId, animationStateRef, width, height);
        }
    }, [activeButtonId]);

    return (
        <canvas ref={canvasRef}/>
    )
}

export default CanvasBuilder
