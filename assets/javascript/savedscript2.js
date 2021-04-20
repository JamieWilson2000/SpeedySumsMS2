//Countdown Timer


//Generate random numbers

let easynum1 = (Math.floor(Math.random() * 10) + 1);
let easynum2 = (Math.floor(Math.random() * 10) + 1);
let mednum1 = (Math.floor(Math.random() * 100) + 1);
let mednum2 = (Math.floor(Math.random() * 100) + 1);
let hardnum1 = (Math.floor(Math.random() * 1000) + 1);
let hardnum2 = (Math.floor(Math.random() * 1000) + 1);
let gennum1 = (Math.floor(Math.random() * 10000) + 1);
let gennum2 = (Math.floor(Math.random() * 10000) + 1);

//Display questions

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

    let easylevel = ["easyadd", "easysub", "easymultiply", "easydivide"];
    let game1 = easylevel[(Math.random() * easylevel.length) | 0];

    if (game1 === "easyadd") {
        // let easyadd = easynum1 + easynum2
        document.getElementById("easytopnum").textContent = easynum1;
        document.getElementById("rand-operator").textContent = "+";
        document.getElementById("easybotnum").textContent = easynum2;
    } else if (game1 === "easysub") {
        // let easysub = easynum1 - easynum2
        document.getElementById("easytopnum").textContent = easynum1;
        document.getElementById("rand-operator").textContent = "-";
        document.getElementById("easybotnum").textContent = easynum2;
    } else if (game1 === "easymultiply") {
        // let easymultiply = easynum1 * easynum2
        document.getElementById("easytopnum").textContent = easynum1;
        document.getElementById("rand-operator").textContent = "*";
        document.getElementById("easybotnum").textContent = easynum2;
    } else if (game1 === "easydivide") {
        // let easydivide = easynum1 / easynum2
        document.getElementById("easytopnum").textContent = easynum1;
        document.getElementById("rand-operator").textContent = "/";
        document.getElementById("easybotnum").textContent = easynum2;
    }

    function calculateAnswer() {
        let easynum1 = parseInt(document.getElementById("easynum1").innerText);
        let easynum2 = parseInt(document.getElementById("easynum2").innerText);
        let operator = document.getElementById("rand-operator").innerText;

        if (rand - operator === "+") {
            return [easynum1 + easynum2, "easyLevel"];
        } else if (rand - operator === "-") {
            return [easynum1 - easynum2, "easyLevel"];
        } else if (rand - operator === "*") {
            return [easynum1 * easynum2, "easyLevel"];
        } else if (rand - operator === "/") {
            return [easynum1 / easynum2, "easylevel"];
        }
    }

    function checkAnswer() {
        let userAnswer = parseInt(document.getElementById("answer-box").value);
        let calculatedAnswer = calculateAnswer();
        let isCorrect = userAnswer === calculatedAnswer[0];

        if (isCorrect) {
            alert("Well fuck me!")
        } else {
            alert("no")
        }
    }
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

    let medlevel = ["medadd", "medsub", "medmultiply", "meddivide"];
    let game2 = medlevel[(Math.random() * medlevel.length) | 0];

    if (game2 === "medadd") {
        let medadd = mednum1 + mednum2
        document.getElementById("medtopnum").textContent = mednum1;
        document.getElementById("rand-operator").textContent = "+";
        document.getElementById("medbotnum").textContent = mednum2;
    } else if (game2 === "medsub") {
        let medsub = mednum1 - mednum2
        document.getElementById("medtopnum").textContent = mednum1;
        document.getElementById("rand-operator").textContent = "-";
        document.getElementById("medbotnum").textContent = mednum2;
    } else if (game2 === "medmultiply") {
        let medmultiply = mednum1 * mednum2
        document.getElementById("medtopnum").textContent = mednum1;
        document.getElementById("rand-operator").textContent = "*";
        document.getElementById("medbotnum").textContent = mednum2;
    } else if (game2 === "meddivide") {
        let meddivide = mednum1 / mednum2
        document.getElementById("medtopnum").textContent = mednum1;
        document.getElementById("rand-operator").textContent = "/";
        document.getElementById("medbotnum").textContent = mednum2;
    }
}

function hardLevel() {
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

    let hardlevel = ["hardadd", "hardsub", "hardmultiply", "harddivide"];
    let game3 = hardlevel[(Math.random() * hardlevel.length) | 0];

    if (game3 === "hardadd") {
        let hardadd = hardnum1 + hardnum2
        document.getElementById("hardtopnum").textContent = hardnum1;
        document.getElementById("rand-operator").textContent = "+";
        document.getElementById("hardbotnum").textContent = hardnum2;
    } else if (game3 === "hardsub") {
        let hardsub = hardnum1 - hardnum2
        document.getElementById("hardtopnum").textContent = hardnum1;
        document.getElementById("rand-operator").textContent = "-";
        document.getElementById("hardbotnum").textContent = hardnum2;
    } else if (game3 === "hardmultiply") {
        let hardmultiply = hardnum1 * hardnum2
        document.getElementById("hardtopnum").textContent = hardnum1;
        document.getElementById("rand-operator").textContent = "*";
        document.getElementById("hardbotnum").textContent = hardnum2;
    } else if (game3 === "harddivide") {
        let harddivide = hardnum1 / hardnum2
        document.getElementById("hardtopnum").textContent = hardnum1;
        document.getElementById("rand-operator").textContent = "/";
        document.getElementById("hardbotnum").textContent = hardnum2;
    }
}

function genLevel() {
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

    let genlevel = ["genadd", "gensub", "genmultiply", "gendivide"];
    let game4 = genlevel[(Math.random() * genlevel.length) | 0];

    if (game4 === "genadd") {
        let genadd = gennum1 + gennum2
        document.getElementById("gentopnum").textContent = gennum1;
        document.getElementById("rand-operator").textContent = "+";
        document.getElementById("genbotnum").textContent = gennum2;
    } else if (game4 === "gensub") {
        let gensub = gennum1 - gennum2
        document.getElementById("gentopnum").textContent = gennum1;
        document.getElementById("rand-operator").textContent = "-";
        document.getElementById("genbotnum").textContent = gennum2;
    } else if (game4 === "genmultiply") {
        let genmultiply = gennum1 * gennum2
        document.getElementById("gentopnum").textContent = gennum1;
        document.getElementById("rand-operator").textContent = "*";
        document.getElementById("genbotnum").textContent = hardnum2;
    } else if (game4 === "gendivide") {
        let gendivide = gennum1 / gennum2
        document.getElementById("gentopnum").textContent = gennum1;
        document.getElementById("rand-operator").textContent = "/";
        document.getElementById("genbotnum").textContent = gennum2;
    }
}