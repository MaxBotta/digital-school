// Functions

print("Hallo Welt");
print("Hallo Welt 2", "red");
print("Hallo Welt 3", "blue", 800);

const n1 = 5;
const n2 = 4;
const addedNumbers = add(n1, n2);
print(n1 + " + " + n2 + " = " + addedNumbers);

const nNumbers = addN([3, 6, 45, 67, 4]);
print(nNumbers);

function print(text, color = "black", fontWeight = 400) {
  const p = document.createElement("p");
  p.innerText = text;
  p.style.color = color;
  p.style.fontWeight = fontWeight;
  document.body.appendChild(p);
}

function add(a, b) {
  return a + b;
}

function addN(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

// Objects
const person = {
  firstname: "Max",
  lastname: "Mustermann",
  age: 20,
  city: "Berlin",
  get fullname() {
    return person.firstname + " " + person.lastname;
  },
  set setFirstname(newName) {
    this.firstname = newName;
  },
  get getFirstname() {
    return this.firstname;
  },
};

person.setFirstname = "Tom";

print(person.fullname);

// Function Constructor
function Player(name, strength) {
  this.name = name;
  this.strength = strength;
}

class Player {
  constructor(name, strength) {
    this.name = name;
    this.strength = strength;
  }

  get name() {
    return this.name;
  }

  get strength() {
    return this.strength;
  }
}

const player1 = new Player("Leo", "Mustermann");
const player2 = new Player("Leo", "Mustermann");
const player3 = new Player("Leo", "Mustermann");
print(player1.name);
