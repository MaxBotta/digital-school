/* Todos
    - Erstelle map mit Karten in zufälliger Anordnung
    - Wenn eine Karte geklickt wird, Bild anzeigen
    - Wenn zwei karten aufgedeckt wurden, überprüfe ob diese übereinstimmen
    - Wenn Karten übereinstimmen, bekommt Spieler einen Punkt
    - Wenn Karten nicht übereinstimmen, werden diese wieder umgedreht
    - Spiel endet wenn alle Karten aufgedeckt wurden
**/

const game = document.querySelector("#game");

const fruits = [
  "Acorn",
  "Apple",
  "Apple_Green",
  "Banana",
  "Cherry",
  "Egg",
  "Eggs",
  "Green_Grape",
  "Hearth",
  "Hearth_Pink",
  "Leaf_green",
  "Leaf_Yellow",
  "Lemon",
  "Lime",
  "Orange",
  "Peanut",
  "Peer",
  "PineApple",
  "Plum",
  "Potato",
  "Red_Grape",
  "StrawBerry",
  "Walnut",
  "Watermelon",
];

const doubleFruits = [...fruits, ...fruits];

function createMap(countX, countY) {
  //Karten erstellen
  for (let x = 0; x < countX; x++) {
    const newCol = document.createElement("div");
    newCol.className = "col";
    game.appendChild(newCol);

    // Erstelle Karten in der Spalte
    for (let y = 0; y < countY; y++) {
      const card = document.createElement("div");
      card.className = "card";
      // card.innerText = `x: ${x} y: ${y}`

      //Erstelle Bild
      const source = doubleFruits.pop();
      const newImg = document.createElement("img");
      newImg.src = `./images/${source}_96x96.png`;
      card.appendChild(newImg);
      newCol.appendChild(card);
    }
  }
}

createMap(6, 6);
