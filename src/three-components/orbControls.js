/**
 * Create orbit controls and export function
 *
 */

// Imports
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols';

// Create orbit controls
function createOrbitControls(camera, domEL) {
  // Instaniate orbit controls
  const obControls = new OrbitControls(camera, domEL);

  // Smooth it out
  obControls.enableDamping = true;

  return obControls;
}

export default createOrbitControls;
