
const p5_ = new p5();

class Player extends p5_.Sprite {

    constructor(name, type, x, y, jumpPower = 10, runSpeed = 10, attackPower = 10, defense = 10, magicPower = 10) {
        super();
        this.name = name;
        this.type = type; // dude, owlet, pink
        this.x = x;
        this.y = y;
        this.lifePoints = 100;
        this.width = 22;
        this.height = 32;
        this.jumpPower = jumpPower;
        this.runSpeed = runSpeed;
        this.attackPower = attackPower;
        this.defense = defense;
        this.magicPower = magicPower;
        this.scale = 2;
        this.debug = true;

        this.isRunning = false;
        this.isJumping = false;

        if (this.type === "Pink" || this.type === "Dude" || this.type === "Owlet") {
            this.addAni("idle", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Idle_4.png`, { frameSize: [32, 32], frameCount: 4 });
            this.addAni("walk", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Walk_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("run", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Run_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("atk-1", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Attack1_4.png`, { frameSize: [32, 32], frameCount: 4 });
            this.addAni("atk-2", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Attack2_6.png`, { frameSize: [32, 32], frameCount: 6 });
            this.addAni("jump", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Jump_8.png`, { frameSize: [32, 32], frameCount: 8 });
            this.addAni("dead", `assets/images/tiny-hero-sprites/${type}_Monster/${type}_Monster_Death_8.png`, { frameSize: [32, 32], frameCount: 8 });
        } else {
            console.log(this.type + " type not found");
        }

        this.changeAni("idle");

        this.ani.frameDelay = 6;
    }

    showName() {
        fill(255, 255, 255);
        const textW = textWidth(this.name);
        text(this.name, this.x - textW / 2, this.y - 40);

        //show life
        fill(240, 240, 240);
        rect(this.x - 20, this.y - 30, 50, 5);
        fill(0, 255, 0);
        rect(this.x - 20, this.y - 30, this.lifePoints / 2, 5);
    }

    isNear(obj) {
        var dist = Math.sqrt(Math.pow((obj.x - this.x), 2) + Math.pow((obj.y - this.y), 2));
        if(dist < 50) return true;
        return false;
    }

    attack(enemy) {
        enemy.lifePoints = enemy.lifePoints - this.attackPower;
        if(enemy.lifePoints <= 0) {
            enemy.lifePoints = 0;
            enemy.changeAni("dead");
            enemy.ani.noLoop();
            setTimeout(() => {
                enemy.remove();
            }, 1000);
        }
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


