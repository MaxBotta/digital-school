/* Todos
    - Erstelle map mit Karten in zufälliger Anordnung
    - Wenn eine Karte geklickt wird, Bild anzeigen
    - Wenn zwei karten aufgedeckt wurden, überprüfe ob diese übereinstimmen
    - Wenn Karten übereinstimmen, bekommt Spieler einen Punkt
    - Wenn Karten nicht übereinstimmen, werden diese wieder umgedreht
    - Spiel endet wenn alle Karten aufgedeckt wurden
**/

const game = document.querySelector("#game");

// List aller Früche (list of string)
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

const doubleFruits = [];

// Füge jedes Element zweimal ein
for (let fruit of fruits) {
  doubleFruits.push(fruit);
  doubleFruits.push(fruit);
}

// Kurzschreibweise für zweimal einfügen
// const doubleFruits = [...fruits, ...fruits];

function createMap(countX, countY) {
  //Karten erstellen
  for (let x = 0; x < countX; x++) {
    const newCol = document.createElement("div");
    newCol.className = "col";
    game.appendChild(newCol);

    // Erstelle Karten in der Spalte
    for (let y = 0; y < countY; y++) {
      // Karte erstellen
      const card = document.createElement("div");
      card.classList.add("card");

      // Zeige Bild wenn auf die Karte geklickt wird
      card.addEventListener("click", function() {
        card.classList.add("viewed")
      })

      // Nehme letzten Bildnamen von der Liste
      const fruitName = doubleFruits.pop();

      // Erstelle neues Bild
      // <img  src="./images/Acorn_96x96.png"/>
      const newImg = document.createElement("img");
      newImg.src = `./images/${fruitName}_96x96.png`;

      // Karten zu Spielfeld hinzufügen
      card.appendChild(newImg);
      newCol.appendChild(card);
    }
  }
}

createMap(6, 6);
