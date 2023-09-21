
let player, player2, player3;
let ground;
let platform1, platform2, platform3;


function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 20;

  ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "rgb(0, 100, 250)";
  ground.collider = "static";
  ground.friction = 0.1;

  // platform1 = new Platform(500,400, 200, 40, "ice");
  // platform2 = new Platform(300, 200, 500, 40, "default");

  player = new Player("Max", "Dude", 300, 400);
  player2 = new Player("Max", "Dude", 400, 400);
  player2 = new Player("Max", "Dude", 500, 400);


}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;

  // platform1.moveLeftAndRight();
  // platform2.moveLeftAndRight();

  //Spieler attacke
  if(kb.presses("up")) {
    player.changeAni(["jump", "idle"])
		// player.applyForce(0, -500);
    player.velocity.y = -10;
    //player.ani.stop();
    //player.ani.frame = 5;
    player.ani.frameDelay = 9;
  }
  else if (kb.presses("f")) {
    player.changeAni(["atk-1", "idle"]);
  } 
  else if (kb.presses("g")) {
    player.changeAni(["atk-2", "idle"]);
  }

  //Wenn Spieler eine Attacke ausführt, dann kann keine Rennanimation abgespielt werden
  if(player.ani.name !== "atk-1" && player.ani.name !== "atk-2") {

    //Spieler nach links und rechts bewegen
    if(kb.pressing("shift") && kb.pressing("left")) {
      player.mirror.x = true;
      player.vel.x = -10;

      if(player.ani.name !== "jump") {
        player.changeAni("run");
      }

    }
    else if(kb.pressing("shift") && kb.pressing("right")) {
      player.mirror.x = false;
      player.vel.x = 10;
      
      if(player.ani.name !== "jump") {
        player.changeAni("run");
      }

    }
    else if (kb.pressing('left')) {
      player.mirror.x = true;
      player.vel.x = -5;

      if(player.ani.name !== "jump") {
        player.changeAni("walk");
      }

    } 
    else if (kb.pressing('right')) {
      player.mirror.x = false;
      player.vel.x = 5;

      if(player.ani.name !== "jump") {
        player.changeAni("walk");
      }

    } 
    else {
      // player.vel.x = 0;

      if(player.ani.name !== "jump") {
        player.changeAni("idle");
      }

    }

  }



}

