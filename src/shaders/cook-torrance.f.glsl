// defines the precision
precision highp float;

// we have access to the same uniforms as in the vertex shader
// = object.matrixWorld
uniform mat4 modelMatrix;

// = camera.matrixWorldInverse * object.matrixWorld
uniform mat4 modelViewMatrix;

// = camera.projectionMatrix
uniform mat4 projectionMatrix;

// = camera.matrixWorldInverse
uniform mat4 viewMatrix;

// = inverse transpose of modelViewMatrix
uniform mat3 normalMatrix;

// = camera position in world space
uniform vec3 cameraPosition;


uniform vec3 specular_color;
uniform float specular_reflectance;

uniform float roughness;

uniform float ambient_reflectance;
uniform vec3 ambient_color;

uniform vec3 diffuse_color;
uniform float diffuse_reflectance;

uniform vec3 light_color;

uniform float intensity;

in vec3 lightDirection;
in vec3 normalizedInWorld;
in vec3 viewDirection;

out vec4 fragColor;

#define PI 3.1415926538


float ggx(vec3 h, vec3 n) {
    float ggx = 0.0;
    float dot = dot(n,h);
    if(dot > 0.0) {
        ggx = pow(roughness,2.0) / (PI * pow((dot*dot * (roughness*roughness + ((1.0-dot*dot)/(dot*dot)))),2.0));
    }

    return ggx;
}

float g1(vec3 x, vec3 n) {
    float dot = dot(x,n);
    float g1 = 0.0;

    if(dot > 0.0) {
        g1 = 2.0 / ( 1.0 + sqrt( 1.0 + pow(roughness, 2.0) * ((1.0 - (pow(dot,2.0))) / pow(dot,2.0) ) ) );
    }
    return g1;
}

float smith(vec3 v, vec3 l, vec3 n) {
    float g1v = g1(v,n); //occlusion
    float g1l = g1(l,n); //shadowing

    return (g1v*g1l);
}



vec3 schlick(vec3 h, vec3 v) {
    vec3 f0 = specular_color;
    vec3 F = f0 + (vec3(1.0,1.0,1.0)-f0) * pow((1.0-dot(v,h)),5.0);
    return F;
}

vec3 compute_fs(float D, float G, vec3 F, vec3 n, vec3 l, vec3 v) {
    vec3 fs = D*G*F / (4.0 * abs(dot(n,l)) * abs(dot(n,v)));
    return fs;
}

// main function gets executed for every pixel
void main()
{
  vec3 n = normalize(normalizedInWorld);
  vec3 l = normalize(lightDirection);
  vec3 v = normalize(viewDirection);
  vec3 h = normalize(v + l);

  float D = ggx(h,n);
  float G = smith(v,l,n);
  vec3 F = schlick(h,v);
  vec3 fs = compute_fs(D,G,F,n,l,v);
  vec3 diff = diffuse_reflectance * diffuse_color;
  vec3 rightPart = max(dot(n,l),0.0) * intensity * light_color;
  vec3 color =  (diff/PI +specular_reflectance * fs)  * rightPart;

  fragColor = vec4(color, 1.0);
}
