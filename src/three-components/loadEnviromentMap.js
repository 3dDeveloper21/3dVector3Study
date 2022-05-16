/**
 *
 * Load environment maps
 */

// Get env map
// function getEnvironmentMap(){
//   if(!environmentMap){
//     environmentMap = envMapInit();
//   }
//   return environmentMap;
// }

import { CubeTextureLoader, sRGBEncoding } from 'three';

function loadEnvMap(envMap) {
  const cubeTextureLoader = new CubeTextureLoader();
  const enviromentMap = cubeTextureLoader.load(envMap);

  enviromentMap.encoding = sRGBEncoding;

  return enviromentMap;
}

export default loadEnvMap;
