//Load page and add event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            //This event listener looks for the submit button to be pressed and then checks the answer
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                //This event listener looks for a number on the numpad to be selected then prints to the answer box
            } else if (this.getAttribute("data-type") === "number") {

            } else {
                let easyGame = this.getAttribute("data-type") === "easyGame";
                runGame("mediumLevel");
            }
        });
    }
    //This event listener looks for the physical enter button to be pressed and then checks the answer---------------------
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            //startTimer();
            checkAnswer();
        }
    });
    runGame("mediumLevel");
});
document.getElementById("myAudio").play();
//-------------------------------------------Timer Function--------------------------------------------------------
let timeleft = 12;
let gameTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(gameTimer);
        gameOver();
        document.getElementById("high-score").innerHTML = localStorage.getItem("storedMediumHiScore");
        document.getElementById("countdown").innerHTML = "Time's Up!!";
        document.getElementById("timeMessage").innerHTML = "Oh No!! You ran out of time!!";
        //document.getElementById("diffMessage").innerHTML = "You need to be a bit quicker!!";
        document.getElementById("quit").innerHTML = "";
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);


// function resetTimer() {
//     startTimer();

// }

//--------------------------------------Generating numbers for the game---------------------------------------------
function runGame(gameType) {
    document.getElementById("high-score").innerHTML = localStorage.getItem("storedMediumHiScore");
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();


    if (gameType === "mediumLevel") {
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        displaySum(num1, num2);
    }
}

//----------------------------------Displaying the questions onto the screen------------------------------------------
function displaySum(topnum, botnum, operator) {
    document.getElementById("topnum").textContent = topnum > botnum ? topnum : botnum;
    document.getElementById("botnum").textContent = topnum > botnum ? botnum : topnum;
    let randoperator = ["+", "-", "x", "/"];
    let o = randoperator[(Math.random() * randoperator.length) | 0];
    document.getElementById("operator").textContent = o;
    if (document.getElementById("operator").textContent === "/") {
        document.getElementById("topnum").textContent = (topnum * botnum);
        document.getElementById("botnum").textContent = botnum;
    }
}

//---------------------------------Functions for using the virtual numberpad------------------------------------------

function show1() {
    var number1 = 1;
    var a = number1.toString();
    document.getElementById("answer-box").value = document.getElementById("answer-box").value + a;
}

function show2() {
    var number2 = 2;
    var b = number2.toString();
    document.getElementById("answer-box").value = document.getElementById("answer-box").value + b;
}

function show3() {
    var number3 = 3;
    var c = number3.toString();
    document.getElementById("answer-box").value = document.getElementById("answer-box").value + c;
}

function show4() {
    var number4 = 4;
    var d = number4.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + d;
}

function show5() {
    var number5 = 5;
    var e = number5.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + e;
}

function show6() {
    var number6 = 6;
    var f = number6.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + f;
}

function show7() {
    var number7 = 7;
    var g = number7.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + g;
}

function show8() {
    var number8 = 8;
    var h = number8.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + h;
}

function show9() {
    var number9 = 9;
    var i = number9.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + i;
}

function show0() {
    var number0 = 0;
    var j = number0.toString();
    document.getElementById('answer-box').value = document.getElementById("answer-box").value + j;
}

function skipSum() {
    timeleft = 12
}

//-------------------------------------Calculating the correct answers-----------------------------------------------
function calculateCorrectAnswer() {
    let topnum = parseInt(document.getElementById("topnum").innerText);
    let botnum = parseInt(document.getElementById("botnum").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [topnum + botnum, "mediumLevel"];
    } else if (operator === "-") {
        return [topnum - botnum, "mediumLevel"];
    } else if (operator === "x") {
        return [topnum * botnum, "mediumLevel"];
    } else if (operator === "/") {
        return [topnum / botnum, "mediumLevel"];
    } else {
        alert("Problem with the calculateCorrectAnswer function");
        throw ("Problem with the calculateCorrectAnswer function");
    }
}

//-----------------------------Check the users answer with the correct answer------------------------------------------
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        timeleft = 12;

        incrementScore();
    } else {
        document.getElementById("rightAnswer").textContent = calculatedAnswer[0];
        gameOver();
    }
    runGame(calculatedAnswer[1]);
}

//----------------------------------------Increase the score---------------------------------------------------------
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
//-------------------------------------Log the high score function---------------------------------------------------

function logHiScore() {
    if (typeof (Storage) !== "undefined") {

        let hiScore = document.getElementById("high-score").innerHTML = localStorage.getItem("storedMediumHiScore"); //accesses the info from the local storage
        let currentScore = parseInt(document.getElementById("score").innerText); //accesses the info from the score element
        if (currentScore >= hiScore) { //if the current score is higher than the hi score
            localStorage.setItem("storedMediumHiScore", currentScore); // then store the current score in storage
            document.getElementById("high-score").innerHTML = localStorage.getItem("storedMediumHiScore"); // display the current score as the new high score 
        }
        if (currentScore <= hiScore) {
            document.getElementById("high-score").innerHTML = localStorage.getItem("storedEasyHighScore");
        }
    } else {
        localStorage.setItem("storedEasyHighScore", 0)
    }
}

//---------------------------------------Game over message function---------------------------------------------------
function gameOver(msg, playAgain) {
    var confirmBox = $("#gameOver");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".playAgain").click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".return").click(playAgain);
    confirmBox.show();
    document.getElementById("myAudio").pause()
    document.getElementById("fail").play();
    logHiScore();
    clearInterval(gameTimer);


}