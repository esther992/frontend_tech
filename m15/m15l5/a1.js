window.onload = function () {

    var seconds = 0;
    var milliseconds = 0;

    var appendSeconds = document.getElementById("seconds");
    var appendMilliseconds = document.getElementById("milliseconds");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var interval;


    // START button
    buttonStart.onclick = function () {

        clearInterval(interval);

        interval = setInterval(startTimer, 10);

    };


    // STOP button
    buttonStop.onclick = function () {

        clearInterval(interval);

    };


    // RESET button
    buttonReset.onclick = function () {

        clearInterval(interval);

        milliseconds = 0;
        seconds = 0;

        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";

    };


    // Timer function
    function startTimer() {

        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            appendMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {

            seconds++;

            appendSeconds.innerHTML = seconds;

            milliseconds = 0;

            appendMilliseconds.innerHTML = "00";
        }

        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }

    }

};