precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_bgTex;
uniform sampler2D u_reflectTex;
uniform bool u_showFractal;

varying vec3 vPosition;
varying vec2 vUv;

const int normalIterations = 10;
const int distIterations = 256;
const int rayMarches = 50;
 
const float shininess = 200.0;

#define PI 3.14159265358979

// multiply 2 quaternions
vec4 qMult(vec4 q1, vec4 q2) {
    return vec4(
        q1.x * q2.x - q1.y * q2.y - q1.z * q2.z - q1.w * q2.w,
        q1.x * q2.y + q1.y * q2.x + q1.z * q2.w - q1.w * q2.z,
        q1.x * q2.z - q1.y * q2.w + q1.z * q2.x + q1.w * q2.y,
        q1.x * q2.w + q1.y * q2.z - q1.z * q2.y + q1.w * q2.x
    );
}

// conjugate
vec4 qConj(vec4 q)
{
    return vec4( q.x, -q.yzw );
}

float calcDistance(vec4 q, vec4 c) {
    vec4 z = q;
    float ld2 = 1.0;
    float lz2 = dot(q,q);

    for(int i=0; i < distIterations; i++)
	{
        ld2 *= 4.0*lz2;
        z =  qMult(z,z) + c;
        lz2 = dot(z,z);
		if( lz2>200.0 ) break;
	}
    
    // 0.25 factor prevents overshooting the detailed fractal surface
    return 0.25 * sqrt(lz2/ld2)*log(lz2);
}

// calcNormal function by Inigo Quilez
vec3 calcNormal(vec3 p, vec4 c)
{
    vec4 z = vec4(p,0.0);

    // identity derivative
    vec4 J0 = vec4(1,0,0,0);
    vec4 J1 = vec4(0,1,0,0);
    vec4 J2 = vec4(0,0,1,0);
    
  	for(int i=0; i<normalIterations; i++)
    {
        vec4 cz = qConj(z);
        
        // chain rule of jacobians (removed the 2 factor)
        J0 = vec4( dot(J0,cz), dot(J0.xy,z.yx), dot(J0.xz,z.zx), dot(J0.xw,z.wx) );
        J1 = vec4( dot(J1,cz), dot(J1.xy,z.yx), dot(J1.xz,z.zx), dot(J1.xw,z.wx) );
        J2 = vec4( dot(J2,cz), dot(J2.xy,z.yx), dot(J2.xz,z.zx), dot(J2.xw,z.wx) );

        // z -> z2 + c
        z = qMult(z, z) + c; 
        
        if(dot(z,z)>4.0) break;
    }
    
	vec3 v = vec3( dot(J0,z), 
                   dot(J1,z), 
                   dot(J2,z) );

    return normalize( v );
}

float map(vec3 p, vec4 c_julia) {
    // We take the 3D position p and place it into 4D space.
    // We set w = 0.0 to take a 3D "slice" of the 4D object.
    return calcDistance(vec4(p, 0.0), c_julia);
}

float calculate_spec(vec3 p, vec3 normal, vec3 lightPos) {
    vec3 lightDir = normalize(lightPos - p);
    vec3 viewDir = normalize(-p);
    vec3 halfDir = normalize(lightDir + viewDir);
    float specAngle = max(dot(halfDir, normal), 0.0);
    float specular = pow(specAngle, shininess);

    return specular;
}

vec2 getEnvUV(vec3 dir) {
    vec2 uvOut;
    uvOut.x = (PI + atan(dir.z, dir.x)) / (2.0 * PI);
    uvOut.y = 1.0 - (atan(sqrt(dir.x * dir.x + dir.z * dir.z), dir.y)) / PI;
    return uvOut;
}

mat3 rotateY(float theta) {
    float c = cos(theta);
    float s = sin(theta);
    return mat3(
        vec3(c, 0, s),
        vec3(0, 1, 0),
        vec3(-s, 0, c)
    );
}

mat3 rotateX(float theta) {
    float c = cos(theta);
    float s = sin(theta);
    return mat3(
        vec3(1, 0, 0),
        vec3(0, c, -s),
        vec3(0, s, c)
    );
}

void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    
    vec2 bg_uv = uv; // Save untouched UVs for the background

    // If aspect is < 0.8 (Portrait/Mobile), isLandscape is 0.0.
    // If aspect is > 1.2 (Landscape/Desktop), isLandscape is 1.0.
    float isLandscape = smoothstep(0.8, 1.2, aspect); 

    // Position: 
    // mix() blends between centered (0.0) and left-aligned (aspect * 0.5).
    float xOffset = mix(0.0, aspect * 0.5, isLandscape);
    uv.x += xOffset;
    
    // smaller fractal on mobile
    float fractalSize = mix(0.65, 1.3, isLandscape);
    uv /= fractalSize;

    
    // camera
    float time = u_time * 0.4;
    float rotationTime = u_time * 0.06;
    float r = 4.5; 
    
    vec3 initial_ro = vec3(r, 0., 0.);
    vec3 ro = rotateX(mod(rotationTime * 0.5, 2.0 * PI)) * rotateY(mod(rotationTime, 2.0 * PI)) * initial_ro;
    vec3 ta = vec3(0.0, 0.0, 0.0); 
    
    vec3 fwd = normalize(ta - ro);             
    vec3 right = normalize(cross(fwd, vec3(0.001, 1.0, 0.001))); 
    vec3 up = cross(right, fwd);               


    vec3 rd = normalize(uv.x * right + uv.y * up + 2.0 * fwd);
    vec3 rd_bg = normalize(bg_uv.x * right + bg_uv.y * up + 2.0 * fwd);

    vec2 uvOut = getEnvUV(rd_bg);
    vec3 col = texture(u_bgTex, uvOut).rgb;

    if(!u_showFractal) {
        gl_FragColor = vec4(col, 1.0);
        return;
    }

    float t = 0.0;
    vec3 p;
    vec4 initial = vec4(sin(time), 0.0, 0.0, 0.0) + (cos(time) + vec4(0.0, 1.0, 1.0, 1.0));
    vec4 c_julia = normalize(initial);

    for (int i = 0; i < rayMarches; i++) {
        p = ro + rd * t;
        float d = map(p, c_julia);
        
        if (d < 0.01) {
            vec3 normal = calcNormal(p, c_julia);
            vec3 ref = reflect(rd, normal);
            vec3 reflectionColor = texture(u_reflectTex, getEnvUV(ref)).rgb;
            col = reflectionColor; 
            
            float fresnel = pow(1.0 + dot(rd, normal), 3.0);
            col = mix(col, vec3(1.0), fresnel * 0.5);
            break;
        }
        
        t += d * 0.75; 
        if (t > 100.0) break;
    }

    gl_FragColor = vec4(col, 1.0);
}