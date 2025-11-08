// Eine Liste anlegen
let names = ["Max", "Fynn", "Tom", "Hans"];

// Neuen Eintrag ans Ende einfügen
names.push("Tony");

// An den Anfang einfügen
names.unshift("Maria");

console.log(names);

// Extrahiere das letze lement
const lastElement = names.pop();

console.log(lastElement);
console.log(names);

// Füge neues Element an beliebige Stelle
names.splice(1, 0, "Jonas");
console.log(names);

// Element löschen
names.splice(0, 1);
console.log(names);

// Etwas herausfiltern
const onlyTomAndHans = names.filter(nurTomUndHans);
console.log(onlyTomAndHans);

function nurTomUndHans(item) {
  if (item === "Tom" || item === "Hans") {
    return true;
  }
  return false;
}

// Verkürzt
const onlyFynn = names.filter((item) => item === "Fynn");

// Spread Operator (...)
const newNames = ["Simon", "Teresa", ...names];

// Spread mit Objekten
const person = {
  name: "Max Mustermann",
  age: 23,
  city: "New York",
};

const personExtended = {
  job: "Artist",
  hobbies: ["Tennis", "Soccer"],
  ...person,
};

// Destructuring
const { job, hobbies } = personExtended;
console.log(job, hobbies);

// Array destructuring
let names2 = ["Fynn", "Tom", "Hans"];
const [name1, name2] = names2;

console.log(max, fynn);

// Zufällige Zahl
const randNumber = Math.floor(Math.random() * names2.length)
