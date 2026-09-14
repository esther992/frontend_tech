function changeColour() {

    // Generate random values for Red, Green and Blue
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Create RGB colour
    var randomColour = "rgb(" + red + "," + green + "," + blue + ")";

    // Change the background colour
    document.body.style.backgroundColor = randomColour;
}