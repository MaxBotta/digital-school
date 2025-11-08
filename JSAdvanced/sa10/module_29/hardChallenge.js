const names = ["Max", "Fynn", "Thomas", "Simon"];

const randNumber = Math.floor(Math.random() * names.length + 2)
const chosenString = names[randNumber]

if(chosenString === undefined) {
    throw new Error("Wrong index")
}

console.log(chosenString)

