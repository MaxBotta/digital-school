
let sprite1;
let sprite2;

let floor;
let canvas;


function preload() {

}

function setup() {
    canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 10;

    // sprite1 = new Sprite(0, 200, 50, 50);
    // sprite1.color = "yellow";
    // sprite1.vel.x = 6;

    // sprite2 = new Sprite(600, 200, 50, 50);
    // sprite2.color = "yellow";
    // sprite2.vel.x = -6;
    // sprite2.rotation = 30;

    floor = new Sprite(300, 400, 600, 20, "static");
    floor.color = "green";

    for (let e = 6; e > 0; e--) {
        for (let i = 0; i < e; i++) {
            let newSprite = new Sprite(100, 360 - 68/e, 20, 20);
            newSprite.color = "yellow";
            // newSprite.diameter = 20;
            // newSprite.vel.x = random(-6, 6);
            // newSprite.vel.y = random(1, 6);
            // newSprite.img = "./assets/flappy2-32x24.png";
            // newSprite.ani.frameDelay = 3;
        }
    }


}

function draw() {
    clear();
    background(0, 150, 255);

}