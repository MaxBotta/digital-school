
import { Player } from '../objects/Player.js';

export class Play extends Phaser.Scene {

    constructor() {
        super('play');
    }

    create() {
        let player = new Player(this, 100, 100, 'player');

    }

}