// Schleifen

// classic for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = ["username1", "username2", "username3"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i], i);
}

for (let name of names) {
  console.log(name, names.indexOf(name));
}

names.forEach(function (item, index) {
  console.log(item, index);
});

// Durch Objekte iterieren
const player = {
  username: "username",
  life: 100,
  attack: 60,
  position: {
    x: 0,
    y: 0,
  },
};

for (let key in player) {
  console.log(key, player[key]);
}

// while
let gameOver = false;

// Beispiel game loop
while (!gameOver) {
  player.position.x += 1;
  player.position.y += 1;
}

// Elemente in Liste auf Website anzeigen
