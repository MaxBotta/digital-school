
export class Player extends Phaser.Physics.Arcade.Sprite {

    //baut unseren Spieler
    constructor(scene, x, y, name, characterName) {
        super(scene, x, y, name);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(16, 28);

        this.characterName = characterName;
        this.life = 100;
    }


}