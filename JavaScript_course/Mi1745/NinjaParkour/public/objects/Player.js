
//Diese Klasse ist ein Bauplan für unseren Spieler
export class Player extends Phaser.Physics.Arcade.Sprite {

    //baut unseren Spieler
    constructor(scene, x, y, username, characterName) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(16, 28);

        this.username = name;

        this.characterName = characterName;
        this.scale = 1.2;
        this.runSpeed = 40;
        this.jumpSpeed = -80;
        this.jumpCount = 0;
        this.isAlive = true;
        this.username = username;

        // this.setCollideWorldBounds(true);

        this.create();
    }

    create = () => {

        //Erstellt die Steuerung mit Pfeiltasten
        this.cursors = this.scene.input.keyboard.createCursorKeys();

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

    update = (time, dt) => {

        if (this.isAlive === false) return;

        //Steuerung
        if (this.cursors.left.isDown) {
            //nach links laufen
            this.flipX = true;
            this.setVelocityX(-this.runSpeed * dt);

            if(this.jumpCount === 0) {
                this.play("run", true);
            }

        } else if (this.cursors.right.isDown) {
            //nach rechts laufen
            this.flipX = false;
            this.setVelocityX(this.runSpeed * dt);

            if(this.jumpCount === 0) {
                this.play("run", true);
            }

        } else {
            //stehen bleiben
            this.setVelocityX(0);

            if(this.jumpCount === 0) {
                this.play("idle", true);
            }
        }

        //springen
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.jumpCount < 2) {
            this.setVelocityY(this.jumpSpeed * dt);
            this.jumpCount++;
        }

        if (this.body.velocity.y === 0) {
            this.jumpCount = 0;
        }

        //Spiele Fall Animation, wenn spieler fällt
        if (this.jumpCount == 2) {
            this.play("double_jump", true);
        } else if (this.body.velocity.y > 0) {
            this.play("fall", true);
        } else if (this.body.velocity.y < 0) {
            this.play("jump", true);
        }


    }

    kill = () => {

        if (this.isAlive === false) return;

        console.log("player was killed");
        this.isAlive = false;
        this.setVelocityY(-600);
        this.play("hit", true);
        this.body.collider

        //Respawn des Spielers
        setTimeout(() => {
            this.respawn();
        }, 1000);

    }

    respawn = () => {
        this.setPosition(100, 2400);
        this.isAlive = true;
    }


}

