
import { Player } from '../objects/Player.js';

export class Play extends Phaser.Scene {

    constructor() {
        super('play');
        this.player = null;
    }

    create() {

        //Level erstellen
        const map = this.make.tilemap({ key: "level1" });

        //Erstelle Kachelsets/Tileset
        const backBrownTileset = map.addTilesetImage("back_brown", "back_brown");
        const terrainTileset = map.addTilesetImage("terrain", "terrain");
        const terrainCollideTileset = map.addTilesetImage("terrain_collide", "terrain");

        //Erstelle Ebenen/Layer
        const backgroundLayer = map.createLayer("background", backBrownTileset);
        const terrainLayer = map.createLayer("terrain", [terrainTileset, terrainCollideTileset])


        //Erstelle Spieler
        this.player = new Player(this, 100, 2000, "Pink Man", 'Max');

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.4);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Erstelle Kollision mit den Blöcken
        terrainLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, terrainLayer);

    }

    update() {
    }

}