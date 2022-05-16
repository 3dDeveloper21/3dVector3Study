/**
 *
 * Create directional light and position it and export function
 */

// Imports
import { DirectionalLight } from 'three';


// Create directional light
function createDirectionalLight(color, intensity) {

  // Instaniate directional light
  const directionalLight = new DirectionalLight(color, intensity);
  directionalLight.position.set(0.25, 3, -2.25);

  // Shadows
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.far = 10;
  directionalLight.shadow.mapSize.set(1024, 1024);

  return directionalLight;
}

export default createDirectionalLight;
