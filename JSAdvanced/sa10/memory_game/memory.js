import { shuffle } from "./shuffle.js";

/* Todos
    - Erstelle map mit Karten in zufälliger Anordnung
    - Wenn eine Karte geklickt wird, Bild anzeigen
    - Wenn zwei karten aufgedeckt wurden, überprüfe ob diese übereinstimmen
    - Wenn Karten übereinstimmen, bekommt Spieler einen Punkt
    - Wenn Karten nicht übereinstimmen, werden diese wieder umgedreht
    - Spiel endet wenn alle Karten aufgedeckt wurden
**/

const game = document.querySelector("#game");

// Liste aller aktuell aufgedeckten Kartennamen
let viewedCards = [];
let score = 0;

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

// Mische die Liste
const shuffledFruits = shuffle(doubleFruits);

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

            // Nehme letzten Bildnamen von der Liste
            const fruitName = shuffledFruits.pop();

            // Zeige Bild wenn auf die Karte geklickt wird
            card.addEventListener("click", () => handleClick(card, fruitName));

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

function handleClick(element, name) {
    element.classList.add("viewed");

    // Füge Element zue Liste aktuell aufgedeckter Karten hinzu
    viewedCards.push({
        name: name,
        element: element,
    });

    // Wenn weniger als 2 karten aufgedeckt sind beende Funktion
    if (viewedCards.length < 2) return;

    // Wenn es die gleichen Karten sind
    if (viewedCards[0].name === viewedCards[1].name) {
        score += 1;
    }

    // Wenn es unterschiedliche Karten sind wieder verdecken
    if (viewedCards[0].name !== viewedCards[1].name) {
        // Nach 2 Sekunden wieder resetten
        setTimeout(() => {
            // Entferne Klasse viewed von allen aufgedeckten Karten
            for (let card of viewedCards) {
                card.element.classList.remove("viewed");
            }
            viewedCards = [];
        }, 1000);
    }
}
