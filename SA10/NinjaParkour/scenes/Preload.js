
export class Preload extends Phaser.Scene {

    constructor() {
        super('preload');

        this.backgrounds = [
            "sand",
            "sky"
        ]
    }

    preload() {

    }

    create() {
        this.scene.start("play");
    }

}