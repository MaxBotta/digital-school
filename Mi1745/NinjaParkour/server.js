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


//socket connection
io.on('connection', (socket) => {
    console.log("a user connected " + socket.id)

    //When a new user connects
    socket.on("new_user", (msg) => {
        console.log("new user", msg)
    })

});
