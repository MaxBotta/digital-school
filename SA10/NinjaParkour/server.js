
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const port = 4000;

const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(port, () => {
    console.log('listening on *:' + port);
});


//Liste aller Spieler
const USERS = [];

//Wenn sich ein Client/Spieler verbindet
io.on('connection', (playerSocket) => {
    console.log('a new user is connected ' + playerSocket.id);

    //Wenn sich ein neuer Spieler verbunden hat
    playerSocket.on('new_user', (msg) => {
        console.log("new user", msg);

        //Füge den Spieler zur Spielerliste hinzu
        const newUser = {
            id: playerSocket.id,
            characterName: msg.characterName,
            animation: msg.animation,
            x: msg.x,
            y: msg.y,
            flipX: msg.flipX
        };

        //Füge den neuen Spieler zur Liste der Spieler hinzu,
        //falls dieser Spieler noch nicht existiert
        if (!USERS.find(u => u.id === newUser.id)) {
            USERS.push(newUser);
        }

        //Informiere den neuen Spieler über die besteheden Spieler
        playerSocket.emit('all_users', USERS);

        //Informiere alle ANDEREN Spieler darüber, dass ein neuer Spieler da ist
        playerSocket.broadcast.emit('new_user_added', newUser);

    })

    //Wenn wir über die neuen Spielerinformationen informiert werden
    playerSocket.on('update_user', (user) => {
        //Jeden Remote Spieler updaten
        for (const u of USERS) {
            if (u.id === user.id) {
                u.x = user.x;
                u.y = user.y;
                u.animation = user.animation;
                u.flipX = user.flipX;
                u.characterName = user.characterName;
            }
        }
    })
})

//Sendet alle 30ms die Spielerinformationen an alle Clients/Spieler
setInterval(() => {
    io.emit('update_users', USERS);
}, 30)