// Hide the Start Button
$("#start-button").click(function () {
    $("#start-button").hide('slow');
});

// Random Number Generator
function randNumGen() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    document.getElementById("topnum").innerHTML = x;
    // document.getElementById("rand-operator").innerHTML = o;
    document.getElementById("botnum").innerHTML = y;
    // Countdown Timer
    var timeleft = 10;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Too Late!!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

// Countdown Timer

// var timeleft = 10;
// var downloadTimer = setInterval(function () {
//     if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//         document.getElementById("countdown").innerHTML = "Too Late!!";
//     } else {
//         document.getElementById("countdown").innerHTML = timeleft;
//     }
//     timeleft -= 1;
// }, 1000);