import { Player } from "../objects/Player.js";

export class Play extends Phaser.Scene {
    constructor() {
        super('play');
    }

    create() {
        const player = new Player(this, 200, 200, "Player", "Ninja Frog");

    }

    update() {
        
    }
}