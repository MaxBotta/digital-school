
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

const games = document.querySelectorAll(".game");
const searchInput = document.querySelector("#js-search-games");

searchInput.addEventListener("keyup", filterBySearch);

function filterBySearch() {
    const searchValue = searchInput.value.toLowerCase();

    //Gehe durch alle Spiele und überprüfe ob Suchwert in Titel enthalten ist
    for(let game of games) {
        const title = game.querySelector(".card-title").innerText.toLowerCase();
        if(title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    }
    
}