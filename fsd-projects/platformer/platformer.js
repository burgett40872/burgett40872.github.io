$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,700,100,10,"lime")
createPlatform(300,600,100,10,"lime")
createPlatform(400,500,150,10,"lime")
createPlatform(300,400,100,10,"lime")
createPlatform(600,400,100,10,"lime")
createBadPlatform(0,730,1400,10)
createPlatform(700,200,10,200,"lime")
createPlatform(500,300,100,10,"lime")
createPlatform(700,200,200,10,"lime")
createPlatform(700,400,200,10,"lime")
createBadPlatform(730,350,50,10)
createFakePlatform(1100,500,100,10,"lime")
createPlatform(1200,700,100,10,"lime")
createPlatform(1100,300,10,200,"lime")
createPlatform(1300,600,10,100,"lime")

    // TODO 3 - Create Collectables
createCollectable("steve",650,350)
createCollectable("database",730,250)
createCollectable("grace",1250,650)


    
    // TODO 4 - Create Cannons
createCannon("top",350,700)
createCannon("top",600,700)
createCannon("right",400,700)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
