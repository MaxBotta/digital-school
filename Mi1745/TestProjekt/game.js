
let player;
let platforms = [];

function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 15;

  //Erstelle alle 10 Plattformen
  for(let i = 0; i < 10; i++) {
    const newP = new Platform(i * 100, 300, 100);
    platforms.push(newP);
  }

  const ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "green";
  ground.collider = "static";

  player = new Sprite();
  player.x = 500;
  player.y = 150;
  player.width = 22;
  player.height = 32;
  player.color = "yellow";
  player.addAni("idle", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Idle_4.png", { frameSize: [32, 32], frameCount: 4 });
  player.addAni("walk", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Walk_6.png", { frameSize: [32, 32], frameCount: 6 });
  player.addAni("run", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Run_6.png", { frameSize: [32, 32], frameCount: 6 });
  player.addAni("atk-1", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack1_4.png", { frameSize: [32, 32], frameCount: 4 });
  player.addAni("atk-2", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack2_6.png", { frameSize: [32, 32], frameCount: 6 });
  player.addAni("jump", "assets/images/tiny-hero-sprites/Pink_Monster/Pink_Monster_Jump_8.png", { frameSize: [32, 32], frameCount: 8 });

  player.scale = 2;
  player.debug = true;
  player.changeAni("idle");
  player.ani.frameDelay = 6;

  player.isRunning = false;
  player.isJumping = false;

  player.jump = function(velocity) {
    player.velocity.y = velocity;
    player.ani.frameDelay = velocity / 2;
  }

}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;

  //Spieler greift an
  if (kb.presses('f')) {
    player.changeAni(["atk-1", "idle"]);
  } else if (kb.presses('g')) {
    player.changeAni(["atk-2", "idle"]);
  }

  //Wenn der Spieler springt, dann setze isJumping auf wahr
  if(player.isJumping === false && kb.presses("up")) {
    player.isJumping = true;
    player.changeAni("jump");

    if(player.isRunning) {
      player.jump(60);
    } else {
      player.jump(40);
    }
    // player.ani.stop();
    // player.ani.frame = 4;
  }
  //Wenn Spieler nicht mehr in der Luft, setze isJumping auf falsch und die Animation auf stehen
  if(player.isJumping && player.velocity.y === 0) {
    player.isJumping = false;
    player.changeAni("idle");
  }

  if (player.ani.name !== "atk-2" && player.ani.name !== "atk-1" && player.ani.name !== "jump") {

    if (kb.pressing('shift') && kb.pressing('left')) {
      player.isRunning = true;
      player.velocity.x = -10;
      player.changeAni("run");
      player.mirror.x = true;
    } else if (kb.pressing('left')) {
      player.velocity.x = -5;
      player.changeAni("walk");
      player.mirror.x = true;
    } else if (kb.pressing('shift') && kb.pressing('right')) {
      player.isRunning = true;
      player.velocity.x = 10;
      player.changeAni("run");
      player.mirror.x = false;
    } else if (kb.pressing('right')) {
      player.velocity.x = 5;
      player.changeAni("walk");
      player.mirror.x = false;
    } else {
      player.isRunning = false;
      player.changeAni("idle");
      player.velocity.x = 0;
    }
    
  }


}