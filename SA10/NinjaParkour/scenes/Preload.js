
export class Preload extends Phaser.Scene {

    constructor() {
        super('preload');

        this.backgrounds = [
            "sand",
            "sky"
        ]

        this.characterNames = [
            "Mask Dude",
            "Ninja Frog",
            "Pink Man",
            "Virtual Guy",
        ]
    }

    preload = () => {
        this.loadPlayerAnimations();
    }

    create = () => {
        this.scene.start("play");
    }

    loadPlayerAnimations = () => {
        for(let type of this.characterNames) {
            this.load.spritesheet({
                key: `${type}_idle`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Idle (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
        }
    }

}