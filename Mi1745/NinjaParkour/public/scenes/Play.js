import { Player } from "../objects/Player.js"
import { Saw } from "../objects/Saw.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");

        this.player = null;
        this.socket = null;
    }

    create() {

        //Lade Tilemap
        const map = this.make.tilemap({ key: 'level1', tileWidth: 16, tileHeight: 16 });

        //Lade Tilesets / erstelle Kachelsets
        const terrain = map.addTilesetImage("terrain", "terrain_img");
        const terrainCollide = map.addTilesetImage("terrain_collide", "terrain_img");
        const backgroundYellow = map.addTilesetImage("background_yellow", "background_yellow_img");
        const backgroundBlue = map.addTilesetImage("background_blue", "background_blue_img");
        const spikes = map.addTilesetImage("spikes", "spikes_img");

        //Erstelle Layer / Ebenen - Reihenfolge ist wichtig
        const backgroundLayer = map.createLayer("background", [backgroundYellow, backgroundBlue]);
        const terrainLayer = map.createLayer("terrain", [terrain, terrainCollide]);
        const trapsLayer = map.createLayer("traps", [spikes]);

        //Erstelle Spieler
        const usernames = [
            "Tina",
            "Bobby",
            "Helmut",
            "Linda",
            "Klaus",
            "Hans",
        ]
        const randUsername = usernames[Math.floor(Math.random() * usernames.length)];

        const characterNames = [
            "Pink Man",
            "Ninja Frog",
            "Mask Dude",
            "Virtual Guy"
        ]

        const randCharacter = characterNames[Math.floor(Math.random() * characterNames.length)];

        this.player = new Player(this, 100, 2600, randUsername, randCharacter);

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.6);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Erstelle Kollisionen mit den Blöcken
        terrainLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, terrainLayer);

        //Füge kill zu traps hinzu
        trapsLayer.setCollisionByProperty({ kill: true });
        this.physics.add.collider(this.player, trapsLayer, this.player.kill)

        //Add saws
        const saw = new Saw(this, 300, 2600);
        this.physics.add.collider(this.player, saw, this.player.kill)


        //Connect websocket to server
        this.socket = io();

        //connect to server
        this.socket.on("connect", () => {
            console.log("You are connected to the server");

            //Benachrichtige den Server, dass ein neuer Spieler hinzugefügt wurde
            this.socket.emit("new_user", {
                id: this.socket.id,
                username: this.player.username,
                x: this.player.x,
                y: this.player.y,
                animation: this.player.anims.currentAnim.key,
                characterName: this.player.characterName,
                flipX: this.player.flipX
            });

            //Wenn ein neuer Spieler hinzugefügt wird
            this.socket.on("new_user_joined", (newUser) => {

                //Zeige in der Browser Konsole, dass ein neuer Spieler hinzugekommen ist
                console.log("A new user has joined", newUser)

                //Füge einen neuen remote Player hinzu

            })

        })

    }

    update() {

    }

}
