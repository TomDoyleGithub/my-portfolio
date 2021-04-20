var navigation = document.getElementById("page-top");
var headerInformation = document.getElementById("header-grid");
var threeGrid = document.getElementsByClassName("three-layer");
let anchorList = document.querySelectorAll(".scroll"); 
var mePage = document.querySelector(".intro-grid")
var learnMoreButton = mePage.children[1].children[4];
var skillsPage = document.querySelector(".skills-grid");
var firstSkillsList = skillsPage.children[1].children[0];
var worksPage = document.querySelector("#works-grid");
var worksInfo = worksPage.children[1].children[2];
var upButton = $(".up-button");
var contactSection = document.querySelector("#contact-background").children[1].children[2];
console.log(contactSection);
var burgerButton = $(".burger");
var section = $(".navigation-section")
var cross = $(".cross")
var navLinks = $(".nav-link")

// Hides the mobile navigation when you click on a link
navLinks.on("click", function() {
    section.css({display: 'none'});
})

// Displays the movile navigation menu
function mobileNavCreation () {
    section.css({display: 'block'});
}

function movileNavDelete () {
    section.css({display: 'none'});
}

// Added click event to nav button on click
burgerButton.on("click", mobileNavCreation)
cross.on("click", movileNavDelete)

// Function for the navigation fade in
function navFadeIn () {
    var navInterval = setInterval(function() {
        var seconds = 0;
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
        var otSeconds = 0;
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

// If they are on Desktop it will run the scrollFades function, If not, then it keeps the elements at 100%
var pageWidth = window.innerWidth;
if (pageWidth > 771) {
    scrollFades();
} else {
    threeGrid[0].style.opacity = "100%";
    mePage.style.opacity = "100%";
    skillsPage.style.opacity = "100%";
    worksPage.style.opacity = "100%";
}

// When the page scrolls to the bottom of the first grid element, it adds a CSS class of 100% opacity
function scrollFades () {
    window.addEventListener("scroll", function() {
        if (threeGrid[0].children[0].getBoundingClientRect().bottom <= window.innerHeight) {
            threeGrid[0].style.opacity = "100%";
            upButton.css({"opacity": "80%", "bottom": "50px"});
        } else {
            upButton.css({"opacity": "0%", "bottom": "30px"});
        }
        if(contactSection.getBoundingClientRect().bottom <= window.innerHeight) {
            upButton.css({"opacity": "0%", "bottom": "30px"});
        }
        if (learnMoreButton.getBoundingClientRect().top <= window.innerHeight) {
            mePage.style.opacity = "100%";
        }
        if (firstSkillsList.getBoundingClientRect().top <= window.innerHeight) {
            skillsPage.style.opacity = "100%";
        }
        if (worksInfo.getBoundingClientRect().bottom <= window.innerHeight) {
            worksPage.style.opacity = "100%";
        }
    })
};

navFadeIn();
headFadeIn();

