import { Player } from "../objects/Player.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    create() {
        // let player = this.physics.add.sprite(100, 450, 'player');

        let player = new Player(this, 100, 100, "Max", "Pink Man");


    }

}


