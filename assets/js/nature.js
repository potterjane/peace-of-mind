/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Nature sounds
var natures = [
    "assets/audio/nature/beach-and-seagulls.mp3",
    "assets/audio/nature/birds.mp3",
    "assets/audio/nature/leaves.mp3",
    "assets/audio/nature/rainforest.mp3",
    "assets/audio/nature/river-flowing.mp3",
    "assets/audio/nature/waves.mp3"
];

//For desktop and larger tablet screens
var sourcesNatureBig = document.getElementById('sourceNatureBig');
var natureSoundBig = document.getElementById('nature-sound-big');
var natureIconBig = document.getElementById('nature-icon-big');

natureIconBig.addEventListener('click', toggleNatureBig); 

function toggleNatureBig() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureBig.setAttribute("src", natureAudio);
    
    if (natureSoundBig.paused) {
        natureSoundBig.load();
        natureSoundBig.play();
        natureIconBig.classList.add('fa-pause');
        natureIconBig.classList.remove('fa-tree');
    } else {
        natureSoundBig.pause();
        natureIconBig.classList.add('fa-tree');
        natureIconBig.classList.remove('fa-pause');
    }
}

function randomNatureBig() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)];
    sourcesNatureBig.setAttribute("src", natureAudio);

    for (var i = 0; i < natures.length; i++) {
        natureSoundBig.load();
        natureSoundBig.play();
        natureIconBig.classList.add('fa-pause');
        natureIconBig.classList.remove('fa-tree');
    }
}

/*
* Nature volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeNatureBig = document.querySelector("#volume-nature-big");

volumeNatureBig.addEventListener("change", function(e) {
    natureSoundBig.volume = e.currentTarget.value / 100;
});

//For smaller tablet and mobile screens
var sourcesNatureSmall = document.getElementById('sourceNatureSmall');
var natureSoundSmall = document.getElementById('nature-sound-small');
var natureIconSmall = document.getElementById('nature-icon-small');

natureIconSmall.addEventListener('click', toggleNatureSmall); 

function toggleNatureSmall() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureSmall.setAttribute("src", natureAudio);
    
    if (natureSoundSmall.paused) {
        natureSoundSmall.load();
        natureSoundSmall.play();
        natureIconSmall.classList.add('fa-pause');
        natureIconSmall.classList.remove('fa-tree');
    } else {
        natureSoundSmall.pause();
        natureIconSmall.classList.add('fa-tree');
        natureIconSmall.classList.remove('fa-pause');
    }
}

function randomNatureSmall() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)];
    sourcesNatureSmall.setAttribute("src", natureAudio);

    for (var i = 0; i < natures.length; i++) {
        natureSoundSmall.load();
        natureSoundSmall.play();
        natureIconSmall.classList.add('fa-pause');
        natureIconSmall.classList.remove('fa-tree');
    }
}

/*
* Nature volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeNatureSmall = document.querySelector("#volume-nature-small");

volumeNatureSmall.addEventListener("change", function(e) {
    natureSoundSmall.volume = e.currentTarget.value / 100;
});