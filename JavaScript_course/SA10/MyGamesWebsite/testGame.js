
let player;

let floor;
let canvas;


function preload() {

}

function setup() {
    canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 10;

    player = new Sprite(500, 300, 50, 50, "kinematic");
    player.addAni("run", "./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Run_6.png", {frameSize: [32, 32], frameCount: 6});
    player.addAni("standing", "./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster.png", {frameSize: [32, 32], frameCount: 1});
    player.ani.frameDelay = 3;

    floor = new Sprite(300, 380, 600, 40, "static");
    floor.color = "green";

    
    for(let y = 0; y < 5; y++) {
        let newSprite = new Sprite(100, 348 - y * 24 , 32, 24);
        newSprite.addAni("flappy", "./assets/flappy-sheet.png", {frameSize: [32, 24], frameCount: 4} )
    }


}

function draw() {
    clear();
    background(0, 150, 255);

    //Steuerung
    if(kb.pressing("left")) {
        player.vel.x = -10;
        player.ani = "run";
        player.mirror.x = true;
    } else if(kb.pressing("right")) {
        player.vel.x = 10;
        player.ani = "run";
        player.mirror.x = false;
    } else {
        player.vel.x = 0;
        player.ani = "standing";
    }

    if(kb.pressed("up")) {
        player.vel.y = 20;
    }

}


