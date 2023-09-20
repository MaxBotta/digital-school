
const p5_ = new p5();

class Player extends p5_.Sprite {

    constructor(name, type, x, y, jumpPower, runSpeed, attack, defense, magicPower) {
        super();
        this.name = name;
        this.type = type; // dude, owlet, pink
        this.x = x;
        this.y = y;
        this.width = 22;
        this.height = 32;
        this.jumpPower = jumpPower;
        this.runSpeed = runSpeed;
        this.attack = attack;
        this.defense = defense;
        this.magicPower = magicPower;
        this.scale = 2;
        this.debug = true;

        this.isRunning = false;
        this.isJumping = false;

        if (this.type === "Pink" || this.type === "Dude") {
            this.addAni("idle", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Idle_4.png`, { frameSize: [32, 32], frameCount: 4 });
            this.addAni("walk", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Walk_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("run", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Run_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("atk-1", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Attack1_4.png`, { frameSize: [32, 32], frameCount: 4 });
            this.addAni("atk-2", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Attack2_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("jump", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Jump_8.png`, { frameSize: [32, 32], frameCount: 8 });
        } else {
            console.log(this.type + " type not found");
        }

        this.changeAni("idle");

        this.ani.frameDelay = 6;
    }

    attack() {

    }

    jump(velocity) {
        player.velocity.y = velocity;
        player.ani.frameDelay = velocity / 2;
    }

    sleep() {

    }

    eat() {

    }

}


