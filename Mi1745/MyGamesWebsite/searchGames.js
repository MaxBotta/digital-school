
/**
 * To Dos:
 * - Liste aller Game Thumbnails - getElementsByClassName
 * - Wenn Nutzer in der Suchleiste etwas eintippt, starte gleichzeitig suche
 * - Text aus der Suchleiste auslesen
 * - Durchsuche alle Titel und schaue ob Suchtext mit Titel übereinstimmt
 * - Blende alle Elmente aus, die nicht übereinstimmen mit dem Suchtext
 */

const games = document.querySelectorAll(".game");
const searchInput = document.querySelector("#js-search-games");


//Füge ein keyup Event hinzu
//Wird immer ausgelöst, wenn Nutzer tippt
searchInput.addEventListener("keyup", filterBySearch);

function filterBySearch() {
    const searchValue = searchInput.value.toLowerCase();

    //Durchsuche jedes Game und gleiche den Titel mit dem Suchwert ab
    for (let game of games) {
        const title = game.querySelector("h5").innerText.toLowerCase()

        if (title.includes(searchValue) === false) {
            game.style.display = "none";
        } else {
            game.style.display = "block";
        }
    }
    
}

function filterByTag(tagname) {
    console.log("🚀 ~ file: searchGames.js:36 ~ filterByTag ~ tagname:", tagname)
    for (let game of games) {
        const tags = game.querySelectorAll(".tag");
        console.log("🚀 ~ file: searchGames.js:39 ~ filterByTag ~ tags:", tags)

        for(let tag of tags) {
            if (tag.innerText == tagname) {
                game.style.display = "none";
            } else {
                game.style.display = "block";
            }
        }
    }
}