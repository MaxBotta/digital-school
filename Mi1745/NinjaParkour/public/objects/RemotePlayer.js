
//Diese Klasse ist ein Bauplan für alle online/remote Spieler
export class RemotePlayer extends Phaser.Physics.Arcade.Sprite {

    //baut unseren Spieler
    constructor({ scene, x, y, username, characterName, id }) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(16, 28);

        //Gravitation ausschalten
        this.body.setAllowGravity(false);

        this.username = username;
        this.id = id;
        this.characterName = characterName;
        this.scale = 1.2;
        this.nameText = null;

        this.create();
    }

    setAnimation = (animation) => {
        this.play(animation, true);
    }

    setFlipX = (flipX) => {
        this.flipX = flipX;
    }

    setPosition = (x, y) => {
        this.x = x;
        this.y = y;
        this.nameText.x = x - 20;
        this.nameText.y = y - 30;
    }

    create = () => {

        this.nameText = this.scene.add.text(this.x - 20, this.y - 30, this.username);

        this.scene.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(this.characterName + "_idle"),
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(this.characterName + "_run"),
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers(this.characterName + "_hit"),
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'fall',
            frames: this.anims.generateFrameNumbers(this.characterName + "_fall"),
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers(this.characterName + "_jump"),
            frameRate: 24,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'double_jump',
            frames: this.anims.generateFrameNumbers(this.characterName + "_double_jump"),
            frameRate: 24,
            repeat: -1
        });

        this.play("idle");

        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });

    }


}

