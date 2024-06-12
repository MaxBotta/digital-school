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
        //Prüfe ob der neue Spieler alle benötigten Attribute hat
        if (newUser.id && newUser.username && newUser.x && newUser.y && newUser.animation) {
            //FÜge neuen Spieler zur Liste aller Spieler
            USERS.push(newUser)

            //Zeige im Serverterminal den neuen Spieler
            console.log("new user added", newUser.username)

            //Benachrichtige alle anderen Spieler über den neuen Spieler
            playerSocket.broadcast.emit("new_user_joined", newUser)
            // playerSocket.broadcast.emit("update_users", USERS)


        } else {
            console.log("INVALID USER!!!", newUser)
        }

    })

});
