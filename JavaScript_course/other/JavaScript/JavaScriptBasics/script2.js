//JavaScript Spickzettel
//Hier werden wir die wichtigsten JavaScript Konzepte auflisten

//Variablen
var name = 'Max';  //String
let nachname = "Botta"; //String mit doppelten Anführungsstrichen

let ganzeZahl = 4; //number //Integer (Int)
let kommaZahl = 4.21 //number //Float

let esIstWinter = true; //Boolean //bool
let esIstSommer = false;

//Konstante Variablen können nicht mehr verändert werden
const PI = 3.14;


//In der Konsole Nachricht anzeigen
console.log("Hallo Welt!");

let result = ganzeZahl * PI;
console.log(result);

//Rechenoperationen
let addieren = 4 + 4;
console.log("4 + 4 = ", addieren)

let subtrahieren = 10 - 4;

let multiplizieren = 4 * 4;

let teilen = 10 / 5;
console.log("10 / 5 = ", teilen);


//Listen //Arrays
let personen = ["Max", "Tom", "Peter"];
let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log("Wert an Index 1: ", personen[1]);

//JavaScript Object
let person = {
    name: "Hans Peter",
    alter: 25,
    hobbys: ["Fußball", "Schach"],
    istVolljährig: true
}

console.log("Name: ", person.name)
console.log("Alter: ", person.alter)
console.log("Hobbys: ", person.hobbys)


//Objects in Listen speichern
let vereinsMitglieder = [
    {
        name: "Hans Peter",
        alter: 25
    },
    {
        name: "Tom müller",
        alter: 22
    },
    {
        name: "Andre Schmidt",
        alter: 28
    }
];

console.log(vereinsMitglieder[0]);

//Schleifen

//For Schleife
console.log("-------------------------------------------")
console.log("Alle Vereinsmitglieder")

for(let i = 0; i < vereinsMitglieder.length; i++) {
    console.log("Name: ", vereinsMitglieder[i].name);
    console.log("Alter: ", vereinsMitglieder[i].alter);
}

console.log("-------------------------------------------")

//For of
console.log("-------------------------------------------")
console.log("Alle Vereinsmitglieder")

for(let person of vereinsMitglieder) {
    console.log("Name: ", person.name);
    console.log("Alter: ", person.alter);
}

console.log("-------------------------------------------")


//Hinzufügen und entfernen von Elementen in Listen
let myFruits = ["apple", "banana", "Orange", "Pineapple"];

//Hinten Hinzufügen
myFruits.push("Melon");

//Entfernen aus der Liste
myFruits.splice(2, 1);


//Funktionen
function printHalloWelt() {
    console.log("Hallo Welt!");
}

//Funktion aufrufen
printHalloWelt();


//Funktion mit Parameter
function print(text) {
    console.log(text);
}

print("Hallo das ist ein Test");

//Funktion mit zwei Parametern und Rückgabewert
function addiereZweiZahlen(zahl1, zahl2) {
    let ergebnis = zahl1 + zahl2;
    return ergebnis;
}

let meineNeueZahl = addiereZweiZahlen(4, 23);


