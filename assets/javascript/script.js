var navigation = document.getElementById("page-top");
var headerInformation = document.getElementById("header-grid")
var seconds = 0;
var otSeconds = 0;




// Function for the navigation fade in
function navFadeIn () {
    var navInterval = setInterval(function() {
        seconds++
        console.log(seconds)
        if (seconds === 1) {
            navigation.style.opacity = "100%";
        };
        if (seconds === 2) {
            clearInterval(navInterval);
        };
    }, 400)
};

// Function for the header fade in
function headFadeIn () {
    var navInterval = setInterval(function() {
        otSeconds++
        console.log(otSeconds)
        if (otSeconds === 1) {
            headerInformation.children[0].style.opacity = "100%"
            headerInformation.children[1].style.opacity = "100%"
        };
        if (otSeconds === 2) {
            clearInterval(navInterval);
        };
    }, 200)
};

navFadeIn();
headFadeIn();

