

export class Preloader extends Phaser.Scene {
    constructor() {
        super("preloader");

        this.characterNames = [
            "Mask Dude",
            "Ninja Frog",
            "Pink Man",
            "Virtual Guy"
        ]
    }

    preload() {

        //lade alle Bilder von allen Charakteren
        for (let character of this.characterNames) {
            this.load.spritesheet({
                key: `${character}_idle`,
                url: `assets/Main Characters/${character}/Idle (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
        }

    }

    create() {
        this.scene.start("play");
    }

}


