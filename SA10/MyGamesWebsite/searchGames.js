

/**
 * To Do:
 * - Alles Karten/Spiele suchen
 * - Wörter/Buchstaben aus Suchleiste auslesen
 * - Spiele nach begriffen filtern / ein und ausblenden 
 * - Immer wenn in der Suchleiste getippt wird, wieder Spiele filtern / Keyup Event für die Suchleiste anlegen 
 */

const games = document.getElementsByClassName("game");
const searchInput = document.getElementById("js-search-games");

searchInput.addEventListener("keyup", filterGames);


function filterGames() {
    const searchValue = searchInput.value.toLowerCase();
    
    for(let g of games) {
        const title = g.querySelector("h5").innerText.toLowerCase();
        if(title.includes(searchValue)) {
            g.style.display = "block";
        } else {
            g.style.display = "none";
        }
    }
}