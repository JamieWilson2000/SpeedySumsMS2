// Hide the Start Button
$("#start-button").click(function () {
    $("#start-button").hide('slow');
});

// Function for starting game



function startGame() {

    // Countdown Timer

    var timeleft = 10;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Fail!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);

    // Random Number Generator

    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);

    let randOperator = ['+', '-', '*', '/'];
    let o = randOperator[(Math.random() * randOperator.length) | 0];


    document.getElementById("topnum").innerHTML = x;
    document.getElementById("rand-operator").innerHTML = o;
    document.getElementById("botnum").innerHTML = y;

    //Calculate the correct answer

    let topnum = parseInt(document.getElementById("topnum").innerText);
    let botnum = parseInt(document.getElementById("botnum").innerText);

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