// Hide the Start Button
$("#start-button").click(function () {
    $("#start-button").hide('slow');
});

// Function for starting game



// function startGame() {

// Countdown Timer

// var timeleft = 10;
// var downloadTimer = setInterval(function () {
//     if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//         document.getElementById("countdown").innerHTML = "Fail!";
//     } else {
//         document.getElementById("countdown").innerHTML = timeleft;
//     }
//     timeleft -= 1;
// }, 1000);

// Random Number Generator
let add1 = (Math.floor(Math.random() * 10000) + 1);
let add2 = (Math.floor(Math.random() * 10000) + 1);
let add = add1 + add2;

console.log(add1, add2, add);

let sub1 = (Math.floor(Math.random() * 10000) + 1);
let sub2 = (Math.floor(Math.random() * 10000) + 1);
let sub = sub1 - sub2;

console.log(sub1, sub2, sub)

let mult1 = (Math.floor(Math.random() * 10) + 1);
let mult2 = (Math.floor(Math.random() * 10000) + 1);
let multiply = mult1 * mult2;

console.log(mult1, mult2, multiply)

let divide1 = (Math.floor(Math.random() * 10) + 1);
let divide2 = (Math.floor(Math.random() * 10) + 1);
let divide = divide1 / divide2;

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

    let gameType = ["add", "sub", "multiply", "divide"];
    let game = gameType[(Math.random() * gameType.length) | 0];
    if (game === "add") {
        document.getElementById("topnum").textContent = add1;
        document.getElementById("rand-operator").textContent = "+";
        document.getElementById("botnum").textContent = add2;
    } else if (game === "sub") {
        document.getElementById("topnum").textContent = sub1;
        document.getElementById("rand-operator").textContent = "-";
        document.getElementById("botnum").textContent = sub2;
    } else if (game === "multiply") {
        document.getElementById("topnum").textContent = mult1;
        document.getElementById("rand-operator").textContent = "*";
        document.getElementById("botnum").textContent = mult2;
    } else if (game === "divide") {
        document.getElementById("topnum").textContent = divide1;
        document.getElementById("rand-operator").textContent = "/";
        document.getElementById("botnum").textContent = divide2;
    }

    console.log(game);
}






















// var x = Math.floor((Math.random() * 10) + 1);
// var y = Math.floor((Math.random() * 10) + 1);

// let randOperator = ['+', '-', '*', '/'];
// let o = randOperator[(Math.random() * randOperator.length) | 0];


// document.getElementById("topnum").innerHTML = x;
// document.getElementById("rand-operator").innerHTML = o;
// document.getElementById("botnum").innerHTML = y;

// //Calculate the correct answer

// let topnum = parseInt(document.getElementById("topnum").innerText);
// let botnum = parseInt(document.getElementById("botnum").innerText);
// let mathOperator = document.getElementById("rand-operator").innerText);