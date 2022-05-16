/**
 * Create init, call set up functions, and export
 */

// Imports
import createCamera from './camera';
import createScene from './scene';
import createRenderer from './renderer';
import gameLoop from './gameLoop';
import resizeElements from './windowResize';
import createOrbitControls from './orbControls';
import { DirectionalLight } from 'three';
import createDirectionalLight from './directionalLight';
import createGridHelper from './gridHelper';
import vectorShapes from './vectorShapes';

// Init - Three.js set up
function init() {

  /********************  SET UP  **********************/
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const domEL = document.querySelector('.webgl');

  // Scene
  const scene = createScene();

  // Call createCamera and add it to the scene;
  const camera = createCamera(sizes);
  scene.add(camera);

  // Call createRenderer and store its value to pass into gameLoop - renderer.render to call
  const renderer = createRenderer(domEL, sizes);
  
  // Orbit Controls
  const obControls = createOrbitControls(camera, domEL);
  
  // Call gameLoop
  gameLoop(renderer, scene, camera, obControls);
  
  // Window Resize
  resizeElements(sizes, camera, renderer);

  // Gride Helper
  const gHelper = createGridHelper();
  scene.add(gHelper)

  /******************** Additional **********************/

  // Directional Light
  const directionalLight = createDirectionalLight('#ffffff', 3);
  scene.add(directionalLight);

  // Custom vector shapes
  const vShapes = vectorShapes();
  


  return {
    scene,
  };
}

// Export
export default init;
