
import { Player } from '../objects/Player.js';
import { Trampoline } from '../objects/Trampoline.js'
import { Saw } from '../objects/Saw.js'
import { RemotePlayer } from '../objects/RemotePlayer.js';

export class Play extends Phaser.Scene {

    constructor() {
        super('play');
        this.player = null;
        this.socket = null;
        this.remoteUsers = [];
    }

    create() {

        //Level erstellen
        const map = this.make.tilemap({ key: "level1" });

        //Erstelle Kachelsets/Tileset
        const backBrownTileset = map.addTilesetImage("back_brown", "back_brown_img");
        const terrainTileset = map.addTilesetImage("terrain", "terrain_img");
        const terrainCollideTileset = map.addTilesetImage("terrain_collide", "terrain_img");
        const spikesTileset = map.addTilesetImage("spikes", "spikes_img");

        //Erstelle Ebenen/Layer
        const backgroundLayer = map.createLayer("background", backBrownTileset);
        const terrainLayer = map.createLayer("terrain", [terrainTileset, terrainCollideTileset]);
        const trapsLayer = map.createLayer("traps", [spikesTileset]);

        //Erstelle Spieler
        this.player = new Player(this, 100, 2600, "Ninja Frog", 'Max');

        //Kamera verfolgt Spieler
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.6);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Erstelle Kollision mit den Blöcken
        terrainLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, terrainLayer);

        //Erstelle Kollision mit den Fallen
        trapsLayer.setCollisionByProperty({ kill: true });
        this.physics.add.collider(this.player, trapsLayer, this.player.kill);

        //Erstelle ein Trampolin für jedes Trampolin in der Trampolinebene
        const trampolinesLayer = map.getObjectLayer("trampolines");
        const trampolines = [];
        for (const trampoline of trampolinesLayer.objects) {
            const newTrampoline = new Trampoline(this, trampoline.x, trampoline.y)
            trampolines.push(newTrampoline);
        }

        //Kollision mit Trampolinen
        this.physics.add.collider(this.player, trampolines, (player, trampoline) => {
            trampoline.jump(player);
        })

        //Erstelle Sägen
        const sawLayer = map.getObjectLayer("saws");
        const saws = [];
        for (const saw of sawLayer.objects) {
            const newSaw = new Saw(this, saw.x, saw.y)
            saws.push(newSaw);
        }

        //Wenn das Level gebaut wurde, dann verbinde dich mit dem Websocket Server
        this.connectWebsocket();


    }

    update() {

    }

    //Verbindet sich mit dem Websocket Server
    connectWebsocket = () => {
        this.socket = io();

        this.socket.on('connect', () => {
            alert('You are connected to the server');

            //Schicke Spielerinfos an Server
            this.socket.emit('new_user', {
                id: this.socket.id,
                characterName: this.player.characterName,
                animation: this.player.anims.currentAnim.key,
                x: this.player.x,
                y: this.player.y,
                flipX: this.player.flipX
            });

            this.socket.on('new_user_added', (msg) => {
                //Erstelle einen neuen Remote Spieler
                const newRemotePlayer = new RemotePlayer(this, msg.x, msg.y, msg.characterName, msg.id);

                //Füge den neuen Spieler zur Liste der Remote Users hinzu
                this.remoteUsers.push(newRemotePlayer);
            })

        })
    }

}