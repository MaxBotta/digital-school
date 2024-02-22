
export class Trampoline extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x + 14, y - 14, "trampoline");
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //Deaktivierte die Gravitation
        this.body.setAllowGravity(false);

        //Macht das Trampolin unbewegbar
        this.setImmovable(true);

        this.jumpPower = 1000;

        this.create();
    }

    create = () => {
        //Füge Animationen hinzu
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(`trampoline_idle`),
            frameRate: 18,
            repeat: -1
        });
        this.play('idle', true);
    }

    jump = (player) => {
        player.setVelocityY(-this.jumpPower);
    }


}