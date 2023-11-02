
/**
 * Filter alle Spiele auf der Website während inm Suchfeld ein Begriff eingegeben wird
 * 
 * To Dos:
 * - Suche alle Spiele aus HTML
 * - Suche das Suchfeld aus HTML
 * - Wenn in das Suchfeld etwas eingegeben wird, dann filtere alle Spiele
 * - Füge eine keyup Event Listener zum Suchfeld hinzu
 * - Wenn das Suchfeld leer ist, dann zeige alle Spiele an
 * 
 */


const games = document.getElementsByClassName("card");
const searchField = document.getElementById("js-searchField");

searchField.addEventListener("keyup", filterGames);


function filterGames() {
    const searchValue = searchField.value.toLowerCase();
    
    for(let game of games) {
        const gameTitle = game.querySelector("h5").innerText.toLowerCase();
        if(gameTitle.includes(searchValue)) {
            game.parentNode.parentNode.style.display = "block";
        } else {
            game.parentNode.parentNode.style.display = "none";
        }
    }
}