/**
 *  Create renderer and export
 */

// Imports
import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping, PCFShadowMap} from 'three';

// Create Renderer
function createRenderer(domEL, sizes) {
  // Instaniate renderer
  const renderer = new WebGLRenderer({
    canvas: domEL,
    antialias: true,
  });

  // Set size
  renderer.setSize(sizes.width, sizes.height);

  // Set pixel ratio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Physically correct lighting
  renderer.physicallyCorrectLights = true;

  // Output encoding
  renderer.outputEncoding = sRGBEncoding;

  // Tone mapping
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2;

  // Shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;

  return renderer;
}

export default createRenderer;
