

export class Preloader extends Phaser.Scene {
    constructor() {
        super("preloader");
    }

    preload() {
        this.load.spritesheet({
            key: 'ninja_frog_idle',
            url: 'assets/Main Characters/Ninja Frog/Idle (32x32).png',
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


