
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
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        this.load.on('progress', function (value) {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('complete', function () {
            console.log('complete');
        });

        this.loadPlayerAnimations();
    }

    create = () => {
        this.scene.start("play");
    }

    loadPlayerAnimations = () => {
        for (let type of this.characterNames) {
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
            this.load.spritesheet({
                key: `${type}_fall`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Fall (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
            this.load.spritesheet({
                key: `${type}_hit`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Hit (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
            this.load.spritesheet({
                key: `${type}_double_jump`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Double Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
            this.load.spritesheet({
                key: `${type}_jump`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
            this.load.spritesheet({
                key: `${type}_wall_jump`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Wall Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });
            this.load.spritesheet({
                key: `${type}_run`,
                url: `assets/PixelAdventure/MainCharacters/${type}/Run (32x32).png`,
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