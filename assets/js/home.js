/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Home sounds
var homes = [
    "assets/audio/home/barbecuing.mp3",
    "assets/audio/home/chopping-food.mp3",
    "assets/audio/home/dishes.mp3",
    "assets/audio/home/fireplace.mp3",
    "assets/audio/home/laundry-room.mp3",
    "assets/audio/home/shower.mp3"
];

//For desktop and larger tablet screens
var sourcesHomeBig = document.getElementById('sourceHomeBig');
var homeSoundBig = document.getElementById('home-sound-big');
var homeIconBig = document.getElementById('home-icon-big');

homeIconBig.addEventListener('click', toggleHomeBig); 

function toggleHomeBig() {
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeBig.setAttribute("src", homeAudio);
    
    if (homeSoundBig.paused) {
        homeSoundBig.load();
        homeSoundBig.play();
        homeIconBig.classList.add('fa-pause');
        homeIconBig.classList.remove('fa-home');
    } else {
        homeSoundBig.pause();
        homeIconBig.classList.add('fa-home');
        homeIconBig.classList.remove('fa-pause');
    }
}

function randomHomeBig() {
    var homeAudio = homes[Math.floor(Math.random() * homes.length)];
    sourcesHomeBig.setAttribute("src", homeAudio);

    for (var i = 0; i < homes.length; i++) {
        homeSoundBig.load();
        homeSoundBig.play();
        homeIconBig.classList.add('fa-pause');
        homeIconBig.classList.remove('fa-home');
    }
}

/*
* Home volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeHomeBig = document.querySelector("#volume-home-big");

volumeHomeBig.addEventListener("change", function(e) {
    homeSoundBig.volume = e.currentTarget.value / 100;
});

//For smaller tablet and mobile screens
var sourcesHomeSmall = document.getElementById('sourceHomeSmall');
var homeSoundSmall = document.getElementById('home-sound-small');
var homeIconSmall = document.getElementById('home-icon-small');

homeIconSmall.addEventListener('click', toggleHomeSmall); 

function toggleHomeSmall() {
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeSmall.setAttribute("src", homeAudio);
    
    if (homeSoundSmall.paused) {
        homeSoundSmall.load();
        homeSoundSmall.play();
        homeIconSmall.classList.add('fa-pause');
        homeIconSmall.classList.remove('fa-home');
    } else {
        homeSoundSmall.pause();
        homeIconSmall.classList.add('fa-home');
        homeIconSmall.classList.remove('fa-pause');
    }
}

function randomHomeSmall() {
    var homeAudio = homes[Math.floor(Math.random() * homes.length)];
    sourcesHomeSmall.setAttribute("src", homeAudio);

    for (var i = 0; i < homes.length; i++) {
        homeSoundSmall.load();
        homeSoundSmall.play();
        homeIconSmall.classList.add('fa-pause');
        homeIconSmall.classList.remove('fa-home');
    }
}

/*
* Home volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeHomeSmall = document.querySelector("#volume-home-small");

volumeHomeSmall.addEventListener("change", function(e) {
    homeSoundSmall.volume = e.currentTarget.value / 100;
});