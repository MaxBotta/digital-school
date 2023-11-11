

/**
 * To Do:
 * - Suche alle Spiele aus dem HTML Dokument
 * - Suche Suchfeld aus dem HTML Dokument
 * - Wörter/Buchstaben aus Suchfeld auslesen
 * - Keyup Event für die Suchfeld hinzufügen
 * - Durchsuche alle Spiele 
 * - Suche Titel aus dem Karten HTMl Element
 * - Filter Spiele nach Suchbegriff
 */


// Alle Spiele und Suchfeld aus dem HTML Dokument suchen
const games = document.querySelectorAll(".game");

// const searchInput = document.querySelector("#js-search-games");
// searchInput.addEventListener("keyup", () => filterBySearch(searchInput));

function filterBySearch(elmt) {
    const searchValue = elmt.value.toLowerCase();

    for(let game of games) {
        const title = game.querySelector(".card-title").innerText.toLowerCase();

        if(!title.includes(searchValue)) {
            game.style.display = "none";
        } else {
            game.style.display = "block";
        }
    }

}




function filterByTag(button, tagName) {

    if(button.classList.contains('active')) {
        button.classList.remove('active');
        return;
    } else {
        button.classList.add('active');
    }

    for(let game of games) {
        const gameTags = game.querySelectorAll(".tag");

        game.style.display = "none";
        for(let tag of gameTags) {
            console.log("🚀 ~ file: games.js:51 ~ filterByTag ~ tag:", tag)
            if(tag.innerText == tagName) {
                game.style.display = "block";
                return;
            }
        }
    }
}