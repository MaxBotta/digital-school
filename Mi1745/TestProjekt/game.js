
let sprite;

function setup() {
  const canvas = new Canvas(600, 400);
  canvas.parent("game");

  world.gravity.y = 10;

  const ground = new Sprite();
  ground.x = 300;
  ground.y = 390;
  ground.width = 600;
  ground.height = 20;
  ground.color = "green";
  ground.collider = "static";

  sprite = new Sprite();
  sprite.x = 300;
  sprite.y = 200;
  sprite.width = 40;
  sprite.height = 40;
  sprite.color = "yellow";

}

function draw() {
  background(0, 150, 250);

	if (kb.pressing('left')) {
		sprite.velocity.x = -5;
	} else if (kb.pressing('right')) {
		sprite.velocity.x = 5;
	} else {
	  sprite.velocity.x = 0;
	}

}
