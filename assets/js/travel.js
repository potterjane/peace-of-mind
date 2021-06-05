/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Travel sounds
var travels = [
    "assets/audio/travel/airplane-landing.mp3",
    "assets/audio/travel/airport-terminal.mp3",
    "assets/audio/travel/bicycle.mp3",
    "assets/audio/travel/car.mp3",
    "assets/audio/travel/train-arriving.mp3",
    "assets/audio/travel/train.mp3"
];

//For desktop and larger tablet screens
var sourcesTravelBig = document.getElementById('sourceTravelBig');
var travelSoundBig = document.getElementById('travel-sound-big');
var travelIconBig = document.getElementById('travel-icon-big');

travelIconBig.addEventListener('click', toggleTravelBig); 

function toggleTravelBig() {
    var travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelBig.setAttribute("src", travelAudio);
    
    if (travelSoundBig.paused) {
        travelSoundBig.load();
        travelSoundBig.play();
        travelIconBig.classList.add('fa-pause');
        travelIconBig.classList.remove('fa-subway');
    } else {
        travelSoundBig.pause();
        travelIconBig.classList.add('fa-subway');
        travelIconBig.classList.remove('fa-pause');
    }
}

function randomTravelBig() {
    var travelAudio = travels[Math.floor(Math.random() * travels.length)];
    sourcesTravelBig.setAttribute("src", travelAudio);

    for (var i = 0; i < travels.length; i++) {
        travelSoundBig.load();
        travelSoundBig.play();
        travelIconBig.classList.add('fa-pause');
        travelIconBig.classList.remove('fa-subway');
    }
}

/*
* Travel volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeTravelBig = document.querySelector("#volume-travel-big");

volumeTravelBig.addEventListener("change", function(e) {
    travelSoundBig.volume = e.currentTarget.value / 100;
});

//For smaller tablet and mobile screens
var sourcesTravelSmall = document.getElementById('sourceTravelSmall');
var travelSoundSmall = document.getElementById('travel-sound-small');
var travelIconSmall = document.getElementById('travel-icon-small');

travelIconSmall.addEventListener('click', toggleTravelSmall); 

function toggleTravelSmall() {
    var travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelSmall.setAttribute("src", travelAudio);
    
    if (travelSoundSmall.paused) {
        travelSoundSmall.load();
        travelSoundSmall.play();
        travelIconSmall.classList.add('fa-pause');
        travelIconSmall.classList.remove('fa-subway');
    } else {
        travelSoundSmall.pause();
        travelIconSmall.classList.add('fa-subway');
        travelIconSmall.classList.remove('fa-pause');
    }
}

function randomTravelSmall() {
    var travelAudio = travels[Math.floor(Math.random() * travels.length)];
    sourcesTravelSmall.setAttribute("src", travelAudio);

    for (var i = 0; i < travels.length; i++) {
        travelSoundSmall.load();
        travelSoundSmall.play();
        travelIconSmall.classList.add('fa-pause');
        travelIconSmall.classList.remove('fa-subway');
    }
}

/*
* Travel volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeTravelSmall = document.querySelector("#volume-travel-small");

volumeTravelSmall.addEventListener("change", function(e) {
    travelSoundSmall.volume = e.currentTarget.value / 100;
});