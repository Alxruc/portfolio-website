precision highp float;

// Custom uniforms (Three.js provides modelViewMatrix and projectionMatrix automatically)
uniform float time;
uniform float deltaTime;
uniform float radius;
uniform int animationMode; // 0 = flowfield, 1 = converge, 2 = rotate
uniform vec2 dimensions;
uniform float noiseScale;
uniform float flowSpeed;
uniform float flowfieldStartTime; // When the flowfield animation started

// Custom attributes (Three.js provides position and uv automatically)
attribute vec3 originalPosition; // Store original sphere positions

// Varying to pass to fragment shader
varying vec3 vPosition;

// Simple noise function
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

vec3 rotatePosition(vec3 pos) {
    // Simple sphere rotation around Y axis
    float rotationSpeed = 0.01;
    float angle = time * rotationSpeed;
    
    vec3 rotatedPos = pos;
    rotatedPos.x = pos.x * cos(angle) - pos.z * sin(angle);
    rotatedPos.z = pos.x * sin(angle) + pos.z * cos(angle);
    
    return rotatedPos;
}

vec3 flowfieldPosition(vec3 basePos) {
    // Calculate time since flowfield started
    float flowfieldTime = time - flowfieldStartTime;
    
    // Only start the flowfield effect after it has been activated
    if (flowfieldTime < 0.0) {
        return basePos; // Return original sphere position if flowfield hasn't started
    }
    
    // Create a continuous flowfield that starts from sphere and flows naturally
    // Use the base position as the starting point for noise sampling
    vec2 noisePos = basePos.xy * noiseScale;
    
    // Calculate flowfield direction at current time
    float angle1 = noise(noisePos + time * 0.001) * 6.28318530718;
    
    // Create velocity field
    vec3 velocity = vec3(
        flowSpeed * (cos(angle1)),
        flowSpeed * (sin(angle1)),
        0.0
    );
    
    // Calculate displacement = velocity * time
    vec3 displacement = velocity * flowfieldTime;
    
    
    vec3 currentPos = basePos + displacement;
    
    // Apply wrapping to keep particles on screen
    float halfW = dimensions.x * 0.5;
    float halfH = dimensions.y * 0.5;
    
    // Wrap X and Y coordinates (spawning in middle so this if else is completely useless but changeable)
    if (currentPos.x > halfW) {
        currentPos.x = 0.;
    } else if (currentPos.x < -halfW) {
        currentPos.x = 0.;
    }
    
    if (currentPos.y > halfH) {
        currentPos.y = 0.;
    } else if (currentPos.y < -halfH) {
        currentPos.y = 0.;
    }
    
    return currentPos;
}

vec3 convergePosition(vec3 currentPos) {
    // Converge back to sphere
    vec3 targetPos = normalize(currentPos) * radius;
    return mix(currentPos, targetPos, 0.05); // Gradual convergence
}

void main() {
    vec3 newPosition;
    
    if (animationMode == 2) {
        // Rotating sphere - use original positions
        newPosition = rotatePosition(originalPosition);
    } else if (animationMode == 1) {
        // Converging back to sphere
        newPosition = convergePosition(position);
    } else {
        // Flowfield - dissolve from sphere
        newPosition = flowfieldPosition(originalPosition);
    }
    
    vPosition = newPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = 1.0;
}
