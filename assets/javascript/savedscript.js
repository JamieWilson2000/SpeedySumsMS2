// document.addEventListener("DOMContentLoaded", function {
//             let buttons = document.getElementsByTagName("button");
//             for (let button of buttons) {
//                 button.addEventListener("click", function () {
//                     if (this.getAttribute("gameType") === "easybtn") {
//                         alert("you clicked easy level");
//                     }
//                 })
//             }
//         }

// Hide the Start Button
// $("#start-button").click(function () {
//     $("#start-button").hide('slow');
// });
// Countdown Timer


// Random Number Generators
let easyadd1 = (Math.floor(Math.random() * 10) + 1);
let easyadd2 = (Math.floor(Math.random() * 10) + 1);
let easyadd = easyadd1 + easyadd2;

let easysub1 = (Math.floor(Math.random() * 10) + 1);
let easysub2 = (Math.floor(Math.random() * 10) + 1);
let easysub = easysub1 - easysub2;

let easymult1 = (Math.floor(Math.random() * 10) + 1);
let easymult2 = (Math.floor(Math.random() * 10) + 1);
let easymultiply = easymult1 * easymult2;

let easydivide1 = (Math.floor(Math.random() * 10) + 1);
let easydivide2 = (Math.floor(Math.random() * 10) + 1);
let easydivide = easydivide1 / easydivide2;

let medadd1 = (Math.floor(Math.random() * 10) + 1);
let medadd2 = (Math.floor(Math.random() * 100) + 1);
let medadd = medadd1 + medadd2;

let medsub1 = (Math.floor(Math.random() * 10) + 1);
let medsub2 = (Math.floor(Math.random() * 100) + 1);
let medsub = medsub1 - medsub2;

let medmult1 = (Math.floor(Math.random() * 10) + 1);
let medmult2 = (Math.floor(Math.random() * 100) + 1);
let medmultiply = medmult1 * medmult2;

let meddivide1 = (Math.floor(Math.random() * 10) + 1);
let meddivide2 = (Math.floor(Math.random() * 100) + 1);
let meddivide = meddivide1 / meddivide2;

let hardadd1 = (Math.floor(Math.random() * 100) + 1);
let hardadd2 = (Math.floor(Math.random() * 1000) + 1);
let hardadd = hardadd1 + hardadd2;

let hardsub1 = (Math.floor(Math.random() * 100) + 1);
let hardsub2 = (Math.floor(Math.random() * 1000) + 1);
let hardsub = hardsub1 - hardsub2;

let hardmult1 = (Math.floor(Math.random() * 100) + 1);
let hardmult2 = (Math.floor(Math.random() * 1000) + 1);
let hardmultiply = hardmult1 * hardmult2;

let harddivide1 = (Math.floor(Math.random() * 100) + 1);
let harddivide2 = (Math.floor(Math.random() * 1000) + 1);
let harddivide = harddivide1 / harddivide2;

let genadd1 = (Math.floor(Math.random() * 100) + 1);
let genadd2 = (Math.floor(Math.random() * 10000) + 1);
let genadd = genadd1 + genadd2;

let gensub1 = (Math.floor(Math.random() * 100) + 1);
let gensub2 = (Math.floor(Math.random() * 10000) + 1);
let gensub = gensub1 - gensub2;

let genmult1 = (Math.floor(Math.random() * 100) + 1);
let genmult2 = (Math.floor(Math.random() * 10000) + 1);
let genmultiply = genmult1 * genmult2;

let gendivide1 = (Math.floor(Math.random() * 100) + 1);
let gendivide2 = (Math.floor(Math.random() * 10000) + 1);
let gendivide = gendivide1 / gendivide2;

function easyLevel() {
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
}
let easylevel = ["easyadd", "easysub", "easymultiply", "easydivide"];
let game1 = easylevel[(Math.random() * easylevel.length) | 0];

