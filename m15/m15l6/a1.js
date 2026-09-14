// Dice faces from 1 to 6
var dices = [
    '&#9856;',
    '&#9857;',
    '&#9858;',
    '&#9859;',
    '&#9860;',
    '&#9861;'
];

var stopped = true;
var dice;
var t;

// Change the dice randomly
function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

// Start or stop the dice
function stopStart() {

    if (stopped) {

        stopped = false;

        // Change dice every 0.1 seconds
        t = setInterval(change, 100);

    } else {

        // Stop changing the dice
        clearInterval(t);

        stopped = true;
    }
}

// Run when the page loads
window.onload = function () {

    dice = document.getElementById("dice");

    // Start rolling automatically
    stopStart();
};