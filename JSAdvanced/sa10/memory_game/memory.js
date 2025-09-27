
/* Todos
    - Erstelle map mit Karten in zufälliger Anordnung
    - Wenn eine Karte geklickt wird, Bild anzeigen
    - Wenn zwei karten aufgedeckt wurden, überprüfe ob diese übereinstimmen
    - Wenn Karten übereinstimmen, bekommt Spieler einen Punkt
    - Wenn Karten nicht übereinstimmen, werden diese wieder umgedreht
    - Spiel endet wenn alle Karten aufgedeckt wurden
**/

const game = document.querySelector('#game')

function createMap(countX, countY) {

    //Karten erstellen
    for(let x = 0; x < countX; x++) {
        const newCol = document.createElement('div')
        newCol.className = "col"
        game.appendChild(newCol)
        
        for(let y = 0; y < countY; y++) {
            const card = document.createElement('div')
            card.className = "card"
            // card.innerText = `x: ${x} y: ${y}`
            const newImg = document.createElement('img')
            newImg.src = './images/Acorn_96x96.png'
            card.appendChild(newImg)
            newCol.appendChild(card)
        }
    }
}

createMap(6, 6);

