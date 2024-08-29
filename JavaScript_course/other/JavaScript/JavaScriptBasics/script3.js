
//Etwas in der Konsole anzeigen
console.log("Guten Morgen");

//Variablen anlegen
let myName = 'Max'; //String (Zeichenkette)
myName = "Hans";
console.log(myName);

let myFavouriteNumber = 4; //Integer (Ganze Zahlen)
let number = 3.14; //Float (Kommazahl)
let todayItsRaining = false; //Boolean

const PI = 3.14; //Konstante variable

//Mathematische Operatoren
let number1 = 4;
let number2 = 8;
let number3 = number1 + number2; //4 + 8
let number4 = 12 + 15;
console.log(number1 + " + " + number2 + " = " + number3 );

let number5 = 3 - 2;
let number6 = 4 * 9;
let number7 = 10 / 5;


//Bedingungen (Conditionals)
if(number3 > 10) {
    console.log("Ja die Zahl ist größer als 10");
} else {
    console.log("Nein die Zahl ist kleiner oder gleich 10");
}

let obst = "Apfel";
if(obst === "Orange") {
    console.log("Obst ist Orange")
}

//Schleifen (Loops)
for(let index = 0; index < 100; index++) {
    console.log(index);
}

//Listen
let numbers = [1,2,3,4,5,6,7,8,9];
let personen = ["Tom", "Hans", "Jake", "Max"];

for(let i = 0; i < personen.length; i++) {
    console.log(personen[i]);
}

for(let person of personen) {
    console.log(person);
}


//Nur gerade Zahlen
for(let i = 10; i < 40; i += 2) {
    console.log(i);
}


// FUNKTIONEN
function schreibeHalloWelt() {
    let p = document.createElement("p");
    p.innerText = "Hallo Welt!";
    document.body.appendChild(p);
}

// for(let i = 0; i < 10; i++) {
//     schreibeHalloWelt();
// }

//schreibe einen individuellen Text
function schreibe(text) {
    let p = document.createElement("p");
    p.innerText = text;
    document.body.appendChild(p);
}

//Schreibe 10 mal einen Text mit Zahl davor
// for(let i = 0; i < 10; i++) {
//     schreibe(i + ": Das ist ein Test");
// }

//Funktionen mit Parametern
function addiereZweiZahlen(zahl1, zahl2) {
    let ergebnis = zahl1 + zahl2;
    return ergebnis;
}

let ergebnis = addiereZweiZahlen(10, 20);
// schreibe(ergebnis);

// for(let i = 0; i < 10; i++) {
//     let erg = addiereZweiZahlen(i, i + 1);
//     schreibe(erg);
// }


// LISTEN löschen/hinzufügen
let myfruits = ["apple", "banana", "orange"];

//hinzufügen hinten
myfruits.push("melon");
myfruits.push("pineapple");

//hinzufügen vorne
myfruits.unshift("kiwi");


//löschen der banana
myfruits.splice(1, 1);



