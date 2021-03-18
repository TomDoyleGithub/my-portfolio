var navigation = document.getElementById("page-top");
var headerInformation = document.getElementById("header-grid");
var threeGrid = document.getElementsByClassName("three-layer");
let anchorList = document.querySelectorAll(".scroll"); 
var seconds = 0;
var otSeconds = 0;

// Function for the navigation fade in
function navFadeIn () {
    var navInterval = setInterval(function() {
        seconds++
        if (seconds >= 1 && seconds < 3) {
            navigation.style.opacity = "100%";
        } else {
            clearInterval(navInterval);
        }
    }, 400)
};

// Function for the header fade in
function headFadeIn () {
    var headInterval = setInterval(function() {
        otSeconds++
        if (otSeconds >= 1 && otSeconds < 3) {
            headerInformation.children[0].style.opacity = "100%"
            headerInformation.children[1].style.opacity = "100%"
        } else {
            clearInterval(headInterval);
        }
    }, 200)
};

// Smooth scroll when clicked
anchorList.forEach (function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let destination =  document.querySelector(this.hash); 
        destination.scrollIntoView({behavior: "smooth"});
    });
})

// When the page scrolls to the bottom of the first grid element, it adds a CSS class of 100% opacity
window.addEventListener("scroll", function() {
    if (threeGrid[0].children[0].getBoundingClientRect().bottom <= window.innerHeight) {
        threeGrid[0].classList.add("opacity");
    }
})

navFadeIn();
headFadeIn();

