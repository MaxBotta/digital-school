import { Player } from "../objects/Player.js"
import { RemotePlayer } from "../objects/RemotePlayer.js"
import { Saw } from "../objects/Saw.js"

export class Play extends Phaser.Scene {
    constructor() {
        super("play");

        this.player = null;
        this.socket = null;
        this.remotePlayers = [];
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

        //Wenn sich der Spieler mit dem Server verbunden hat
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

            //Empfange alle exisiterenden Spieler vom Server
            this.socket.on("all_users", (users) => {
                console.log("All users", users);
                for (const user of users) {
                    const newRemotePlayer = new RemotePlayer({
                        scene: this,
                        x: user.x,
                        y: user.y,
                        username: user.username,
                        characterName: user.characterName,
                        id: user.id
                    });
                    this.remotePlayers.push(newRemotePlayer);
                }
            })

            //Wenn ein neuer Spieler hinzugefügt wird
            this.socket.on("new_user_joined", (newUser) => {

                console.log("Ein neuer Nutzer ist im Spiel")

                //erstelle neuen Spieler
                const newPlayer = new RemotePlayer({
                    id: newUser.id,
                    scene: this,
                    x: newUser.x,
                    y: newUser.y,
                    username: newUser.username,
                    characterName: newUser.characterName,
                });

                //Füger Spieler zur Liste hinzu
                this.remotePlayers.push(newPlayer);

            })

            //Wird alle 30ms vom Server gesendet
            this.socket.on("update_players", (users) => {
                //Für jeden user vom Server
                for (const user of users) {
                    //Schaue durch jeden user im Spiel
                    for (const localUser of this.remotePlayers) {
                        //Wenn der User bei uns im Spiel ist
                        if (user.id === localUser.id) {
                            //Setze die Position
                            localUser.setPosition(user.x, user.y);
                            //Setze die Animation
                            localUser.setAnimation(user.animation);
                            //Setze die FlipX
                            localUser.setFlipX(user.flipX);
                            //Setze characterName
                            localUser.characterName = user.characterName;
                        }
                    }
                }
            })

            //Wenn ein Spieler das SPiel verlässt
            this.socket.on("player_disconnected", (id) => {
                console.log("Spieler hat das Spiel verlassen", id)
                //durchsuche alle Spieler im Spiel
                for (const user of this.remotePlayers) {
                    //wenn user mit passender id gefunden wurde
                    if (user.id === id) {
                        //lösche Spieler aus der Spielerliste
                        this.remotePlayers.splice(this.remotePlayers.indexOf(user), 1);

                        //lösche Spieler aus der Szene
                        user.destroy();
                    }
                }
            })

            //Sende alle 30ms ein Update an den Server
            setInterval(() => {
                this.socket.emit("update_player", {
                    id: this.socket.id,
                    username: this.player.username,
                    x: this.player.x,
                    y: this.player.y,
                    animation: this.player.anims.currentAnim.key,
                    characterName: this.player.characterName,
                    flipX: this.player.flipX
                })
            }, 30);

        })

    }

    update() {

    }

}
