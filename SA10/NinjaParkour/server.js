
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


//Wenn sich ein Client/Spieler verbindet
io.on('connection', (socket) => {
    console.log('a new user is connected ' + socket.id);

    //Wenn sich ein neuer Spieler verbunden hat
    socket.on('new_user', (msg) => {
        console.log(msg);
    })
})