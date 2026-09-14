// Starting position of the slider
var myIndex = 0;


// Call the carousel function
carousel();


function carousel() {

    // Get all images having class "mySlides"
    var slides = document.getElementsByClassName("mySlides");


    // Hide all images
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    // Move to the next image
    myIndex++;


    // If we reach the last image,
    // start again from the first image
    if (myIndex > slides.length) {
        myIndex = 1;
    }


    // Display the current image
    slides[myIndex - 1].style.display = "block";


    // Change image every 3 seconds
    setTimeout(carousel, 3000);
}