uniform float u_time;
uniform sampler2D u_colorMap;
uniform sampler2D u_normalMap;

varying vec2 vUv;

void main() {
    // Scale up the base UVs
    vec2 uv = vUv * 3.0;

    // Calculate two different scrolling UVs for the normal map layers
    vec2 normalUv1 = uv + vec2(u_time * 0.02, u_time * 0.03);
    vec2 normalUv2 = uv * 1.5 + vec2(-u_time * 0.015, u_time * 0.025);

    vec3 n1 = texture2D(u_normalMap, normalUv1).rgb;
    vec3 n2 = texture2D(u_normalMap, normalUv2).rgb;

    // Blend the normals and convert from [0, 1] color range to [-1, 1] vector range
    vec3 blendedNormal = mix(n1, n2, 0.5);
    vec2 distortion = (blendedNormal.rg * 2.0 - 1.0) * 0.1; // 0.1 controls distortion strength

    // Scroll the color map UVs slowly, and add our normal distortion
    vec2 colorUv = uv + vec2(0.0, -u_time * 0.04) + distortion;

    vec4 finalColor = texture2D(u_colorMap, colorUv);

    gl_FragColor = vec4(0.1 * finalColor.rgb, 1.0);
}