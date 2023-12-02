
export class Play extends Phaser.Scene {

    constructor() {
        super('play');
    }

    create() {
        console.log(this)
        let player = this.physics.add.sprite(100, 450, 'player');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.scale = 2;

        player.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player_idle'),
            frameRate: 18,
            repeat: -1
        });

        player.play("idle");

    }

}