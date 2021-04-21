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
    runGame("easyLevel");
});

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (gameType === "easyLevel") {
        displayEasyLevel(num1, num2)
    }
}

function displayEasyLevel(easytopnum, easybotnum) {
    document.getElementById("easytopnum").textContent = easytopnum;
    document.getElementById("easybotnum").textContent = easybotnum;
    document.getElementById("operator").textContent = "+";
}

function calculateCorrectAnswer() {
    let easytopnum = parseInt(document.getElementById("easytopnum").innerText);
    let easybotnum = parseInt(document.getElementById("easybotnum").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [easytopnum + easybotnum, "easyLevel"];
    } else {
        alert("fuck it");
    }

}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        ;
    } else {
        alert("Wrong");
    }
    runGame(calculatedAnswer[1]);
}