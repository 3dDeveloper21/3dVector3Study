/**
 * Create Camera and export
 */

// Imports
import { PerspectiveCamera } from 'three';

// console.log(PerspectiveCamera)

// Create camera
function createCamera(sizes) {
  const camera = new PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );

  // Set camera's position
  camera.position.set(0, 0, 4);

  return camera;
}

export default createCamera;
