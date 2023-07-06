let sprite1;
let sprites = [];

function setup() {
	let canvas = new Canvas(600, 400);
    canvas.parent("game");

	sprite1 = new Sprite(0, 200);
	sprite1.width = 50;
	sprite1.height = 50;
    sprite1.rotation = 45;
    sprite1.vel.x = 8;

    for(let i = 0; i < 200; i++) {
        let sprite = new Sprite(random(0, width), random(0, height));
        sprite.width = 20;
        sprite.height = 20;
        sprite.vel.x = random(-5, 5);
        sprite.vel.y = random(-5, 5);
        sprites.push(sprite);
    }

}

function draw() {
    background(0, 100, 250);

    sprite1.x = mouse.x;
    sprite1.y = mouse.y;
}