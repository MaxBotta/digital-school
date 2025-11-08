// Bedingungen/Conditionals
let weather = "rainy";
const isSunny = weather === "sunny";

if (isSunny) {
  console.log("Go running");
} else if (weather === "rainy") {
  console.log("read a book");
} else if (isSkiing()) {
  console.log("Go skiing");
} else {
  console.log("Do coding");
}

if (weather === "sunny") console.log("Sports");

function isSkiing() {
  return weather === "snowy";
}

// Date
const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

