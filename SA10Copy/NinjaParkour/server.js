
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
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


//////////////////////// NEW CODE ////////////////////////
let USERS = [];

io.on('connection', (socket) => {

    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
        io.emit("remove_user", { id: String(socket.id) });

        USERS = USERS.filter(user => user.id !== String(socket.id));
    });

    socket.on('new_user', (msg) => {
        console.log("new user", msg.user.username);
        USERS.push(msg.user);
        console.log(msg.user)
        socket.emit('existing_users', { users: USERS });
        io.emit("new_user", { user: msg.user });
    });

    socket.on("update_user", (msg) => {
        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].id === msg.user.id) {
                USERS[i] = msg.user;
            }
        }
    });
});

setInterval(() => {
    io.emit("update_users", { users: USERS })
}, 40);