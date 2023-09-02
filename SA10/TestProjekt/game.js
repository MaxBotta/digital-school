
let player;


function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  player = new Sprite();
  player.x = 200;
  player.y = 200;
  player.width = 40;
  player.height = 60;
  player.color = "yellow";
  player.scale = 2;

  player.addAni("run", "assets/tiny-hero-sprites/1 Pink_Monster/Pink_Monster_Run_6.png", { frameSize: [32, 32], frames: 6 })
  player.addAni("idle", "assets/tiny-hero-sprites/1 Pink_Monster/Pink_Monster_Idle_4.png", { frameSize: [32, 32], frames: 4 })

  player.ani.frameDelay = 8;

}

function draw() {
  background(0, 150, 250);


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
