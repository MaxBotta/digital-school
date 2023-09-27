

class Player extends p5_.Sprite {

    constructor(name, type, x, y) {
        super();

        this.x = x;
        this.y = y;
        this.width = 22,
        this.height = 32;
        this.scale = 2;
        this.debug = true;
        this.collider = "dynamic";

        this.name = name;
        this.type = type; //Pink, Owlet, Dude
        this.lifePoints = 100;
        this.walkSpeed = 10;
        this.runSpeed = 20;
        this.jumpPower = 10;
        this.attackPower = 10;
        this.defensePower = 5;
        this.attackSpeed = 5;
        this.isJumping = false;
        this.isAlive = true;

        this.addAni("run", "assets/tiny-hero-sprites/" + type + "_Monster/" + type + "_Monster_Run_6.png", { frameSize: [32, 32], frames: 6 })
        this.addAni("idle", "assets/tiny-hero-sprites/" + type + "_Monster/" + type + "_Monster_Idle_4.png", { frameSize: [32, 32], frames: 4 })
        this.addAni("jump", "assets/tiny-hero-sprites/" + type + "_Monster/" + type + "_Monster_Jump_8.png", { frameSize: [32, 32], frames: 8 })
      
        this.changeAni("idle");
        this.ani.frameDelay = 8;
    }

    jump() {
        this.y = this.y + 10;
    }

    attack(enemy) {
        enemy.lifePoints = enemy.lifePoints - this.attackPower;
    }

}


