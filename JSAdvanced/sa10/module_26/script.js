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

// Template Literal
let myName = "Max";
let myAge = 31;
let sentence = `My name is ${myName} and my age is ${myAge}`;

// Funktionen
function multiply(a, b) {
  return a * b;
}

let result2 = multiply(4, 5);

// Listen/Arrays
let fruits = ["banana", "apple", "orange"];
let numbers = [3, 5, 62, 4, 5, 4]

// finde apple in der Liste
fruits[0] // banana
fruits[1] // apple

// Schleifen
let total = 0
for (let i = 0; i < 10; i++) {
  total = total + total[i]
}

for(let fruit of fruits) {
  console.log(fruit)
}

total = 0
numbers.forEach(function(n) {
  total = total + n;
})
console.log(total)

// Objekte
let user = {
  username: "musteruser",
  level: 10,
  password: "nowfr#fwjkl3435"
}

console.log(`The username is: ${user.username}`)