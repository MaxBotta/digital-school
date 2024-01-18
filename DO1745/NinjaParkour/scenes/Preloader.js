

export class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');

        this.characterTypes = [
            'Mask Dude',
            'Ninja Frog',
            'Pink Man',
            'Virtual Guy'
        ]

    }

    preload() {

        //lade alle Bilder von allen Charakteren
        for (let characterType of this.characterTypes) {

            this.load.spritesheet({
                key: `${characterType}_idle`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Idle (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });

            this.load.spritesheet({
                key: `${characterType}_run`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Run (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });

            this.load.spritesheet({
                key: `${characterType}_jump`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 0
                }
            });

            this.load.spritesheet({
                key: `${characterType}_double_jump`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Double Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 5
                }
            });
        }

    }

    create() {
        this.scene.start("play");
    }

}
