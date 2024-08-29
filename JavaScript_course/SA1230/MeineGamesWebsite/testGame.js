
let player;

let runImg;
let idleImg;
let jumpImg;
let dustImg;
let dustAni;

let lookDir = "right";
let isRunning = false;

function preload() {
    walkImg = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Walk_6.png");
    runImg = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Run_6.png");
    idleImg = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Idle_4.png");
    jumpImg = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Jump_8.png");
    attack1Img = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Pink_Monster_Attack1_4.png");
    dustImg = loadImage("./assets/tiny-hero-sprites/Pink_Monster/Walk_Run_Push_Dust_6.png");

}

function setup() {
    let canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 20;

    //Spieler erstellen
    player = new Sprite(400, 360, 32, 32);
    player.addAni("walk", runImg, { frameSize: [32, 32], frameCount: 6 })
    player.addAni("run", runImg, { frameSize: [32, 32], frameCount: 6 })
    player.addAni("idle", idleImg, { frameSize: [32, 32], frameCount: 1 })
    player.addAni("jump", jumpImg, { frameSize: [32, 32], frameCount: 6 })
    player.addAni("attack1", attack1Img, { frameSize: [32, 32], frameCount: 4 })
    player.ani = "idle";

    dustAni = loadAnimation(dustImg, { frameSize: [32, 32], frameCount: 6 });


    let floor = new Sprite(300, 400, 600, 40, "static");
    floor.color = "green";
    let floor2 = new Sprite(500, 250, 100, 20, "static");
    floor2.color = "green";



    //createBoxes(10)


}

function draw() {
    clear();
    background(0, 180, 250);

    player.rotation = 0;

    if (isRunning) {
        animation(dustAni, player.x, player.y);
    }

    //Bewegung
    if (kb.pressing("left")) {
        player.mirror.x = true;
        lookDir = "left";
        if (kb.pressing("a")) {
            player.ani = "run";
            player.vel.x = -10;
            isRunning = true;
        } else {
            player.ani = "walk";
            player.vel.x = -3;
        }
    } else if (kb.pressing("right")) {
        player.mirror.x = false;
        lookDir = "right";
        if (kb.pressing("a")) {
            player.ani = "run";
            player.vel.x = 10;
            isRunning = true;
        } else {
            player.ani = "walk";
            player.vel.x = 3;
        }
    } else {
        player.vel.x = 0;
    }

    if (kb.pressing("f")) {
        player.ani = "attack1";
        if (lookDir === "left") {
            player.vel.x = -0.5;
        } else {
            player.velx = 0.5;
        }
    }

    if (kb.pressing("space") && (player.vel.y > -0.3 && player.vel.y < 0.3)) {
        player.vel.y = -6;
        player.ani = "jump";
    }

    if ((player.vel.y > -0.3 && player.vel.y < 0.3) && (player.vel.x > -0.3 && player.vel.x < 0.3)) {
        player.ani = "idle";
    }
}


function createBoxes(count) {
    for (let y = count; y > 0; y--) {
        let ySwitch = Math.abs(y - count);
        let yOffset = 360 - 20 * ySwitch;
        for (let x = 0; x < y; x++) {
            let newBox = new Sprite(100 + x * 20 + ySwitch * 10, yOffset, 20, 20);
        }
    }
}



