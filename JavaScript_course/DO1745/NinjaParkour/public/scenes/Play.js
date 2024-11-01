import { Player } from "../objects/Player.js";
import { RemotePlayer } from "../objects/RemotePlayer.js";
import { Trampoline } from "../objects/Trampoline.js";

export class Play extends Phaser.Scene {
    constructor() {
        super('play');
        this.player = null;
        this.socket = null;
        this.users = [];
    }

    create() {

        //Erstelle Level
        const map = this.make.tilemap({ key: "level1" });

        //Erstelle Kachelsets/Tileset
        const backgroundYellowTileset = map.addTilesetImage("background_yellow", "background_yellow_img");
        const terrainTileset = map.addTilesetImage("terrain", "terrain_img");
        const terrainCollideTileset = map.addTilesetImage("terrain_collide", "terrain_img");
        const spikeTileset = map.addTilesetImage("spikes", "spikes_img");
        const fireTileset = map.addTilesetImage("fire", "fire_img");

        //Erstelle Ebenen/Layer
        const backgroundLayer = map.createLayer("background", backgroundYellowTileset);
        const terrainLayer = map.createLayer("terrain", [terrainTileset, terrainCollideTileset]);
        const trapsLayer = map.createLayer("traps", [spikeTileset, fireTileset]);

        //Erstelle Spieler
        this.player = new Player(this, 200, 600, "Max", "Ninja Frog");

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

        //Durchsuche Trampolin Layer und erstelle Trampoline
        const trampolineLayer = map.getObjectLayer("trampolines");
        //Liste für alle Trampoline
        const trampolines = [];
        //Erstelle Trampolin für jedes Trampolin in der Tiled Map
        for (const trampoline of trampolineLayer.objects) {
            const newTrampoline = new Trampoline(this, trampoline.x, trampoline.y);
            //Füge neues Trampolin zur Liste hinzu
            trampolines.push(newTrampoline);
        }

        //Kollision mit Trampolinen
        this.physics.add.collider(this.player, trampolines, (player, trampoline) => {
            trampoline.jump(player);
        })


        //Erstelle socket Verbindung
        this.socket = io();

        //Wenn Spieler sich verbindet
        this.socket.on('connect', () => {
            console.log('connected to server');

            this.player.id = this.socket.id;

            //Sende Spielerdaten an Server
            this.socket.emit('new_player', {
                id: this.socket.id,
                username: this.player.username,
                characterType: this.player.characterType,
                x: this.player.x,
                y: this.player.y,
                isAlive: this.player.isAlive,
                animation: this.player.anims.currentAnim.key,
                flipX: this.player.flipX
            })

            //Wenn ein neuer Spieler dem Spiel beigetreten ist
            this.socket.on("new_player_joined", (newUser) => {
                console.log("Neuer Spieler beigetreten: " + newUser.username);

                //Erstelle neuen Remote Spieler
                const newRemotePlayer = new RemotePlayer(this, newUser.x, newUser.y, newUser.username, newUser.characterType, newUser.id);

                //Füge neuen Remote Spieler zur Liste aller Spieler hinzu
                this.users.push(newRemotePlayer);

                console.log("Aktuelle Spieler: ", this.users)

            })

            //Wenn alle Spielerdaten empfangen wurden
            this.socket.on("all_players", (users) => {
                for (const user of users) {
                    //Erstelle neuen Remote Spieler
                    const newRemotePlayer = new RemotePlayer(this, user.x, user.y, user.username, user.characterType, user.id);

                    //Füge neuen Remote Spieler zur Liste aller Spieler hinzu
                    this.users.push(newRemotePlayer)
                }
            })

            //Empfange alle 30ms ein Update aller Spieler
            this.socket.on("update_players", (users) => {
                //Durchsuche alle Spieler und update die entsprechenden Spieler
                for (const user of users) {
                    for (const localUser of this.users) {
                        if (user.id === localUser.id) {
                            localUser.x = user.x;
                            localUser.y = user.y;
                            localUser.flipX = user.flipX;
                            localUser.isAlive = user.isAlive;
                            localUser.characterType = user.characterType;
                            localUser.play(user.animation, true);
                        }
                    }
                }
            })

            //Sende alle 30ms ein Update des Spielers an den Server
            setInterval(() => {
                this.socket.emit("update_player", {
                    id: this.player.id,
                    x: this.player.x,
                    y: this.player.y,
                    isAlive: this.player.isAlive,
                    animation: this.player.anims.currentAnim.key,
                    flipX: this.player.flipX,
                    characterType: this.player.characterType
                })
            }, 30)
        })

    }

    update() {

    }

}