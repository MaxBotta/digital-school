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
        const backgroundYellowTileset = map.addTilesetImage("background_yellow", "background_yellow_img");
        const terrainTileset = map.addTilesetImage("terrain", "terrain_img");
        const terrainCollideTileset = map.addTilesetImage("terrain_collide", "terrain_img");
        const spikeTileset = map.addTilesetImage("spikes", "spikes_img");

        //Erstelle Ebenen/Layer
        const backgroundLayer = map.createLayer("background", backgroundYellowTileset);
        const terrainLayer = map.createLayer("terrain", [terrainTileset, terrainCollideTileset]);
        const trapsLayer = map.createLayer("traps", [spikeTileset]);

        //Erstelle Spieler
        this.player = new Player(this, 200, 600, "Max", "Mask Dude");

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.4);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Erstelle Kollision mit den Blöcken
        terrainLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, terrainLayer);

        //Kill Bausteine
        // const killTraps = map.filterTiles((tile) => tile.properties.kill === true);
        trapsLayer.setCollisionByProperty({ kill: true });
        this.physics.add.collider(this.player, trapsLayer, () => {
            this.player.kill();
        })

    }

    update() {

    }

}