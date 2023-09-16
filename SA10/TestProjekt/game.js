
let player;
let ground;
let platform1, box;


function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 10;

  ground = new Sprite();
  ground.x = 500;
  ground.y = 580;
  ground.width = 1000;
  ground.height = 40;
  ground.color = "green";
  ground.collider = "static";

  platform1 = new Sprite();
  platform1.x = 600;
  platform1.y = 400;
  platform1.width = 200;
  platform1.height = 40;
  platform1.color = "green";
  platform1.collider = "kinematic";

  box = new Sprite();
  box.x = 600;
  box.y = 500;
  box.width = 40;
  box.height = 40;
  box.color = "yellow";

  player = new Sprite();
  player.x = 200;
  player.y = 200;
  player.width = 22;
  player.height = 32;
  player.color = "yellow";
  player.scale = 2;
  player.debug = true;
  player.collider = "dynamic";
  player.isJumping = false;

  player.addAni("run", "assets/tiny-hero-sprites/1 Pink_Monster/Pink_Monster_Run_6.png", { frameSize: [32, 32], frames: 6 })
  player.addAni("idle", "assets/tiny-hero-sprites/1 Pink_Monster/Pink_Monster_Idle_4.png", { frameSize: [32, 32], frames: 4 })
  player.addAni("jump", "assets/tiny-hero-sprites/1 Pink_Monster/Pink_Monster_Jump_8.png", { frameSize: [32, 32], frames: 8 })

  player.changeAni("idle");
  player.ani.frameDelay = 8;

}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;

  //Wenn Spieler hoch Taste drückt, dann springt Spieler
  if (kb.presses('up')) {
    player.isJumping = true;
    player.vel.y = 40;
    player.changeAni(["jump", "idle"]);
  }

  if(player.vel.y === 0) {
    player.isJumping = false;
  }

  //Wenn Spieler nicht springt, dann können wir laufen
  if (player.isJumping === false) {

    if (kb.pressing('left')) {
      player.changeAni('run');
      player.vel.x = -6;
      player.mirror.x = true;
    } else if (kb.pressing('right')) {
      player.changeAni('run');
      player.vel.x = 6;
      player.mirror.x = false;
    } else {
      player.changeAni('idle');
      player.vel.x = 0;
    }

  }


}
