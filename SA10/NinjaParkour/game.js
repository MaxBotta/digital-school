
import { Preload, Play } from './scenes/index.js';

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        fps: 60,
        default: 'arcade',
        arcade: {
            gravity: { y: 2000 },
            // debug: true,
            tileBias: 20,
        }
    },
    scene: [Preload, Play]
}

let game = new Phaser.Game(config);

export default game;