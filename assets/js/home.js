/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Home sounds
var homes = [
    "assets/audio/home/barbecuing.mp3",
    "assets/audio/home/dishes.mp3",
    "assets/audio/home/fireplace.mp3"
];

var sourcesHome = document.getElementById('sourceHome');
var homeSound = document.getElementById('home-sound');
var homeIcon = document.getElementById('home-icon'); //This code was taken from Code Institute's tutor Tim during a tutor session

homeIcon.addEventListener('click', toggleHome); //This code was taken from Code Institute's tutor Tim during a tutor session

function toggleHome() {
    var audioSrc = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHome.setAttribute("src", audioSrc);
    
    if (homeSound.paused) {
        homeSound.load();
        homeSound.play();
        homeIcon.classList.add('fa-pause');
        homeIcon.classList.remove('fa-home');
    } else {
        homeSound.pause();
        homeIcon.classList.add('fa-home');
        homeIcon.classList.remove('fa-pause');
    }
}

function randomHome() {
    var homeAudio = homes[Math.floor(Math.random() * homes.length)];
    sourcesHome.setAttribute("src", homeAudio);

    for (var i = 0; i < homes.length; i++) {
        homeSound.load();
        homeSound.play();
        homeIcon.classList.add('fa-pause');
        homeIcon.classList.remove('fa-home');
    }
}

/*
* Home volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeHome = document.querySelector("#volume-home");

volumeHome.addEventListener("change", function(e) {
homeSound.volume = e.currentTarget.value / 100;
});