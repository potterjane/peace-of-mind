/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Public sounds
var publics = [
    "assets/audio/public/city-park.mp3",
    "assets/audio/public/office.mp3",
    "assets/audio/public/outdoor-swimming-pool.mp3",
    "assets/audio/public/restaurant.mp3",
    "assets/audio/public/shopping-mall.mp3",
    "assets/audio/public/traffic.mp3"
];

//For desktop and larger tablet screens
var sourcesPublicBig = document.getElementById('sourcePublicBig');
var publicSoundBig = document.getElementById('public-sound-big');
var publicIconBig = document.getElementById('public-icon-big');

publicIconBig.addEventListener('click', togglePublicBig); 

function togglePublicBig() {
    var publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicBig.setAttribute("src", publicAudio);
    
    if (publicSoundBig.paused) {
        publicSoundBig.load();
        publicSoundBig.play();
        publicIconBig.classList.add('fa-pause');
        publicIconBig.classList.remove('fa-utensils');
    } else {
        publicSoundBig.pause();
        publicIconBig.classList.add('fa-utensils');
        publicIconBig.classList.remove('fa-pause');
    }
}

function randomPublicBig() {
    var publicAudio = publics[Math.floor(Math.random() * publics.length)];
    sourcesPublicBig.setAttribute("src", publicAudio);

    for (var i = 0; i < publics.length; i++) {
        publicSoundBig.load();
        publicSoundBig.play();
        publicIconBig.classList.add('fa-pause');
        publicIconBig.classList.remove('fa-utensils');
    }
}

/*
* Public volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumePublicBig = document.querySelector("#volume-public-big");

volumePublicBig.addEventListener("change", function(e) {
    publicSoundBig.volume = e.currentTarget.value / 100;
});

//For smaller tablet and mobile screens
var sourcesPublicSmall = document.getElementById('sourcePublicSmall');
var publicSoundSmall = document.getElementById('public-sound-small');
var publicIconSmall = document.getElementById('public-icon-small');

publicIconSmall.addEventListener('click', togglePublicSmall); 

function togglePublicSmall() {
    var publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicSmall.setAttribute("src", publicAudio);
    
    if (publicSoundSmall.paused) {
        publicSoundSmall.load();
        publicSoundSmall.play();
        publicIconSmall.classList.add('fa-pause');
        publicIconSmall.classList.remove('fa-utensils');
    } else {
        publicSoundSmall.pause();
        publicIconSmall.classList.add('fa-utensils');
        publicIconSmall.classList.remove('fa-pause');
    }
}

function randomPublicSmall() {
    var publicAudio = publics[Math.floor(Math.random() * publics.length)];
    sourcesPublicSmall.setAttribute("src", publicAudio);

    for (var i = 0; i < publics.length; i++) {
        publicSoundSmall.load();
        publicSoundSmall.play();
        publicIconSmall.classList.add('fa-pause');
        publicIconSmall.classList.remove('fa-utensils');
    }
}

/*
* Public volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumePublicSmall = document.querySelector("#volume-public-small");

volumePublicSmall.addEventListener("change", function(e) {
    publicSoundSmall.volume = e.currentTarget.value / 100;
});