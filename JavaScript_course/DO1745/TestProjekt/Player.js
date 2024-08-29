

class Player extends p5_.Sprite {

    constructor(name, type, x, y) {
        super();

        this.name = name;
        this.type = type; //Dude, Owlet, Pink
        this.x = x;
        this.y = y;
        this.width = 22;
        this.height = 32;
        this.scale = 2;
        this.debug = true;

        this.lifePoints = 100;
        this.attackPower = 10;
        this.defensePower = 5;
        this.jumpPower = 10;
        this.runSpeed = 10;
        this.walkSpeed = 5;
        this.isAlive = true;

        this.addAni('idle', 'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Idle_4.png', { frameSize: [32, 32], frames: 4 });
        this.addAni('walk', 'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Walk_6.png', { frameSize: [32, 32], frames: 6 })
        this.addAni('run',  'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Run_6.png', { frameSize: [32, 32], frames: 6 })
        this.addAni('atk-1', 'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Attack1_4.png', { frameSize: [32, 32], frames: 4 })
        this.addAni('atk-2', 'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Attack2_6.png', { frameSize: [32, 32], frames: 6 })
        this.addAni('jump', 'assets/tiny-hero-sprites/' + type + '_Monster/' + type + '_Monster_Jump_8.png', { frameSize: [32, 32], frames: 8 })


        this.ani = "idle";
        this.ani.frameDelay = 8;
    }

    showName() {
        //show player name
        fill(255,255,255);
        textSize(20);
        const textW = textWidth(this.name);
        text(this.name, this.x - textW / 2, this.y - 40);
    }

    setupAnimation() {

    }

    walk() {

    }

    run() {

    }

    jump() {

    }

    attack() {

    }

    die() {

    }

    spawn() {

    }


}
