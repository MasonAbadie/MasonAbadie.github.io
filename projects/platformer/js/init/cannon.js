(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * GOAL: Add at least 3 cannons to make your level challenging.
   *
   * Use the createCannon Function to create cannons for the level.
   *
   * createCannon() takes these arguments:
   *
   *      createCannon(type, position, delay);
   *
   *      type: "top", "bottom", "left", or "right"
   *      position: The position of the cannon along whichever side the cannon is placed on
   *          - the x coordinate for "top" and "bottom" cannons
   *          - the y coordinate for "left" and "right" cannons
   *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
   */
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
createCannon("top", 550);
createCannon("top", 450);
createCannon("top", 350);
createCannon("top", 650);
createCannon("top", 750);
createCannon("top", 825);
createCannon("left", 50, 1000);
createCannon("left", 150, 1000);
createCannon("left", 250, 1000);
createCannon("left", 350, 1000);
createCannon("bottom", 500);
createCannon("bottom", 400);
createCannon("bottom", 600);
createCannon("bottom", 700);
createCannon("bottom", 800);
createCannon("bottom", 300);
createCannon("bottom", 100);
createCannon("right", 275, 1000);
createCannon("right", 175, 1000);
createCannon("right", 75, 1000);
    // example:
    createCannon("top", 275);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  cannon.init = init;
})(window);
