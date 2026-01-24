/**
 * TO DOS
 * Visuell
 * - Bilder über img tags bereitstellen
 * - Buttons links und rechts
 * - Punkte unter dem Bild die das aktive Bild zeigen
 *
 * Logik
 * -  Eine Variable für das aktive Bild (index)
 * -  Mit einer Schleife alle Bilder durchgehen und aktives Bild einblenden
 *    und alle anderen ausblenden
 * -  Wenn auf einen der Buttons geklickt wird aktives Bild (index) um eins
 *    erhöhen oder subtrahieren
 * -  Mit if Bedingung index überprüfen und zurücksetzen
 */

let activeIndex = 0;
const images = document.querySelectorAll("#slideshow img");
const dotsElmt = document.querySelector("#dots");

// erstelle einen dot für jedes Bild
function renderDots() {
  dotsElmt.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const newDot = document.createElement("div");
    newDot.classList.add("dot");
    newDot.classList.remove("active-dot");
    dotsElmt.appendChild(newDot);

    if (activeIndex === i) {
      newDot.classList.add("active-dot");
    }
  }
}

function updateSlideshow() {
  if (activeIndex >= images.length) {
    activeIndex = 0;
  } else if (activeIndex < 0) {
    activeIndex = images.length - 1;
  }

  for (let i = 0; i < images.length; i++) {
    if (i === activeIndex) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }

  renderDots();
}

function rightButtonClick() {
  activeIndex = activeIndex + 1;
  updateSlideshow();
}

function leftButtonClick() {
  activeIndex = activeIndex - 1;
  updateSlideshow();
}

// automatisiert
setInterval(function () {
  activeIndex = activeIndex + 1;
  updateSlideshow();
}, 3000);

updateSlideshow();
