

export class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, name, characterType) {
        super(scene, x, y, name);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
        this.scale = 1.5;

        this.characterType = characterType;
        this.isAlive = true;
        this.isJumping = false;
        this.isDoubleJumping = false;
        this.speed = 80;
        this.cursors;

        this.preload();

    }

    preload = () => {

        this.scene.load.spritesheet({
            key: 'ninja_frog_run',
            url: 'assets/PixelAdventure/Main Characters/Ninja Frog/Run (32x32).png',
            frameConfig: {
                frameWidth: 32,
                frameHeight: 32,
                startFrame: 0,
                endFrame: 11
            }
        });

        this.scene.load.once('complete', this.create, this.scene);
        this.scene.load.start();
    }

    create = () => {

        this.cursors = this.scene.input.keyboard.createCursorKeys();

        //Füge Animationen hinzu
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('ninja_frog_idle'),
            frameRate: 18,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('ninja_frog_run'),
            frameRate: 24,
            repeat: -1
        });
        //////////////////////

        //Spiele Stehanimation ab
        this.play("idle");

        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });
    }

    update = (t, dt) => {
        this.move(dt);
    }

    move = (dt) => {
        //Schauen ob Pfeiltasten gedrückt werden und falls ja Spieler bewegen
        if (this.cursors.left.isDown) {
            this.setVelocityX(-this.speed * dt);
            this.play("run", true);
            this.flipX = true;
        }
        else if (this.cursors.right.isDown) {
            this.setVelocityX(this.speed * dt);
            this.play("run", true);
            this.flipX = false;
        } else {
            this.setVelocityX(0);
            this.play("idle", true)
        }
    }

    jump = () => {

    }

}
