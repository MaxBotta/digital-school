
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
searchInput.addEventListener("keyup", filterGames);

function filterGames() {
    const searchValue = searchInput.value.toLowerCase();

    //Durchsuche jedes Game und gleiche den Titel mit dem Suchwert ab
    for(let game of games) {
        const title = game.querySelector("h5").innerText.toLowerCase()
        
        if(title.includes(searchValue) === false) {
            game.style.display = "none";
        } else {
            game.style.display = "block";
        }
    }

}