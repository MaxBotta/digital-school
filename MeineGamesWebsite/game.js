

let playerImg;


// Die preload() Funktion wird am Anfang aufgerufen und lädt alle Bilder, Sounds etc.
function preload() {

    // Lädt das Bild des Spielers
    playerImg = loadImage("assets/flappy3-32x24.png");

}

// Die setup() Funktion wird einmal bevor das Spiel startet aufgerufen
function setup() {

    // Erstellt ein Spielfeld mit der Größe 600x400 
    let canvas = createCanvas(600, 400);

    // Fügt das Spielfeld in das HTML Element mit der ID "game" ein
    canvas.parent("game");

}

// Die Game Loop wiederholt sich die ganze Zeit
function draw() {

    // Setzt den Hintergrund auf blau
    background(0, 200, 255);

    //Spielerbild anzeigen
    image(playerImg, 100, 100);


}