import { rqd } from "../utils.js";

export class RemotePlayer extends Phaser.Physics.Arcade.Sprite {

    constructor(scene = rqd(), x = rqd(), y = rqd(), username = rqd(), characterType = rqd()) {   
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        //Schalte Gravitation aus
        this.body.allowGravity = false;

        this.setBounce(0.2);
        //this.setCollideWorldBounds(true);
        this.scale = 1.2;
        this.body.setSize(20, 32);

        this.characterType = characterType;
        this.isAlive = true;
        this.username = username;

        this.preload();

    }

    preload = () => {
        this.scene.load.once('complete', this.create, this.scene);
        this.scene.load.start();
    }


    create = () => {

        //Füge Animationen hinzu
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_idle`),
            frameRate: 18,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_run`),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_jump`),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create({
            key: 'double_jump',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_double_jump`),
            frameRate: 30,
            repeat: -1
        });

        this.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_hit`),
            frameRate: 30,
            repeat: -1
        });
        //////////////////////

        //Spiele Stehanimation ab
        this.play("idle");

        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });
    }

}
