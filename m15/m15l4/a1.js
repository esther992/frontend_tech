function showTime() {

    // Create a Date object
    var date = new Date();

    // Get hours, minutes and seconds
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    // Set AM as default
    var session = "AM";


    // Convert 24-hour format to 12-hour format
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }


    // Add 0 if the number is less than 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    // Combine the time
    var time = h + ":" + m + ":" + s + " " + session;


    // Display the time
    document.getElementById("MyClockDisplay").innerText = time;


    // Update every 1 second
    setTimeout(showTime, 1000);
}