
/*
    Todos:
    - Höherer Schwierigkeitsgrad
        - Röhren bewegen sich schneller nach links (Mit der Zeit)
        - Lücke wird immer kleiner
        - Röhren bewegen sich nach oben und unten
        - Items die helfen oder langsamer machen
    - Musik (Hintergrund und flappy)
*/

let playerImg;
let playerY = 100;
let playerX = 100;
let playerWidth = 32 * 1.2;
let playerHeight = 24 * 1.2;
let velocity = 0;
let acceleration = 0.001;
let jumpSpeed = -0.46

let gameState = "start";

let score = 0;

let backImg;

let pipeTopImg;
let pipeBottomImg;
let pipes = [];

let oldPipeTime = 0;
let pipeSpawnTime = 1000;

let musicOn = false;
let wooshSound;
let backSound;
let backSounds = [];
let grassImg;
let parallaxBackground;
let parallaxGrass;

let player;


//Lädt die Bilder und Sounds
function preload() {

    //Load images
    playerImg = loadImage('./assets/flappy-32x24.png');
    backImg = loadImage('./assets/background3.png');
    grassImg = loadImage('./assets/grass.png');
    pipeTopImg = loadImage('./assets/pipe-top.png');
    pipeBottomImg = loadImage('./assets/pipe-bottom.png');

    //Load sounds
    wooshSound = loadSound('./assets/woosh.mp3');
    backSounds[0] = loadSound('./assets/disco-funk.wav');
    backSounds[1] = loadSound('./assets/funky-drum.wav');

    backSound = backSounds[0];

    player = new Sprite(200, 200, 32, 24);
    player.scale = 1.4;
    player.addAni("default", "./assets/flappy-sheet.png", { frameSize: [32, 24], frames: 1 })
    player.addAni("fly", "./assets/flappy-sheet.png", { frameSize: [32, 24], frames: 4 })
    player.ani.frameDelay = 4;
    player.ani = "fly";

}

//Wird einmal beim Start des Spiels aufgerufen
function setup() {

    //Erstellt ein Canvas (Spielfeld) Element und fügt es dem HTML Element mit der ID "game" hinzu
    const canvas = createCanvas(600, 400);
    canvas.parent("game");

    frameRate(200);

    // parallaxBackground = new Parallax(backImg, 0, 0, 600, 400, 0.05);
    // parallaxGrass = new Parallax(grassImg, 0, 260, 600, 140, 0.35);


}

//Wird in einer Schleife aufgerufen (Game Loop)
function draw() {

    clear();

    //Setzt den Hintergrund auf eine Farbe
    background(0, 200, 255);
    // image(backImg, 0, 0, 600, 400);
    // parallaxBackground.draw();

    //frame rate anzeigen
    fill(255);
    textSize(18);
    text(parseInt(frameRate()), 560, 20);
    text(parseInt(deltaTime), 500, 20);

    text("score: " + score, 10, 20)

    if (kb.pressing("space")) {
        //Setzt die Geschwindigkeit auf -9 (Spieler springt)
        //Startet das Spiel (Zustand zu game) wenn es im Start Zustand ist
        if (gameState === "start") {
            gameState = "game";
        }

        if (gameState === "game") {
            wooshSound.play();
        }

        //Überprüft ob das Spiel zu Ende ist
        if (gameState === "end") {
            //Setzt den Spieler auf die Position 100, 100
            playerY = 100;
            gameState = "game";
        }

        velocity = jumpSpeed;
        // player.ani = "fly";
        player.ani.frameDelay = 1;
    } else {
        // player.ani = "default";
        player.ani.frameDelay = 4;
    }


    //Wird angezeigt beim Start des Spiels
    if (gameState === "start") {
        drawStartScreen();
    }

    //Wird angezeigt während des Spiels
    if (gameState === "game") {
        drawGameScreen();
    }

    //Wird angezeigt wenn das Spiel zu Ende ist
    if (gameState === "end") {
        drawEndScreen();
    }

    //Zeichnet ein Bild an die Position 100, 100 mit der Größe 32x24
    //image(playerImg, playerX, playerY, playerWidth, playerHeight);
    player.x = playerX;
    player.y = playerY;

    // parallaxGrass.draw();


}

function mouseClicked(event) {



}

//Eigene Funktionen

//Zeichnet den Start Bildschirm
function drawStartScreen() {
    fill(255);
    textSize(32);
    text("Flappy Bird", 200, 100);
    textSize(20);
    text("Click to start", 200, 140);
}

//Zeichnet den Spiel Bildschirm
function drawGameScreen() {



    //Geschwindikeit wird um die Beschleunigung erhöht
    velocity = velocity + acceleration * deltaTime;
    //Position des Spielers wird um die Geschwindigkeit erhöht
    playerY = playerY + velocity * deltaTime;

    //Überprüfe ob Spieler Boden berührt
    if (playerY > 400) {
        setGameOver();
    }

    //Erstelle neue Röhre
    if (millis() > oldPipeTime + pipeSpawnTime) {
        //Speichert letzte Zeit
        oldPipeTime = millis();

        //Erstellt eine neue Röhre
        let newPipe = {
            x: 600,
            y: 0,
            width: 40,
            height: 200,
            isScore: true
        }
        newPipe.y = random(40, 360 - newPipe.height);
        pipes.push(newPipe);

    }

    //Zeichnet die Rohre
    for (let i = 0; i < pipes.length; i++) {

        let pipe = pipes[i];

        //Bewege Röhre nach links
        pipe.x = pipe.x - 0.3 * deltaTime;

        //Zeichne obere Röhre
        image(pipeTopImg, pipe.x, 0, pipe.width, pipe.y);

        //Zeichne untere Röhre
        image(pipeBottomImg, pipe.x, pipe.y + pipe.height, pipe.width, 400 - pipe.y - pipe.height);
    }



    //Lösche Röhren die aus dem Spielfeld sind
    for (let i = 0; i < pipes.length; i++) {

        //Wenn Röhre aus dem Spielfeld, wird sie gelöscht
        if (pipes[i].x + pipes[i].width < 0) {
            pipes.splice(i, 1);
        }

        //Überprüfe ob Röhre schon gescored wurde
        if (pipes[i].isScore && pipes[i].x + pipes[i].width < playerX) {
            pipes[i].isScore = false;
            score++;
        }


        //Überprüfe ob Röhren den Spieler berühren
        if (playerX + playerWidth > pipes[i].x && playerX < pipes[i].x + pipes[i].width) {
            if (playerY + playerHeight > pipes[i].y + pipes[i].height || playerY < pipes[i].y) {
                setGameOver();
            }
        }

    }



}

//Zeichnet den End Bildschirm
function drawEndScreen() {
    fill(255);
    textSize(32);
    text("Game Over", 200, 100);
    textSize(20);
    text("Click to restart", 200, 140);
}

function setGameOver() {
    gameState = "end";
    score = 0;
    pipes = [];
}

function toggleMusic() {
    if (musicOn) {
        backSound.stop();
    } else {
        backSound.loop();
    }
    musicOn = !musicOn;
}

function setBackMusic(event) {
    let value = event.target.value;
    backSound.stop();
    backSound = backSounds[value];
    backSound.loop();
}



