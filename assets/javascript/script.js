function myFunction() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    document.getElementById("topnum").innerHTML = x;
    document.getElementById("botnum").innerHTML = y;
}