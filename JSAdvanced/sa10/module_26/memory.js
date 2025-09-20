/* Todos
    - Erstelle map mit Karten in zufälliger Anordnung
    - Wenn eine Karte geklickt wird, Bild anzeigen
    - Wenn zwei karten aufgedeckt wurden, überprüfe ob diese übereinstimmen
    - Wenn Karten übereinstimmen, bekommt Spieler einen Punkt
    - Wenn Karten nicht übereinstimmen, werden diese wieder umgedreht
    - Spiel endet wenn alle Karten aufgedeckt wurden
**/

const game = document.querySelector("#game");
const cards = [
  { name: "Acorn", src: "./images/Acorn_96x96.png" },
  { name: "Apple", src: "./images/Apple_96x96.png" },
  { name: "Banana", src: "./images/Banana_96x96.png" },
  { name: "Cherry", src: "./images/Cherry_96x96.png" },
  { name: "Green_Grape", src: "./images/Green_Grape_96x96.png" },
  { name: "Lemon", src: "./images/Lemon_96x96.png" },
  { name: "Waterlemon", src: "./images/Watermelon_96x96.png" },
  { name: "Orange", src: "./images/Orange_96x96.png" },
  { name: "Lime", src: "./images/Lime_96x96.png" },
  { name: "Peer", src: "./images/Peer_96x96.png" },
  { name: "Apple_Green", src: "./images/Apple_Green_96x96.png" },
  { name: "Leaf_Yellow", src: "./images/Leaf_Yellow_96x96.png" },
  { name: "Peanut", src: "./images/Peanut_96x96.png" },
  { name: "Plum", src: "./images/Plum_96x96.png" },
  { name: "Potato", src: "./images/Potato_96x96.png" },
  { name: "Red_Grape", src: "./images/Red_Grape_96x96.png" },
  { name: "StrawBerry", src: "./images/StrawBerry_96x96.png" },
  { name: "Walnut", src: "./images/Walnut_96x96.png" },
];

function getMixedListOfCards(countX, countY) {
  // Ermitteln wie viele Karten benötigt werden
  const neededCards = (countX * countY) / 2;

  // Füge jede Karte zweimal in eine Liste
  let newCards = [];
  for (let i = 0; i < neededCards; i++) {
    newCards.push(cards[i]);
    newCards.push(cards[i]);
  }

  // Mische die Karten
  newCards.sort(() => Math.random() - 0.5);

  return newCards;
}

function createMap(countX, countY) {
  // Eine Liste mit allen benötigten Bildern (einmal vorkommend)
  const filledCards = getMixedListOfCards(countX, countY);

  //Karten erstellen
  for (let x = 0; x < countX; x++) {
    const newCol = document.createElement("div");
    newCol.className = "col";
    game.appendChild(newCol);

    for (let y = 0; y < countY; y++) {
      const card = document.createElement("div");
      card.className = "card";
      // card.innerText = `x: ${x} y: ${y}`

      card.addEventListener("click", () => {
        card.classList.add("flipped");
      });

      const newImg = document.createElement("img");
      newImg.src = filledCards.pop().src;
      card.appendChild(newImg);
      newCol.appendChild(card);
    }
  }
}

createMap(6, 6);