if (game1 === "easyadd") {
    document.getElementById("easytopnum").textContent = easyadd1;
    document.getElementById("rand-operator").textContent = "+";
    document.getElementById("easybotnum").textContent = easyadd2;
} else if (game1 === "easysub") {
    document.getElementById("easytopnum").textContent = easysub1;
    document.getElementById("rand-operator").textContent = "-";
    document.getElementById("easybotnum").textContent = easysub2;
} else if (game1 === "easymultiply") {
    document.getElementById("easytopnum").textContent = easymult1;
    document.getElementById("rand-operator").textContent = "*";
    document.getElementById("easybotnum").textContent = easymult2;
} else if (game1 === "easydivide") {
    document.getElementById("easytopnum").textContent = easydivide1;
    document.getElementById("rand-operator").textContent = "/";
    document.getElementById("easybotnum").textContent = easydivide2;
}


function mediumLevel() {
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
}

let medlevel = ["medadd", "medsub", "medmultiply", "meddivide"];
let game2 = medlevel[(Math.random() * medlevel.length) | 0];

if (game2 === "medadd") {
    document.getElementById("medtopnum").textContent = medadd1;
    document.getElementById("rand-operator").textContent = "+";
    document.getElementById("medbotnum").textContent = medadd2;
} else if (game2 === "medsub") {
    document.getElementById("medtopnum").textContent = medsub1;
    document.getElementById("rand-operator").textContent = "-";
    document.getElementById("medbotnum").textContent = medsub2;
} else if (game2 === "medmultiply") {
    document.getElementById("medtopnum").textContent = medmult1;
    document.getElementById("rand-operator").textContent = "*";
    document.getElementById("medbotnum").textContent = medmult2;
} else if (game2 === "meddivide") {
    document.getElementById("medtopnum").textContent = meddivide1;
    document.getElementById("rand-operator").textContent = "/";
    document.getElementById("medbotnum").textContent = meddivide2;
}


// function hardLevel() {
//     // Countdown Timer
//     var timeleft = 10;
//     var downloadTimer = setInterval(function () {
//         if (timeleft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById("countdown").innerHTML = "Fail!";
//         } else {
//             document.getElementById("countdown").innerHTML = timeleft;
//         }
//         timeleft -= 1;
//     }, 1000);
// }


// if (game === "hardadd") {
//     document.getElementById("hardtopnum").textContent = hardadd1;
//     document.getElementById("rand-operator").textContent = "+";
//     document.getElementById("hardbotnum").textContent = hardadd2;
// } else if (game === "hardsub") {
//     document.getElementById("hardtopnum").textContent = hardsub1;
//     document.getElementById("rand-operator").textContent = "-";
//     document.getElementById("hardbotnum").textContent = hardsub2;
// } else if (game === "hardmultiply") {
//     document.getElementById("hardtopnum").textContent = hardmult1;
//     document.getElementById("rand-operator").textContent = "*";
//     document.getElementById("hardbotnum").textContent = hardmult2;
// } else if (game === "harddivide") {
//     document.getElementById("hardtopnum").textContent = harddivide1;
//     document.getElementById("rand-operator").textContent = "/";
//     document.getElementById("hardbotnum").textContent = harddivide2;
// }

// function genLevel() {
//     // Countdown Timer
//     var timeleft = 10;
//     var downloadTimer = setInterval(function () {
//         if (timeleft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById("countdown").innerHTML = "Fail!";
//         } else {
//             document.getElementById("countdown").innerHTML = timeleft;
//         }
//         timeleft -= 1;
//     }, 1000);
// }


// if (game === "genadd") {
//     document.getElementById("gentopnum").textContent = genadd1;
//     document.getElementById("rand-operator").textContent = "+";
//     document.getElementById("genbotnum").textContent = genadd2;
// } else if (game === "gensub") {
//     document.getElementById("gentopnum").textContent = gensub1;
//     document.getElementById("rand-operator").textContent = "-";
//     document.getElementById("genbotnum").textContent = gensub2;
// } else if (game === "genmultiply") {
//     document.getElementById("gentopnum").textContent = genmult1;
//     document.getElementById("rand-operator").textContent = "*";
//     document.getElementById("genbotnum").textContent = genmult2;
// } else if (game === "gendivide") {
//     document.getElementById("gentopnum").textContent = gendivide1;
//     document.getElementById("rand-operator").textContent = "/";
//     document.getElementById("genbotnum").textContent = gendivide2;
// }

// console.log(game);






















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