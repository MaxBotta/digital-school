

function getYoutubeVideos() {
    fetch('www.youtube.com').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {

        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        let pageHtml = document.createElement("html");
        pageHtml.innerHTML = html;

        var images = pageHtml.querySelectorAll('img');
        console.log(images)

        // Get the image file
        var thumbnails = doc.querySelectorAll('#content');
        console.log(thumbnails)

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

}

window.onload = () => {
    getYoutubeVideos();
}