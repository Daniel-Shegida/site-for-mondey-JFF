$(document).ready(function () {

    var headerButton = document.getElementById("header-button");
    var yourName = document.getElementsByClassName("your-name")[0];

    headerButton.onclick = function() {
        var name = prompt("and what is sun for you");
        // console.log(name);
        if (name =="") {
            alert( 'better luck next time' );
            yourName.innerHTML = "sun is everything"

        } else {
            yourName.innerHTML ="sun is " + name;
        }
    }
    var Name = document.getElementsByClassName("main-img__name")[0];
    Name.onclick = function() {
        Name.innerHTML ="sun temputer now is " + (Math.floor(Math.random() * (5788 - 5758 + 1)) + 5758) + "K";
    }

    var Name = document.getElementsByClassName("site-name")[0];
    Name.onclick = function() {
        alert ("no no no no no no ");
    }


})