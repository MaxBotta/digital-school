
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


//Liste aller Spieler
const USERS = [];

//Was soll passieren, wenn sich ein Spieler mit dem Server verbindet
io.on('connection', (playerSocket) => {
    console.log('a new user is connected ' + playerSocket.id);

    //Wenn User eine "new_player" nachricht sendet
    playerSocket.on('new_player', (newUser) => {

        //Überprüfe ob Spielerdaten vollständig sind
        if (newUser.id !== undefined
            && newUser.username !== undefined
            && newUser.characterType !== undefined
            && newUser.x !== undefined
            && newUser.y !== undefined
            && newUser.isAlive !== undefined
            && newUser.animation !== undefined
            && newUser.flipX !== undefined
        ) {
            //Sendet alle Spielerdaten an den neuen Spieler
            playerSocket.emit("all_players", USERS);

            //Füge neuen Spieler zur Liste aller Spieler hinzu
            USERS.push(newUser);
            console.log("Neuer Spieler hinzugefügt: ", newUser);
            console.log("Aktuelle Spieler: ", USERS);

            //Benachrichtige alle anderen Spieler, dass ein neuer Spieler hinzugefügt wurde
            playerSocket.broadcast.emit("new_player_joined", newUser);

        } else {
            console.log("Spielerdaten unvollständig", newUser);
        }

        console.log("Anzahl Spieler: " + USERS.length);
    })

    //Empfgange alle 30ms ein Update des Spielers
    playerSocket.on("update_player", (user) => {
        for(const localUser of USERS) {
            if(user.id === localUser.id) {
                console.log("Update Spieler");
                localUser.x = user.x;
                localUser.y = user.y;
                localUser.animation = user.animation;
                localUser.flipX = user.flipX;
                localUser.isAlive = user.isAlive;
                localUser.characterType = user.characterType;
            }
        }
    })

    //Sende alle 30ms ein Update aller Spieler an alle Spieler
    setInterval(() => {
        playerSocket.emit("update_players", USERS);
    }, 30);

})




