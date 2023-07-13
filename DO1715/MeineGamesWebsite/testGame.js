
let ball;
let isJumping = false;
let grounds;

function setup() {
    let canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 20;

    ball = new Sprite(500, 300, 40, 40, "dynamic");
    ball.diameter = 40;
    ball.color = "yellow";
    ball.strokeWeight = 3;
    ball.bounciness = 0.4;
    // ball.vel.x = -10;


    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 5; y++) {
            let box = new Sprite(100 + x * 40, 340 - y * 40, 30, 30);
            box.color = "red";
            box.addAni("flappy", "./assets/images/flappy-sheet.png", {frameSize: [32, 24], frameCount: 2})
        }
    }

    grounds = new Group();
    grounds.color = "green";

    let ground = new grounds.Sprite(300, 380, 600, 40, "static");
    let ground2 = new grounds.Sprite(500, 200, 200, 40, "static");


}

function draw() {
    clear();
    background(0, 100, 250);

    // if(mouse.presses()) {
    //     ball.moveTowards(mouse, 0.1);
    // }

    if(kb.pressing("left")) {
        ball.vel.x = -10;
    } else if(kb.pressing("right")) {
        ball.vel.x = 10;
    } else {
        ball.vel.x = 0;
    }

    if(isJumping === false && kb.presses("up")) {
        isJumping = true;
        ball.vel.y = -10;
    }

    if(ball.collides(grounds)) {
        isJumping = false;
    }

}