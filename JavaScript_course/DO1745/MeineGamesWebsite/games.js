
/**
 * Filter alle Spiele auf der Website während inm Suchfeld ein Begriff eingegeben wird
 * 
 * To Dos:
 * - Suche alle Spiele aus HTML
 * - Suche das Suchfeld aus HTML
 * - Keyup Event hinzufügen, Wenn in das Suchfeld etwas eingegeben wird, dann filtere alle Spiele
 * - Wenn das Suchfeld leer ist, dann zeige alle Spiele an
 * 
 */

const gameElmts = document.querySelectorAll(".game");
const searchInput = document.querySelector("#js-search-games");

searchInput.addEventListener("keyup", filterBySearch);

function filterBySearch() {
    const searchValue = searchInput.value.toLowerCase();

    //Gehe durch alle Spiele und überprüfe ob Suchwert in Titel enthalten ist
    for (let game of gameElmts) {
        const title = game.querySelector(".card-title").innerText.toLowerCase();
        if (title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    }

}


// Erstelle alle Karten

function createGameCard(title, url, imgPath) {
    return `
        <div class="col-md-4 game">
            <a href="${url}">
                <div class="card my-3">
                    <img src="${imgPath}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                    </div>
                </div>
            </a>
        </div>
        `;
}

// const games = [
//     {
//         "title": "Minecraft",
//         "url": "https://www.minecraft.net/de-de",
//         "imgPath": "./images/minecraft2.png"
//     },
//     {
//         "title": "Minecraft",
//         "url": "https://www.minecraft.net/de-de",
//         "imgPath": "./images/minecraft2.png"
//     },
//     {
//         "title": "Minecraft",
//         "url": "https://www.minecraft.net/de-de",
//         "imgPath": "./images/minecraft2.png"
//     }
// ]

//Frage Games json von server ab
fetch('./games.json')
    .then((response) => response.json())
    .then((json) => {
        const games = json.games;
        const gamesContainer = document.querySelector("#js-games-container");
        console.log("🚀 ~ file: games.js:75 ~ .then ~ gamesContainer:", gamesContainer)

        for(let game of games) {
            const gameString = createGameCard(game.title, game.url, game.imgPath);
            gamesContainer.innerHTML += gameString;
        }
    });


//Test mit Wetterdaten
fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    });