
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
io.on('connection', (socket) => {
    console.log('a new user is connected ' + socket.id);

    //Wenn sich ein neuer Spieler verbunden hat
    socket.on('new_user', (msg) => {
        console.log("new user", msg);

        //Füge den Spieler zur Spielerliste hinzu
        const newUser = {
            id: socket.id,
            characterName: msg.characterName,
            animation: msg.animation,
            x: msg.x,
            y: msg.y,
            flipX: msg.flipX
        };

        USERS.push(newUser);

        //Informiere alle ANDEREN Spieler darüber, dass eine neuer Spieler da ist
        socket.broadcast.emit('new_user_added', newUser);

    })
})