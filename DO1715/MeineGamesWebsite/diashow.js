
/**
 * To Dos:
 * - Suche alle Elemente mit der Klasse diashow aus HTML - document.getElementsByClassName()
 * - Starte Diashow für jedes Element mit der Klasse Diashow
 * - Suche alle Bilder aus jedem diashow Element
 * - Blende alle Bilder aus, außer das erste
 * - Counter anlegen um festzulegen, welches Bild angezeigt wird
 * - Counter alle 2 Sekunden erhöhen
 * - Wenn Counter gleich Anzahl der Bilder, dann Counter wieder auf 0 setzen
 * - Steuerung: Button links und Button rechts
 * - Wenn button geklickt wird, dann counter erhöhen oder verringern
 */

//Suche alle Elemente mit Klasse "diashow"
const diashows = document.getElementsByClassName("diashow");

//Starte Diashow für erstes Element
animateDiashow(diashows[0])


function animateDiashow(diashowElmt) {
    //Suche alle img tags im diashow element
    const images = diashowElmt.getElementsByTagName("img");
    const buttons = diashowElmt.getElementsByTagName("button");
    const dots = diashowElmt.getElementsByClassName("dots")[0];

    //Erstelle ein Punkt für jedes Bild
    for(let img of images) {
        const newDot = document.createElement("div");
        newDot.className = "dot";
        dots.appendChild(newDot)
    }

    //Klickevents den Buttons zuweisen
    //linker Button
    buttons[0].onclick = previousImage;
    buttons[1].onclick = nextImage;

    
    //Das erste Bild einblenden
    images[0].style.opacity = 1;

    //Counter anlegen
    let counter = 0;

    //Alle 2 sekunden counter erhöhen
    //setInterval(nextImage, 2000);

    function nextImage() {
        //Blende vorheriges Bild aus
        images[counter].style.opacity = 0;

        //Erhöhe counter um 1
        counter++;

        //Wenn counter gleich Anzahl der Bilder erreicht hat, setze counter auf 0
        if(counter === images.length) {
            counter = 0;
        }

        //Blende neues Bild ein
        images[counter].style.opacity = 1;
    }

    function previousImage() {
        //Blende vorheriges Bild aus
        images[counter].style.opacity = 0;

        //Erhöhe counter um 1
        counter--;

        //Wenn counter gleich Anzahl der Bilder erreicht hat, setze counter auf 0
        if(counter === -1) {
            counter = images.length - 1;
        }

        //Blende neues Bild ein
        images[counter].style.opacity = 1;
    }

}








