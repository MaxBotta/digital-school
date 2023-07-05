
//Variable um unseren Punktestand zu speichern
let score = 0;

//Wir speichern unsere HTML Elemente in Variablen
let box = document.querySelector("#click-me");
let scoreBox = document.querySelector("#score");

//Wir laden unsere Audiodateien und speichern diese in variablen
let hitSound = new Audio('punsh.wav');
let moveSound = new Audio('woosh.wav');

//Wir erstellen ein Interval, dass alle 1.5 Sekunden die Katze an eine neue Position setzt
setInterval(function() {
    setBoxToRandPos();
}, 1500);

//Wenn auf die Katze geklickt wird, erhöhen wir unseren Punktestand um 1
//Wir setzen wir die Katze an eine neue Position
//Wir spielen wir einen Sound ab
//Das Gesicht wird auf KO gesetzt und mit setTimeout 0.8 Sekunden (800 Millisekunden) später wieder auf normal gesetzt
box.onclick = function () {
    score = score + 1;
    scoreBox.innerText = score;
    setBoxToRandPos();
    
    hitSound.play();

    box.querySelector("img").src ="catface-damage.svg";
    setTimeout(() => {
        box.querySelector("img").src ="catface.svg";
    }, 800);
}

//Überprüfen ob daneben geklickt wurde
//Wenn daneben geklickt wird, verringern wir unseren Punktestand um 1
document.onclick = function (event) {
    console.log(event)
    if(event.target !== box) {
        score = score - 1;
        scoreBox.innerText = score;
    }
}

//Diese Funktion setzt die Katze an eine zufällige Position
function setBoxToRandPos() {
    moveSound.play();
    let x = randInt(100, window.innerWidth - 100);
    let y = randInt(100, window.innerHeight - 100);
    box.style.left = x + "px";
    box.style.top = y + "px";
    box.style.animation = "hide-show 0.5s";
    setTimeout(() => {
        box.style.animation = "none";
    }, 500);

}

//Diese Funktion gibt eine zufällige Ganzzahl zwischen min und max zurück
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
