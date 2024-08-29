
export class Saw extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, "saw");

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(16, 28);
        
        //prevent from falling
        this.body.setImmovable(true);
        this.body.allowGravity = false;

        this.create();
    }

    create = () => {
        this.scene.anims.create({
            key: 'saw',
            frames: this.anims.generateFrameNumbers("saw"),
            frameRate: 24,
            repeat: -1
        });
        this.play('saw', true);
    }

}