import { Player } from "../objects/Player.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    create() {
        // let player = this.physics.add.sprite(100, 450, 'player');
        let player = new Player(this, x, y, name, characterType)

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.scale = 2;

        player.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('ninja_frog_idle'),
            frameRate: 18,
            repeat: -1
        });

        player.play("idle");

    }

}


