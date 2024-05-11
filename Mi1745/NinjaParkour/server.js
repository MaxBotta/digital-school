const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(port, () => {
    console.log('listening on *:' + port);
});
