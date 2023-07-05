
//Etwas in der Konsole anzeigen
console.log("Hallo Welt!");

//Variablen anlegen
var name1 = "Tom";              //var ist veraltet
let myName = "Max";             //Besser let benutzen
console.log(myName);

const PI = 3.14;                //const bedeutet konstante Variable (unveränderbar)

let apple = "Apfel";            //String (Zeichenkette)
let number1 = 4;                //Integer (eine ganze Zahl)
let number2 = 4.44;             //Float (Kommazahlen)
let todayItsRaining = false;    //Boolean (wahr oder falsch)

let fruits = ["apple", "banana", "orange", "pineapple"]; //list / array
let numbers = [1,2,3,4,5,6,7,8,9];
let listInList = [[1, 2, 3], [4, 6, 4], [7, 3, 7]];

console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

//Mathematische Operatoren
let number3 = 3 + 3;
let number4 = 5 - 3;
let number5 = 5 * 10;
let number6 = 10 / 2;

let number7 = number3 + number4; //Zwei Variablen miteinander addieren
number7 = number7 + 5; //Zahl um wert erhöhen
number7 += 5; //genau das gleich wie eins oben drüber (Kurzschreibweise)

//Lebenspunkte am Anfang
let life = 100;
//Nach Angriff verliert Spieler 30 Punkte
life = life - 30;
life -= 30; //Kurzschreibweise

life = 10;


//Bedingungen
//Vergleich von Integern
let bodyHeight = 150;
if(bodyHeight >= 150) {
    console.log("Du darfst Achterbahn fahren :D");
} else {
    console.log("Du darfst keine Achterbahn fahren :/");
}

//Vergleich von unterschieldichen Datentypen kann zu Fehlern führen
let myNumber = 1; //Integer
let myNumber2 = "1"; //String

if(myNumber === parseInt(myNumber2)) {
    console.log("Die Zahlen stimmen überein!");
} else {
    console.log("Die Zahlen stimmen nicht überein!");
}

//Vergleich von Strings
let fruit = "apple";
if(fruit === "banana") {
    console.log("Hurra das ist eine Banane!");
} else {
    console.log("Oh no das ist keine Banane!");
}


let randomWords = ["Hallo", "Test", "Welt", "Blume", "Pizza"];
// console.log(randomWords[0]);

// Schleifen
for(let i = 0; i < randomWords.length; i++) {
    console.log( randomWords[i] );
}

//Nur gerade zahlen ausgeben
for(let e = 0; e < 21; e += 2) {
    console.log(e);
}

for(let f = 10; f < 32; f += 3 ) {
    console.log(f);
}

for(let e of randomWords) {
    console.log(e);
}


//Funktionen
function add(number1, number2) {
    return number1 + number2;
}

console.log( add(5, 13) );
