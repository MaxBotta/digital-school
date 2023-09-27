

let diashowElements = document.getElementsByClassName("diashow");

//Für jedes Element mit der Klasse diashow, legen wir eine Diashow an
for (diaElmt of diashowElements) {
    diashow(diaElmt);
}


function diashow(diaElmt) {
    const images = diaElmt.getElementsByTagName("img");
    let currentIndex = 0;

    for (let i = 0; i < images.length; i++) {
        if (i !== 0) {
            images[i].style.opacity = "0";
        }
    }
}