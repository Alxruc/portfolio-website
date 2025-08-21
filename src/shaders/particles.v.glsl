precision highp float;

// Custom uniforms
uniform sampler2D positionTexture; // Ping-pong texture containing current positions
uniform float time;
uniform vec2 textureSize; // Size of the position texture

// Custom attributes
attribute vec2 textureIndex; // UV coordinates to sample from position texture

// Varying to pass to fragment shader
varying vec3 vPosition;

void main() {
    // Sample position from texture
    vec3 worldPosition = texture2D(positionTexture, textureIndex).xyz;
    
    // Transform to clip space
    vec4 clipPosition = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
    
    // Perform perspective division to get normalized device coordinates (-1 to 1)
    vec2 ndc = clipPosition.xy / clipPosition.w;

    // Smooth wrapping in NDC space
    ndc = mod(ndc + 1.0, 2.0) - 1.0;

    // Back to clip space
    clipPosition.xy = ndc * clipPosition.w;

    vPosition = worldPosition;
    gl_Position = clipPosition;
    gl_PointSize = 1.0;
}