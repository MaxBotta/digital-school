
export class Preload extends Phaser.Scene {

    constructor() {
        super('preload');
    }

    preload() {
        this.load.spritesheet({
            key: 'player_idle',
            url: 'assets/PixelAdventure/MainCharacters/Ninja Frog/Idle (32x32).png',
            frameConfig: {
                frameWidth: 32,
                frameHeight: 32,
                startFrame: 0,
                endFrame: 11
            }
        });
    }

    create() {
        this.scene.start("play");
    }

}