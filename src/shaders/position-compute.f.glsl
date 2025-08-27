precision highp float;

uniform sampler2D positionTexture; // Current particle positions
uniform sampler2D originalPositionTexture; // Original sphere positions
uniform float time;
uniform float deltaTime;
uniform int animationMode; // 0 = flowfield, 1 = converge, 2 = rotate
uniform vec2 dimensions;
uniform float flowSpeed;
uniform float noiseScale;
uniform float convergenceProgress;
uniform float flowfieldStartTime;

varying vec2 vUv;

/*
    Hash and Noise functions originally made by Inigo Quilez https://iquilezles.org/
*/
float hash(float n) {
    return fract(sin(n) * 43758.5453);
}

float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);

    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 57.0 + 113.0 * p.z;

    float res = mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                        mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
                    mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                        mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
    return res;
}

vec3 rotatePosition(vec3 pos) {
    float rotationSpeed = 0.05;
    float angle = time * rotationSpeed;
    
    vec3 rotatedPos = pos;
    rotatedPos.x = pos.x * cos(angle) - pos.z * sin(angle);
    rotatedPos.z = pos.x * sin(angle) + pos.z * cos(angle);
    
    return rotatedPos;
}

vec3 updateFlowfieldPosition(vec3 currentPos, vec3 originalPos) {
  
    
    // Sample noise at current position
    vec3 noisePos = currentPos * noiseScale;
    
    // Get flowfield angle
    float angle = noise(noisePos) * 6.28318530718;
    
    
    // Calculate velocity
    vec2 velocity = vec2(
        flowSpeed * (cos(angle)),
        flowSpeed * (sin(angle))
    );
    
    // Update position using deltaTime
    vec3 newPos = currentPos + vec3(velocity * deltaTime, 0.0);
    
    return newPos;
}

void main() {
    vec3 currentPos = texture2D(positionTexture, vUv).xyz;
    vec3 originalPos = texture2D(originalPositionTexture, vUv).xyz;
    
    vec3 newPosition = currentPos;
    
    if (animationMode == 2) {
        // Rotating sphere
        newPosition = rotatePosition(originalPos);
    } else if (animationMode == 1) {
        // Converging
        vec3 flowfieldPos = updateFlowfieldPosition(currentPos, originalPos);
        newPosition = mix(flowfieldPos, originalPos, convergenceProgress);
    } else {
        // Flowfield
        newPosition = updateFlowfieldPosition(currentPos, originalPos);
    }
    
    gl_FragColor = vec4(newPosition, 1.0);
}
