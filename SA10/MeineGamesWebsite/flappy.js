
/*
 To Do:
- Spieler
- Hindernisse
- Spieler fällt nach unten
- GameOver bei Kollision mit Hinderniss oder Boden
- Punkte
- Springen bei Mausklick
- Startscreen, Spielscreen und Game Over Screen

Optional:
- Verschiedene Skins
- Hintergrund
- Sound
- Highscore
- Schwierigkeitsgrad
- Pause
- Items

*/


let playerImage;
let playerY = 100;
let playerX = 100;
let playerWidth = 32 * 1.2;
let playerHeight = 24 * 1.2;

let velocity = 0;
let acceleration = 0.8;

let gameState = "start";

let backgroundImage;

let pipeGaps = [];
let oldTimePipes = 0;
let timeBetweenPipes = 1500;

let pipeTopImg;
let pipeBottomImg;
let grassImg;
let grassX = 0;

let player;


//Lädt alle Bilder, Sounds, etc. vor dem Spiel
function preload() {
    playerImage = loadImage("./assets/flappy2-32x24.png");
    backgroundImage = loadImage("./assets/background.png");

    //Alle die Bilder der Röhren
    pipeTopImg = loadImage("./assets/pipe-top.png");
    pipeBottomImg = loadImage("./assets/pipe-bottom.png");

    grassImg = loadImage("./assets/grass.png");


    player = new Sprite(200, 200, 32, 24);
    player.scale = 1.4;
    player.addAni("fly", "./assets/flappy-sheet.png", { frameSize: [32, 24], frames: 4 });
    player.ani.frameDelay = 3;

}

//Alles was vor dem Spiel passiert
function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent("game");
}


//Wiederholt sich die ganze Zeit (Game Loop)
function draw() {
    clear()
    //Zeichne den Hintergrund
    image(backgroundImage, 0, 0, 600, 400)

    //Wenn das Spiel im Start Zustand ist, dann zeichne den Start Screen
    if (gameState === "start") {
        drawStartScreen();
    }

    //Wenn das Spiel im Game Zustand ist, dann zeichne den Game Screen
    if (gameState === "game") {
        drawGameScreen();
    }

    //Wenn das Spiel im Game Over Zustand ist, dann zeichne den Game Over Screen
    if (gameState === "gameOver") {
        drawGameOverScreen();
    }

    //Zeichne den Spieler
    //image(playerImage, playerX, playerY, playerWidth, playerHeight);
    player.x = playerX;
    player.y = playerY;
}

function mouseClicked() {
    //Wenn das Spiel im Start Zustand ist, dann wechsel in den Game Zustand
    if (gameState === "start") {
        gameState = "game";
    }

    if(gameState === "gameOver") {
        gameState = "game";
    }

    //Setze die Geschwindigkeit negativ, damit der Spieler nach oben springt
    velocity = -14;
}


// Custom functions

function drawStartScreen() {
    fill(255);
    textSize(40);
    text("Flappy Bird", 180, 100);
    textSize(20);
    text("Klicke um zu starten", 180, 150);
}

function drawGameScreen() {
    //Berechne die Geschwindigkeit
    velocity = velocity + acceleration;

    //Berechne die Position
    playerY = playerY + velocity;

    //Wenn der Spieler den Boden berührt, dann setze die Geschwindigkeit auf 0
    if (playerY > 400) { 
        velocity = 0;
        playerY = 100;
        gameState = "gameOver";
    }

    //Erzeuge eine neue Lücke alle 2 Sekunden
    if(millis() > oldTimePipes + timeBetweenPipes) {

        //Speicherre alte zeit in Variable ab
        oldTimePipes = millis();

        //Erstelle neue Lücke
        let newPipeGap = {
            x: 600,
            y: 0,
            width: 40,
            height: 160
        }
        newPipeGap.y = random(40, 360 - newPipeGap.height);

        //Füge neue Lücke zur Lücken Liste hinzu
        pipeGaps.push(newPipeGap);

    }

    //zeichne alle Lücken auf das Spielfeld
    for(let i = 0; i < pipeGaps.length; i++) {
        let gap = pipeGaps[i];
        gap.x = gap.x - 6;

        //zeichne Lücke
        // stroke(255, 0, 0)
        // rect(gap.x, gap.y, gap.width, gap.height);

        //Zeichne die obere Röhren
        image(pipeTopImg, gap.x, 0, 40, gap.y);

        //Zeichne untere Röhre
        image(pipeBottomImg, gap.x, gap.y + gap.height, 40, 400 - gap.y - gap.height);
    }

    //Lösche alle Röhren, die nciht mehr auf dem Spielfeld sind
    //Prüfe ob Spieler eine Röhre berührt
    for(let i = 0; i < pipeGaps.length; i++) {
        let gap = pipeGaps[i];

        //lösche Röhren wieder
        if(gap.x + gap.width < 0) {
            pipeGaps.splice(i, 1);
        }

        //Collision detection mit Spieler
        if(playerX + playerWidth > gap.x && playerX < gap.x + gap.width) {
            if(playerY < gap.y || playerY + playerHeight > gap.y + gap.height) {
                gameState = "gameOver";
                pipeGaps = [];
            }
        }

    }

    grassX = grassX - 8;
    image(grassImg, grassX, 320, 600, 80)


}

function drawGameOverScreen() {
    fill(255);
    textSize(40);
    text("Game Over", 180, 100);
    textSize(20);
    text("Klicke um neu zu starten", 180, 150);
    text("Punkte: 0", 180, 200);
}