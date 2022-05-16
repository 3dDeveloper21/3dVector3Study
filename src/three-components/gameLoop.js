/**
 *
 * Create game loop, call renderer.render, and export
 *
 */

// Game loop
function gameLoop(renderer, scene, camera, obControls) {
  function gameLoopSetup() {
    // Update orbit controls
    obControls.update();

    // Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(gameLoopSetup);
  }

  // Initialize gameLoopSetup
  gameLoopSetup();
}

export default gameLoop;
