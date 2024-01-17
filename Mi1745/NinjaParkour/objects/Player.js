
//Diese Klasse ist ein Bauplan für unseren Spieler
export class Player extends Phaser.Physics.Arcade.Sprite {

    //baut unseren Spieler
    constructor(scene, x, y, name, characterName) {
        super(scene, x, y, name);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(16, 28);

        this.characterName = characterName;
        this.scale = 2;
        this.runSpeed = 400;
        this.jumpSpeed = -400;
        this.jumpCount = 0;

        this.setCollideWorldBounds(true);

        this.create();

    }

    create = () => {

        //Erstellt die Steuerung mit Pfeiltasten
        this.cursors = this.scene.input.keyboard.createCursorKeys();

        this.scene.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(this.characterName + "_idle"),
            frameRate: 18,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(this.characterName + "_run"),
            frameRate: 18,
            repeat: -1
        });

        this.play("idle");

        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });

    }

    update = () => {

        //Steuerung
        if (this.cursors.left.isDown) {
            //nach links laufen
            this.flipX = true;
            this.play("run", true);
            this.setVelocityX(-this.runSpeed);
        } else if (this.cursors.right.isDown) {
            //nach rechts laufen
            this.flipX = false;
            this.play("run", true);
            this.setVelocityX(this.runSpeed);
        } else {
            //stehen bleiben
            this.play("idle", true);
            this.setVelocityX(0);
        }

        //springen
        if(Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.jumpCount < 1) {
            this.setVelocityY(this.jumpSpeed);
            this.jumpCount++;
        }

        if(this.body.blocked.down) {
            this.jumpCount = 0;
        }

    }


}
