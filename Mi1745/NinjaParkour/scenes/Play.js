import { Player } from "../objects/Player.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");

        this.player = null;
    }

    create() {

        //Lade Tilemap
        const map = this.make.tilemap({ key: 'level1', tileWidth: 16, tileHeight: 16 });

        //Lade Tilesets
        const terrain = map.addTilesetImage("terrain", "terrain");
        const terrainCollide = map.addTilesetImage("terrain_collide", "terrain");
        const backgroundYellow = map.addTilesetImage("background_yellow", "background_yellow");
        const backgroundBlue = map.addTilesetImage("background_blue", "background_blue");

        //Erstelle Layer / Ebenen - Reihenfolge ist wichtig
        const backgroundLayer = map.createLayer("background", [backgroundYellow, backgroundBlue]);
        const terrainLayer = map.createLayer("terrain", [terrain, terrainCollide]);

        //Erstelle Spieler
        this.player = new Player(this, 100, 2600, "Max", "Pink Man");

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.6);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Erstelle Kollisionen mit den Blöcken
        terrainLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, terrainLayer);


    }

    update() {

    }

}
