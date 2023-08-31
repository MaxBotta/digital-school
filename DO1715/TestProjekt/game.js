
let player;
let ground;

function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 10;

  ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "rgb(250, 200, 0)";
  ground.collider = "static";

  player = new Sprite();
  player.x = 200;
  player.y = 200;
  player.offset.y = 80;
  player.width = 40;
  player.height = 50;
  player.color = "yellow";
  player.scale = 2;
  player.debug = true;
  // player.addAni('idle', 'assets/PirateBomb/Sprites/1-Player-Bomb Guy/2-Run/1.png', 14);
  player.addAni('idle', 'assets/wind-hashashin/PNG/idle/idle_1.png', 8);
  player.addAni('run', 'assets/wind-hashashin/PNG/run/run_1.png', 8);
  player.addAni('atk-1', 'assets/wind-hashashin/PNG/1_atk/1_atk_1.png', 8);
  player.addAni('atk-2', 'assets/wind-hashashin/PNG/2_atk/2_atk_1.png', 18);

  player.ani = "idle";



}

function draw() {
  background(0, 150, 250);

  //Spieler nach links und rechts bewegen
  if (kb.pressing('left')) {
    player.mirror.x = true;
    player.vel.x = -8;
    player.changeAni("run");
  } else if (kb.pressing('right')) {
    player.mirror.x = false;
    player.vel.x = 8;
    player.changeAni("run");
  } else {
    player.vel.x = 0;

    //Spieler attacke
    if (kb.pressing("f")) {
      player.changeAni("atk-1");
    } else if (kb.pressing("g")) {
      player.changeAni("atk-2");
    } else {
      player.changeAni("idle");
    }

  }


}

