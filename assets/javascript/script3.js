//Load page and add event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let easyGame = this.getAttribute("data-type");
                runGame("easyLevel");

            }
        });
    }
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })
    runGame("easyLevel");
});
// Gerating numbers for the game
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    if (gameType === "easyLevel") {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        displaySum(num1, num2);
    } else if (gameType === "mediumLevel") {
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        displaySum(num1, num2);
    } else if (gameType === "hardLevel") {
        let num1 = Math.floor(Math.random() * 1000) + 1;
        let num2 = Math.floor(Math.random() * 1000) + 1;
        displaySum(num1, num2);
    } else if (gameType === "geniusLevel") {
        let num1 = Math.floor(Math.random() * 10000) + 1;
        let num2 = Math.floor(Math.random() * 10000) + 1;
        displaySum(num1, num2);
    }
}

//Displaying the questions onto the screen
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

//Calculating the correct answers
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

//Check the users answer with the correct answer
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        incrementScore();
    } else {
        gameOver();
    }
    runGame(calculatedAnswer[1]);
}

//Increase the score
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    let hiScore = parseInt(document.getElementById("high-score").innerText);
    if (oldScore > hiScore) {
        document.getElementById("high-score").innerText = oldScore;
    } else {
        document.getElementById("high-score").innerText = hiScore;
    }
}

//Game over function
function gameOver() {
    document.getElementById("easy-back").style.background = "red";
}