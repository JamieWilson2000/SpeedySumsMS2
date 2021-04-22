document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let startGame = this.getAttribute("data-type");
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

function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (gameType === "easyLevel") {
        displayEasyLevel(num1, num2);
    }
}

// function randomOperator() {
//     let randoperator = ["+", "-", "x", "/"];
//     let o = randoperator[(Math.random() * randoperator.length) | 0];
//     document.getElementById("operator").textContent = o;
// }

function displayEasyLevel(easytopnum, easybotnum, operator) {
    document.getElementById("easytopnum").textContent = easytopnum;
    document.getElementById("easybotnum").textContent = easybotnum;
    let randoperator = ["+", "-", "x", "/"];
    let o = randoperator[(Math.random() * randoperator.length) | 0];
    document.getElementById("operator").textContent = o;
}

function calculateCorrectAnswer() {
    let easytopnum = parseInt(document.getElementById("easytopnum").innerText);
    let easybotnum = parseInt(document.getElementById("easybotnum").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [easytopnum + easybotnum, "easyLevel"];
    } else if (operator === "-") {
        return [easytopnum - easybotnum, "easyLevel"];
    } else if (operator === "x") {
        return [easytopnum * easybotnum, "easyLevel"];
    } else if (operator === "/") {
        return [easytopnum / easybotnum, "easyLevel"];
    } else {
        alert("Problem with the calculateCorrectAnswer function");
        throw ("Problem with the calculateCorrectAnswer function");
    }

}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        incrementScore();
    } else {
        alert("Wroooong!!")
    }
    runGame(calculatedAnswer[1]);
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}