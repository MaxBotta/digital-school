import { RemotePlayer } from "./objects/RemotePlayer.js";

export class SocketHandler {
    constructor(player, scene) {
        this.users = [];
        this.socket = null;
        this.player = player;
        this.scene = scene;
    }

    connect = () => {
        return new Promise((resolve, reject) => {

            this.socket = io();

            this.socket.on("connect", () => {

                const id = String(this.socket.id);
                this.player.setId(id);
                console.log("player", this.player)

                console.log("Connected to server, ID: " + id);

                this.socket.on("existing_users", (msg) => {
                    for (let u of msg.users) {
                        if (u.id !== this.player.id) {
                            console.log(`Existing user "${u.username}" has joined the game`);
                            const newUser = new RemotePlayer(this.scene, u.x, u.y, u.characterName, u.username, u.id);
                            this.users.push(newUser);
                        }
                    }
                })

                this.socket.on("new_user", (msg) => {
                    let u = msg.user;
                    console.log(u)
                    if (u.id === this.player.id) return;
                    const newUser = new RemotePlayer(this.scene, u.x, u.y, u.characterName, u.username, u.id);
                    this.users.push(newUser);
                    console.log(`New user "${newUser.username}" has joined the game`);
                    console.log(newUser)

                })

                this.socket.on("remove_user", (msg) => {
                    this.users = this.users.filter(user => user.id !== msg.id);
                    console.log(`User has left the game`);

                });

                this.socket.on("update_users", (msg) => {
                    for (let u of msg.users) {
                        for (let user of this.users) {
                            if (user.id === u.id) {
                                user.x = u.x;
                                user.y = u.y;
                                user.anims.play(u.animation, true);
                                user.flipX = u.flipX;
                            }
                        }
                    }
                });

                resolve();

            });

        });

    }

    enterRoom = () => {

        this.socket.emit("new_user", {
            user: {
                username: this.player.username,
                characterName: this.player.characterName,
                id: this.player.id,
                animation: this.player.anims.currentAnim.key,
                flipX: this.player.flipX,
                x: this.player.x,
                y: this.player.y,
            }
        });

        //update interval
        setInterval(() => {
            this.updatePlayer();
        }, 40);

    }

    updatePlayer = () => {
        this.socket.emit("update_user", {
            user: {
                username: this.player.username,
                characterName: this.player.characterName,
                animation: this.player.anims.currentAnim.key,
                id: this.player.id,
                flipX: this.player.flipX,
                x: this.player.x,
                y: this.player.y,
            }

        })
    }
}