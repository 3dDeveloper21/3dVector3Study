/**
 * Create scene and export
 */

// Imports
import { Color, Scene } from 'three';

// Create Scene
function createScene(envMap) {
  // Instaniate scene object
  const scene = new Scene();
  scene.background = new Color(0x000000);
  return scene;
}

// Export
export default createScene;
