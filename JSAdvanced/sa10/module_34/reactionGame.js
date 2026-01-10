/**
 * 0. Starte Timer auf eine Minute
 * 1. Erzeuge Kreis an zufälliger Position
 * 2. Wenn Nutzer auf den Kreis klickt, erzeug einen neuen Kreis eine Sekunde später
 * 3. Wenn Kreis getrofeen einen Punkt geben
 * 4. Wenn der Timer abgelaufern ist, beende das Spiel
 */

let score = 0;
let timer = 0;
let isStarted = false;

const circle = document.createElement("div");
circle.classList.add("circle");
document.body.appendChild(circle);

const scoreElmt = document.getElementById("score");

function updateScore() {
  score += 1;
  scoreElmt.innerHTML = score;
}

function newPosition() {
  updateScore();
  circle.style.display = "none";

  setTimeout(function () {
    circle.style.display = "block";

    const x = Math.floor(Math.random() * (window.innerWidth - 80));
    const y = Math.floor(Math.random() * (window.innerHeight - 80));

    circle.style.left = x + "px";
    circle.style.top = y + "px";
  }, 500);
}

circle.onclick = function() {
  if(!isStarted) {
    isStarted = true
  }
}
