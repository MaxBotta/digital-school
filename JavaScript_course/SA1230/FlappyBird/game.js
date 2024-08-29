
/*
To Dos Flappy Bird:
- Vogel der fliegt und mit Leertaste hoch springt
- Hindernisse
- Spiel beendet wenn Hindernis berührt wird
- Punkte
- Game Over Screen
- Spiel ist beendet, wenn Vogel den Boden berührt
- Neustart Button
- Startbildschirm


- Startbildschirm mit Starttaste
- Level 
- Highscore
- Sound
- Hintergrundbild das sich bewegt (Hintegrund auswählbar)
- Verschiedene Skins beim Start auswählbar
- Zeitangabe
*/

let gameState = "start";

let player = {
  x: 100,
  y: 100,
  size: 40,
  velocity: 0,
  acceleration: 0.6
}

let obstacles = [];

//Alle zwei Sekunden wird ein neues Hindernis erstellt
setInterval(function () {
  if (gameState === "game") {
    let newObstacle = new Obstacle();
    obstacles.push(newObstacle);
  }
}, 2000);



function setup() {
  //Erstelle ein Spielfeld mit Breite 600 und Höhe 400
  let canvas = createCanvas(600, 400);
  canvas.parent('game');
}

function draw() {
  background(0, 200, 250);

  //Zeichne Spieler
  fill(255, 255, 0);
  noStroke();
  circle(player.x, player.y, player.size);

  //Startbildschirm
  if (gameState === "start") {
    fill(255);
    textSize(24);
    text("Press Space to start", 120, 200);
  }

  //Spiel läuft
  if (gameState === "game") {

    //Erhöhe die Geschwindigkeit
    player.velocity = player.velocity + player.acceleration;

    //Spieler fällt nach unten
    player.y = player.y + player.velocity;

    //Zwichne alle Hindernisse
    for (let o of obstacles) {
      o.x = o.x - o.speed;
      fill(0, 255, 0);
      rect(o.x, o.y, o.width, o.height);
    }

  }



}

function keyPressed() {
  //Wenn Leertase gedrückt wird, springt der Spieler
  if (keyCode === 32) {

    if (gameState === "start") {
      gameState = "game";
    }

    if (gameState === "game") {
      player.velocity = -10;
    }

  }

}



class Obstacle {
  constructor() {
    this.x = 600;
    this.y = random(0, 400);
    this.width = 40;
    this.height = random(50, 200);
    this.speed = 5;
  }

  move() {
    this.x = this.x - this.speed;
  }
}