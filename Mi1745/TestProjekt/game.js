
let player, player2, player3;
let platforms = [];

function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 15;

  //Erstelle alle 10 Plattformen
  // for(let i = 0; i < 10; i++) {
  //   const newP = new Platform(i * 100, 300, 100);
  //   platforms.push(newP);
  // }

  const ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "green";
  ground.collider = "static";

  player = new Player("Max", "Pink", 500, 150);
  player2 = new Player("Peter", "Dude", 300, 500);
  player3 = new Player("Hans", "Owlet", 400, 500);
  // player2.changeAni("walk");

  // for(let i = 0; i < 100; i++) {
  //   const newP = new Player("Max", "Dude", i * 10, i * 10);
  // }

}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;
  player.showName();
  player2.showName();

  // player2.velocity.x = 4;


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