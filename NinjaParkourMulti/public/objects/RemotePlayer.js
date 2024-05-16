
export class RemotePlayer extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, characterName, username, id) {
        super(scene, x, y, username);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;

        this.username = username;
        this.id = id;

        this.body.setSize(16, 28);
        this.scale = 1.2;

        this.characterName = characterName;

        //Deaktiviere gravity
        this.body.allowGravity = false;

        //Nicht bewegbar
        this.body.immovable = true;

        // this.setCollideWorldBounds(true);
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
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_run`),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_jump`),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'double_jump',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_double_jump`),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: 'fall',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_fall`),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_hit`),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'wall_jump',
            frames: this.anims.generateFrameNumbers(`${this.characterName}_wall_jump`),
            frameRate: 20,
            repeat: -1
        });

        //Spiele erste Animation ab
        this.play("idle");

    }

    updatePlayer = (x, y) => {
        this.x = x;
        this.y = y;
    }


}