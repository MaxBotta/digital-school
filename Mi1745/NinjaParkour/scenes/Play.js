import { Player } from "../objects/Player.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    create() {
        // let player = this.physics.add.sprite(100, 450, 'player');
        for(let i = 0; i < 20; i++) {
            let player = new Player(this, i * 40, 100, "Max", "Pink Man");
        }

    }

}


