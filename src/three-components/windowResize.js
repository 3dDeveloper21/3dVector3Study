/**
 * Resize canvas, camera, renderer, and device when the user window resizes
 * Export function
 */

function resizeElementsSetup(sizes, camera, renderer) {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Camera aspect ratio and updateProjectionMatrix
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Renderer size and window device
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function resizeElements(sizes, camera, renderer) {
  window.onresize = () => {
    resizeElementsSetup(sizes, camera, renderer);
  };
}

export default resizeElements;
