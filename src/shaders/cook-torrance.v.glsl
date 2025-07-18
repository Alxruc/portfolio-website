// These uniforms and attributes are provided by threejs.
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms
// defines the precision
precision highp float;

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

uniform vec3 lightPosition;

// default vertex attributes provided by Geometry and BufferGeometry
in vec3 position;
in vec3 normal;
in vec2 uv;

out vec3 lightDirection;
out vec3 normalizedInWorld;
out vec3 viewDirection;

// main function gets executed for every vertex
void main()
{
  normalizedInWorld = normalize(mat3(inverse(transpose(modelMatrix))) * normal); 
  vec4 vertexPosition = modelMatrix * vec4(position,1.0);
  lightDirection = normalize(lightPosition - vec3(vertexPosition.xyz/vertexPosition.w));


  viewDirection = normalize(cameraPosition-(vertexPosition.xyz/vertexPosition.w));

  // Pcam * Wcam^-1 * Wmodel * p
  gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}