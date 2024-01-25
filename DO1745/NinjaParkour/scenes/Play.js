import { Player } from "../objects/Player.js";

export class Play extends Phaser.Scene {
    constructor() {
        super('play');
        this.player = null;
    }

    create() {

        //Erstelle Level
        const map = this.make.tilemap({ key: "level1" });

        //Erstelle Kachelsets/Tileset
        const backgroundTileset = map.addTilesetImage("background", "backgroundYellow");
        const terrainTileset = map.addTilesetImage("terrain", "terrain");
        const terrainCollideTileset = map.addTilesetImage("terrain_collide", "terrain");

        //Erstelle Ebenen/Layer
        const backgroundLayer = map.createLayer("background", backgroundTileset);
        const terrainLayer = map.createLayer("terrain", [terrainTileset, terrainCollideTileset])

        //Erstelle Spieler
        this.player = new Player(this, 200, 200, "Max", "Mask Dude");

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.6);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    }

    update() {

    }
}