
/**
 * To Dos:
 * - Liste aller Game Thumbnails - getElementsByClassName
 * - Text aus der Suchleiste auslesen
 * - Durchsuche alle Game Thumbnail Titel und schaue ob Suchtext mit Titel übereinstimmt
 * - Blende alle Elmente aus, die nicht übereinstimmen mit dem Suchtext
 */



const searchInput = document.getElementById("search-games");


searchInput.addEventListener("keyup", filterGames);

function filterGames() {
    const searchValue = searchInput.value;
    console.log(searchValue);
}
