precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

varying vec3 vPosition;
varying vec2 vUv;

const int normalIterations = 10;
const int distIterations = 256;
const int rayMarches = 80;



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


void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= u_resolution.x / u_resolution.y;

    
    float time = u_time * 0.4;
    float r = 3.; // Distance to fractal object
    
    vec3 ro = vec3(
        r * cos(time),          // Rotate on X
        3.,
        r * sin(time)           // Rotate on Z
    );
    // This ensures the camera always points at the center (0,0,0)
    vec3 ta = vec3(0.0, 0.0, 0.0); // Target
    
    vec3 fwd = normalize(ta - ro);             // Forward vector
    vec3 right = normalize(cross(fwd, vec3(0.0, 1.0, 0.0))); // Right vector
    vec3 up = cross(right, fwd);               // Up vector

    // ray direction
    vec3 rd = normalize(uv.x * right + uv.y * up + 2.0 * fwd);

    vec3 col = vec3(0.0);
    float t = 0.0;
    vec3 p;
    vec4 c_julia = 0.45*cos(time*vec4(0.2,1.7,1.1,2.5) ) - vec4(0.0,-0.7,0.0,0.0);

    for (int i = 0; i < rayMarches; i++) {
        p = ro + rd * t;
        float d = map(p, c_julia);
        if (d < 0.001) {
            col = vec3(0.74,0.76,0.79);
            col *= 1.0 - float(i) / float(rayMarches);
            break;
        }
        t += d;
        if (t > 100.0) break;
    }

    gl_FragColor = vec4(col, 1.0);
}