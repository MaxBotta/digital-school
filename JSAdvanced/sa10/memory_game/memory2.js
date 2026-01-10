const main = document.getElementById("game");

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

const apple = fruits[1];

// liste.push('test')
// Jeden Fruchtnamen zweimal in eine neue Liste einfügen
const doubleFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//   doubleFruits.push(fruits[i]);
//   doubleFruits.push(fruits[i]);
// }

for (let fruit of fruits) {
  doubleFruits.push(fruit);
  doubleFruits.push(fruit);
}

// erstelle ein Gitter mit 6x6 Quadraten mit hilfe einer verschachtelten Schleife
function createMap(countX, countY, size, padding) {
  main.style.width = countX * (size + padding) + padding + "px";
  main.style.height = countY * (size + padding) + padding + "px";

  for (let x = 0; x < countX; x++) {
    for (let y = 0; y < countY; y++) {
      const div = document.createElement("div");
      div.classList.add("card");
      div.style.position = "absolute";
      div.style.top = `${y * (size + padding) + padding}px`;
      div.style.left = `${x * (size + padding) + padding}px`;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = "rgba(240,240,240, 1)";

      div.addEventListener("click", () => handleCardClick(div));

      const image = document.createElement("img");
      image.src = "./images/Acorn_96x96.png";
      div.appendChild(image);

      main.appendChild(div);
    }
  }
}

function handleCardClick(element) {
  element.style.backgroundColor = "blue";
}

createMap(6, 6, 100, 10);
