
//Wir speichern unsere Positionen in einer Liste
let positions = [
    {x: 100, y: 100},
    {x: 500, y: 100},
    {x: 900, y: 100},
    {x: 100, y: 500},
    {x: 500, y: 500},
    {x: 900, y: 500},
];

let score = 0;

//Wir holen unser Maulwurfsbild aus dem HTML
let mole = document.getElementById("mole");
mole.onclick = addPoint;

let scoreElement = document.getElementById("score");

//Alle 2 Sekunden wird die Funktion newPosition aufgerufen
setInterval(newPosition, 2000);

//Diese Funktion setzt das Bild an eine zufällige Position
function newPosition() {
    let rand = randInt(0, 5);
    let newPos = positions[rand];
    mole.style.left = newPos.x + "px";
    mole.style.top = newPos.y + "px";
}

function addPoint() {
    score = score + 1;
    scoreElement.innerText = score;
    newPosition();
}


//Diese Funktion gibt eine zufällige Ganzzahl zwischen min und max zurück
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}