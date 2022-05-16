/**
 * Objective: Model set up - load, geometry and material settings
 *
 */

// Imports
import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';
import loadEnvMap from './loadEnviromentMap';

// Model set up
function modelSetup(modelURL, scene, envMap) {

  // Instaniate GLTF Loader
  const gltfLoader = new GLTFLoader();

  gltfLoader.load(modelURL, (gltf) => {
    const children = [...gltf.scene.children];

    for (const child of children) {
      modelGeometrySettings(child);
      modelMaterialSettings(child, envMap);
      modelShadowSettings(child);
      scene.add(child);
    }
  });
}

// Model Settings
function modelGeometrySettings(child) {
  child.scale.set(10, 10, 10);
  child.position.set(0, -3.75, 0);
  child.rotation.y = Math.PI * 0.5;
}

// Model Material Settings
function modelMaterialSettings(child, envMap) {
  child.material.envMap = loadEnvMap(envMap);
  child.material.envMapIntensity = 5;
}

// Model shadow settings
function modelShadowSettings(child){

  // Cast and recieve shadows on each child
  child.castShadow = true;
  child.receiveShadow = true;
}

export default modelSetup;
