


//Zahlen 1 bis 10
// for (let i = 1; i <= 10; i++) {
//     let pElement = document.createElement("p");
//     pElement.innerText = i;
//     document.body.appendChild(pElement);
// }

// let obst = ["Apfel", "Birne", "Banane", "Orange"];

// for (let e of obst) {
//     let pElement = document.createElement("p");
//     pElement.innerText = e;
//     document.body.appendChild(pElement);
// }


let persons = [
    {
        name: "Tom",
        age: 26,
        hobbys: ["Surfen", "Zeichnen"]
    },
    {
        name: "Hans",
        age: 22,
        hobbys: ["Fußball", "Tischtennis"]
    },
    {
        name: "Jake",
        age: 15,
        hobbys: ["Karate", "Kung-Fu"]
    }
]

// for (let person of persons) {
//     console.log(person.name + " " + person.age + " " + person.hobbys);
// }


let sandwich1 = {
    name: "Käseschinkensandwich",
    dauer: 5,
    zutaten: ["Schinken", "Käse", "Tomaten", "Soße", "Zwiebeln", "Brot"],
    geraete: ["Sandwichmaker"],
    preis: 6
}

let sandwich2 = {
    name: "Nutellasandwich",
    dauer: 5,
    zutaten: ["Nutella", "Butter", "Brot"],
    geraete: ["Messer", "Toaster"],
    preis: 4
}

let sandwich3 = {
    name: "Leeres Sandwich",
    dauer: 1,
    zutaten: ["Brot"],
    geraete: [],
    preis: 0.5
}


let sandwiches = [ sandwich1, sandwich2, sandwich3 ];

console.log(sandwiches)




// let list = document.createElement("ul");
// document.body.appendChild(list);

// for(let person of persons) {
//     let liElement = document.createElement("li");
//     liElement.innerText = person.name + "  " + person.age;
//     list.appendChild(liElement);

//     //Erstelle Liste für Hobbys
//     let hobbyList = document.createElement("ul");
//     liElement.appendChild(hobbyList);

//     //Gehe durch alle Hobbys und füge diese als li hinzu
//     for(let hobby of person.hobbys) {
//         let liElement2 = document.createElement("li");
//         liElement2.innerText = hobby;
//         hobbyList.appendChild(liElement2);
//     }
// }

let boxSize = 10;

//Ein Raster mit Schleifen erzeugen
for (let y = 0; y < 60; y++) {
    for (let x = 0; x < 60; x++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        box.style.top = (y * boxSize) + "px";
        box.style.left = (x * boxSize) + "px";
        document.body.appendChild(box);

        //Optional
        box.onmouseenter = function () {
            box.classList.add("black");
        }
    }
}