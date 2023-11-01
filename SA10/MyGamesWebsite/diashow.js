
//Suche alle Elemente mit der Klasse diashow
const diashowElmts = document.getElementsByClassName("diashow");

animateDiashow(diashowElmts[0]);

//Definiere Funktion für die Animation der Diashow
function animateDiashow(diashowElmt) {
    //Suche alle Bilder aus jedem Diashow Element
    const images = diashowElmt.getElementsByTagName("img");

    //Erstelle einen Counter, der bei 0 anfängt
    let counter = 0;

    //Blende erstes Bild ein
    images[counter].classList.add("active");

    //Erhöhe Counter alle 2 sekunden um 1
    setInterval(nextImage, 2000);

    function nextImage() {
        //Blende altes Bild wieder aus
        images[counter].classList.remove("active");

        //Erhöhe den counter um 1
        counter++;

        //Wenn Counter gleich maximale Anzahl von Bildern, dann setze Counter auf 0
        if(counter === images.length) {
            counter = 0;
        }

        //Blende nächstes Bild ein
        images[counter].classList.add("active");
    }

}
