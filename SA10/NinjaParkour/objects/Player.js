

export class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, name) {
        console.log("🚀 ~ file: Player.js:6 ~ Player ~ constructor ~ scene:", scene)
        super(scene, x, y, name);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;

        this.damage = 10;
        this.jumpPower = 20;

        this.body.setSize(16, 28);
        this.scale = 2;

        this.setCollideWorldBounds(true);
        this.preload();

    }

    preload = () => {
        
        this.scene.load.spritesheet({
            key: 'player_idle',
            url: 'assets/PixelAdventure/MainCharacters/Ninja Frog/Idle (32x32).png',
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

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player_idle'),
            frameRate: 20,
            repeat: -1
        });

        this.play("idle");
        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });

    }

    update = (t, dt) => {


    }

}