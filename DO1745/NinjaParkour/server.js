
const express = require('express');
const http = require('http');

//socket io
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app)
const port = 4000;

const io = new Server(server);

//Welcher Ordner soll für die statischen Dateien genutzt werden (wo liegt die website)
app.use(express.static('public'));

//Was wird angezeigt, wenn ein Nutzer auf die Website geht
app.get('/', (req, res) => {
    res.sendFile('index.html');
})

//Auf welchem Port soll der Server laufen
server.listen(port, () => {
    console.log('listening on *:' + port);
});

//Erstelle eine Websocket Vebrindung und lege fest, was passier, wenn sich ein neuer Nutzer verbindet
io.on('connection', (socket) => {
    console.log('a new user is connected ' + socket.id);
})




