

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

        //load player spritesheets
        this.load.spritesheet({
            key: 'ninja_frog_idle',
            url: 'assets/PixelAdventure/Main Characters/Ninja Frog/Idle (32x32).png',
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
