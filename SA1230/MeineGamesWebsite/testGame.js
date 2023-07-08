
let sprite;

function setup() {
    let canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 20;

    sprite = new Sprite(600, 360, 40, 40);
    sprite.color = "yellow";
    // sprite.vel.x = -16;
    sprite.mass = 4;

    let floor = new Sprite(300, 400, 600, 40, "static");
    floor.color = "green";
    let floor2 = new Sprite(500, 200, 100, 20, "static");
    floor2.color = "green";

    //Boxen aufeinander stapeln
    // let box0 = new Sprite(300, 340, 20, 20);
    // let box1 = new Sprite(300, 340, 20, 20);
    // let box2 = new Sprite(300, 340, 20, 20);
    // let box3 = new Sprite(300, 340, 20, 20);
    // let box4 = new Sprite(300, 320, 20, 20);
    // let box5 = new Sprite(300, 320, 20, 20);
    // let box6 = new Sprite(300, 320, 20, 20);
    // let box7 = new Sprite(300, 280, 20, 20);
    // let box8 = new Sprite(300, 280, 20, 20);
    // let box9 = new Sprite(300, 240, 20, 20);

    createBoxes(10)



}

function draw() {
    background(0, 180, 250);


    //Bewegung
    if(kb.pressing("left")) {
        sprite.vel.x = -10;
    } else if(kb.pressing("right")) {
        sprite.vel.x = 10;
    } else {
        sprite.vel.x = 0;
    }

    console.log(sprite.vel.y)
    if(kb.pressing("space") && (sprite.vel.y > -0.3 && sprite.vel.y < 0.3) ) {
        sprite.vel.y = -6;
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



