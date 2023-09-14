
let player;
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
  ground.color = "rgb(250, 200, 0)";
  ground.collider = "static";

  platform1 = new Sprite();
  platform1.x = 800;
  platform1.y = 400;
  platform1.width = 200;
  platform1.height = 20;
  platform1.color = "rgb(250, 200, 0)";
  platform1.collider = "static";

  platform2 = new Sprite();
  platform2.x = 200;
  platform2.y = 200;
  platform2.width = 100;
  platform2.height = 20;
  platform2.color = "rgb(250, 200, 0)";
  platform2.collider = "static";

  platform3 = new Sprite();
  platform3.x = 400;
  platform3.y = 500;
  platform3.width = 300;
  platform3.height = 20;
  platform3.color = "rgb(250, 200, 0)";
  platform3.collider = "static";

  player = new Sprite();
  player.x = 200;
  player.y = 200;
  // player.offset.y = 80;
  player.width = 22;
  player.height = 32;
  player.color = "yellow";
  player.scale = 2;
  player.debug = true;
  // player.addAni('idle', 'assets/PirateBomb/Sprites/1-Player-Bomb Guy/2-Run/1.png', 14);
  // player.addAni('idle', 'assets/wind-hashashin/PNG/idle/idle_1.png', 8);
  // player.addAni('run', 'assets/wind-hashashin/PNG/run/run_1.png', 8);
  // player.addAni('atk-1', 'assets/wind-hashashin/PNG/1_atk/1_atk_1.png', 8);
  // player.addAni('atk-2', 'assets/wind-hashashin/PNG/2_atk/2_atk_1.png', 18);

  player.addAni('idle', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Idle_4.png', { frameSize: [32, 32], frames: 4} );
  player.addAni('walk', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Walk_6.png', { frameSize: [32, 32], frames: 6})
  player.addAni('run', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Run_6.png', { frameSize: [32, 32], frames: 6})
  player.addAni('atk-1', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack1_4.png', { frameSize: [32, 32], frames: 4})
  player.addAni('atk-2', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack2_6.png', { frameSize: [32, 32], frames: 6})
  player.addAni('jump', 'assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Jump_8.png', { frameSize: [32, 32], frames: 8})
  player.ani = "idle";
  player.ani.frameDelay = 8;


}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;

  //Spieler attacke
  if(kb.presses("up")) {
    player.changeAni(["jump", "idle"])
    player.vel.y = -10;
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
      player.vel.x = 0;

      if(player.ani.name !== "jump") {
        player.changeAni("idle");
      }

    }

  }



}

