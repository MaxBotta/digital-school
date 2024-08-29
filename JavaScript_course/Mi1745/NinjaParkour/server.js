const express = require('express');
const http = require('http');

const { Server } = require("socket.io");

const app = express();

// Create a new socket server
const server = http.createServer(app);
const io = new Server(server);

const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(port, () => {
    console.log('listening on *:' + port);
});

//Lister aller User/Spieler
const USERS = [];

//socket connection
io.on('connection', (playerSocket) => {

    //When a new user connects
    playerSocket.on("new_user", (newUser) => {

        //Sende alle Spieler an neuen Spieler
        playerSocket.emit("all_users", USERS)

        //Prüfe ob der neue Spieler alle benötigten Attribute hat
        if (newUser.id !== undefined
            && newUser.username !== undefined
            && newUser.x !== undefined
            && newUser.y !== undefined
            && newUser.animation !== undefined
            && newUser.characterName !== undefined
            && newUser.flipX !== undefined
        ) {

            //FÜge neuen Spieler zur Liste aller Spieler
            USERS.push(newUser)

            //Zeige im Serverterminal den neuen Spieler
            console.log("New user joined the game", newUser.username)

            //Benachrichtige alle anderen Spieler über den neuen Spieler
            playerSocket.broadcast.emit("new_user_joined", newUser)


        } else {
            console.log("INVALID USER!!!", newUser)
        }
    })

    //Empfange alle 30ms update von Spieler
    playerSocket.on("update_player", (user) => {
        const currentUser = USERS.find(u => u.id === user.id);
        if (currentUser) {
            currentUser.x = user.x;
            currentUser.y = user.y;
            currentUser.animation = user.animation;
            currentUser.characterName = user.characterName;
            currentUser.flipX = user.flipX;
            currentUser.username = user.username;
        }
    })

    //Wenn ein Spieler das Spiel verlässt
    playerSocket.on("disconnect", () => {
        for(const user of USERS) {
            if(user.id === playerSocket.id) {
                USERS.splice(USERS.indexOf(user), 1);
            }
        }
        playerSocket.emit("player_disconnected", playerSocket.id);
    })

    //Update players alle 30ms
    setInterval(() => {
        playerSocket.emit("update_players", USERS)
    }, 30)

});
