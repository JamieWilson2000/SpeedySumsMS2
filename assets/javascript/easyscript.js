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
                countdownTimer();
            }
        });
    }
    //This event listener looks for the physical enter button to be pressed and then checks the answer---------------------
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();

        }
    })
    runGame("easyLevel");
});

//Timer Function---------------------------------------------------------------------------------------------------------


function countdownTimer() {

    var timeleft = 10;
    var gameTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(gameTimer);
            document.getElementById("countdown").innerHTML = "Time's Up!!";
            document.getElementById("timeMessage").innerHTML = "Oh No!! You ran out of time!!"
            gameOver();
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
    //countdownTimer = function () {}; // Apply this to make the timer only run once
}

// Generating numbers for the game---------------------------------------------------------------------------------------
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
    document.getElementById("high-score").innerText;

    if (gameType === "easyLevel") {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
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

//Functions for using the virtual numberpad


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
        countdownTimer();

    } else {
        logHiScore();
        gameOver();
    }

    runGame(calculatedAnswer[1]);
}

//Increase the score
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function logHiScore() {

}


//Game over function
function gameOver(msg, playAgain) {
    var confirmBox = $("#gameOver");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".playAgain").click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".return").click(playAgain);
    confirmBox.show();
}
//Times Up function
function timeUp(msg, playAgain) {
    var confirmBox = $("#timeUp");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".playAgain").click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".return").click(playAgain);
    confirmBox.show();
}


// Numpad code
// $(document).ready(function () {
//     $(".numpad").hide();
//     $('.input').click(function () {
//         $('.numpad').fadeToggle('fast');
//     });

// $('.del').click(function () {
//     $('.input').val($('.input').val().substring(0, $('.input').val().length - 1));
// });
// $('.faq').click(function () {
//     alert("Not sure when this will be called");
// })
// $('.shuffle').click(function () {
//     $('.input').val($('.input').val() + $(this).text());
//     // $('.shuffle').shuffle();
// });
// (function ($) {

//     $.fn.shuffle = function () {

//         var allElems = this.get(),
//             getRandom = function (max) {
//                 return Math.floor(Math.random() * max);
//             },
//             shuffled = $.map(allElems, function () {
//                 var random = getRandom(allElems.length),
//                     randEl = $(allElems[random]).clone(true)[0];
//                 allElems.splice(random, 1);
//                 return randEl;
//             });

//         this.each(function (i) {
//             $(this).replaceWith($(shuffled[i]));
//         });

//         return $(shuffled);

//     };

// })(jQuery);

// });