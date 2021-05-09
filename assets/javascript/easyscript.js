//Load page and add event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            //This event listener looks for the submit button to be pressed and then checks the answer
            if (this.getAttribute("data-type") === "submit") {

                checkAnswer();

            } else {
                let easyGame = this.getAttribute("data-type") === "easyGame";
                runGame("easyLevel");

            }
        });
    }
    //This event listener looks for the physical enter button to be pressed and then checks the answer---------------------
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            //startTimer();
            checkAnswer();

        }
    })
    runGame("easyLevel");

});

//-------------------------------------------Timer Function--------------------------------------------------------


function startTimer() {
    let timeleft = 10;
    let gameTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(gameTimer);
            document.getElementById("countdown").innerHTML = "Time's Up!!";
            document.getElementById("timeMessage").innerHTML = "Oh No!! You ran out of time!!";
            document.getElementById("diffMessage").innerHTML = "You need to be a bit quicker!!";
            document.getElementById("quit").innerHTML = "";
            gameOver();
            logHiScore();
        } else {

            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;

    }, 1000);
}

function resetTimer() {
    alert("Reset");

    startTimer();

}






//--------------------------------------Generating numbers for the game---------------------------------------------
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();


    if (gameType === "easyLevel") {
        let num1 = Math.floor(Math.random() * 10) + 1;
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


//-------------------------------------Calculating the correct answers-----------------------------------------------
function calculateCorrectAnswer() {
    let topnum = parseInt(document.getElementById("topnum").innerText);
    let botnum = parseInt(document.getElementById("botnum").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [topnum + botnum, "easyLevel"];
    } else if (operator === "-") {
        return [topnum - botnum, "easyLevel"];
    } else if (operator === "x") {
        return [topnum * botnum, "easyLevel"];
    } else if (operator === "/") {
        return [topnum / botnum, "easyLevel"];
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
        resetTimer();
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
    let hiScore = parseInt(document.getElementById("high-score").innerText);
    let oldScore = parseInt(document.getElementById("score").innerText);
    let scoreRecord = []
    if (hiScore > oldScore) {
        document.getElementById("high-score").innerText;
    } else {
        scoreRecord.push(hiScore);
        document.getElementById("high-score").textContent = oldScore;

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
    logHiScore();
}
// //Times Up function
// function timeUp(msg, playAgain) {
//     var confirmBox = $("#timeUp");
//     confirmBox.find(".message").text(msg);
//     confirmBox.find(".playAgain").click(function () {
//         confirmBox.hide();
//     });
//     confirmBox.find(".return").click(playAgain);
//     confirmBox.show();
//     logHighScore();
// }