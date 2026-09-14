var shape = document.getElementById("shape");
var inputs = document.getElementById("inputs");
var result = document.getElementById("result");

shape.addEventListener("change", function () {

    inputs.innerHTML = "";

    if (shape.value == "rectangle") {
        inputs.innerHTML =
            '<input type="number" id="length" placeholder="Enter length">' +
            '<input type="number" id="breadth" placeholder="Enter breadth">';
    }

    else if (shape.value == "square") {
        inputs.innerHTML =
            '<input type="number" id="side" placeholder="Enter side">';
    }

    else if (shape.value == "triangle") {
        inputs.innerHTML =
            '<input type="number" id="side1" placeholder="Enter side 1">' +
            '<input type="number" id="side2" placeholder="Enter side 2">' +
            '<input type="number" id="side3" placeholder="Enter side 3">';
    }

    else if (shape.value == "circle") {
        inputs.innerHTML =
            '<input type="number" id="radius" placeholder="Enter radius">';
    }
});


function calculatePerimeter() {

    var selectedShape = shape.value;

    if (selectedShape == "rectangle") {

        var length = Number(document.getElementById("length").value);
        var breadth = Number(document.getElementById("breadth").value);

        var perimeter = 2 * (length + breadth);

        result.innerHTML = "Perimeter = " + perimeter;
    }

    else if (selectedShape == "square") {

        var side = Number(document.getElementById("side").value);

        var perimeter = 4 * side;

        result.innerHTML = "Perimeter = " + perimeter;
    }

    else if (selectedShape == "triangle") {

        var side1 = Number(document.getElementById("side1").value);
        var side2 = Number(document.getElementById("side2").value);
        var side3 = Number(document.getElementById("side3").value);

        var perimeter = side1 + side2 + side3;

        result.innerHTML = "Perimeter = " + perimeter;
    }

    else if (selectedShape == "circle") {

        var radius = Number(document.getElementById("radius").value);

        var perimeter = 2 * 3.14 * radius;

        result.innerHTML = "Perimeter = " + perimeter;
    }

    else {
        result.innerHTML = "Please select a shape!";
    }
}