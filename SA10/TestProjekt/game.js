
let player, player2, player3;
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

  // platform1 = new Platform(600, 400, 200, 40, "ice");

  box = new Sprite();
  box.x = 600;
  box.y = 500;
  box.width = 40;
  box.height = 40;
  box.color = "yellow";

  player = new Player("Max", "Dude", 300, 500);
  player2 = new Player("Max", "Pink", 200, 500);
  player3 = new Player("Max", "Owlet", 500, 500);


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
