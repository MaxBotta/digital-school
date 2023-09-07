
let player;

function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 10;

  const ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "green";
  ground.collider = "static";

  player = new Sprite();
  player.x = 300;
  player.y = 200;
  player.width = 22;
  player.height = 32;
  player.color = "yellow";
  player.addAni("idle", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Idle_4.png", { frameSize: [32, 32], frameCount: 4 });
  player.addAni("walk", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Walk_6.png", { frameSize: [32, 32], frameCount: 6 });
  player.addAni("run", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Run_6.png", { frameSize: [32, 32], frameCount: 6 });
  player.addAni("atk-1", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack1_4.png", { frameSize: [32, 32], frameCount: 4 });
  player.addAni("atk-2", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack2_6.png", { frameSize: [32, 32], frameCount: 6 });

  player.scale = 4;
  player.debug = true;
  player.changeAni("idle");
  player.ani.frameDelay = 6;

}

function draw() {
  background(0, 150, 250);


  //Spieler greift an
  if (kb.presses('f')) {
    player.changeAni(["atk-1", "idle"]);
  } else if (kb.presses('g')) {
    player.changeAni(["atk-2", "idle"]);
  }

  if (player.ani.name !== "atk-2" && player.ani.name !== "atk-1") {

    if (kb.pressing('shift') && kb.pressing('left')) {
      player.velocity.x = -10;
      player.changeAni("run");
      player.mirror.x = true;
    } else if (kb.pressing('left')) {
      player.velocity.x = -5;
      player.changeAni("walk");
      player.mirror.x = true;
    } else if (kb.pressing('shift') && kb.pressing('right')) {
      player.velocity.x = 10;
      player.changeAni("run");
      player.mirror.x = false;
    } else if (kb.pressing('right')) {
      player.velocity.x = 5;
      player.changeAni("walk");
      player.mirror.x = false;
    } else {
      player.changeAni("idle");
      player.velocity.x = 0;
    }
    
  }


}

