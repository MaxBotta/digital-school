// console
console.log("Hello World");
console.error("This is an error message");
console.warn("This is a warning message");

// rechnen
let a = 5;
const pi = 3.14; //Konstanten können nicht mehr geändert werden
let result = a * pi;
console.log(result);

// Bedingungen
let b = 2;
result = a * b;

if (result > 7) {
  console.log("bigger 7");
}

if (result === 10) {
  console.log("is equal");
}

// Schleifen
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Template Literal
let myName = "Max";
let myAge = 31;
let sentence = `My name is ${myName} and my age is ${myAge}`;
