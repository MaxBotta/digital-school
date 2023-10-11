

//Get all diashow elements
const allDiashows = document.getElementsByClassName("diashow");

//start diashow
for(let diashow of allDiashows) {
    animateDiashow(diashow);
}


function animateDiashow(diaElmt) {
    //get all images
    const diaImages = diaElmt.getElementsByTagName("img");

    //set counter
    let counter = 0;

    //show first image
    diaImages[0].style.opacity = 1;

    //Set new image every 2 seconds
    setInterval(function () {

        //set last image opacity to 0
        diaImages[counter].style.opacity = 0; 

        //increase counter by 1 to show next image
        counter++;

        //if counter reached length of images set it to 0 again
        if(counter === diaImages.length) {
            counter = 0;
        }

        //show next image
        diaImages[counter].style.opacity = 1;


    }, 2000);


}