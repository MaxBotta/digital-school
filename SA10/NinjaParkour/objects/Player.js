

export class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, characterName, name) {
        super(scene, x, y, name);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;

        this.damage = 10;
        this.jumpPower = 20;

        this.body.setSize(16, 28);
        this.scale = 2;

        this.characterName = characterName;

        this.setCollideWorldBounds(true);
        this.preload();

    }

    preload = () => {
        
        this.scene.load.once('complete', this.create, this.scene); 
        this.scene.load.start();
    }

    create = () => {

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_idle`),
            frameRate: 20,
            repeat: -1
        });

        this.play("idle");
        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });

    }

    update = (t, dt) => {


    }

}