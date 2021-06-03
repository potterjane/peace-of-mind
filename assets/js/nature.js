/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Nature sounds
var natures = [
    "assets/audio/nature/birds.mp3",
    "assets/audio/nature/leaves.mp3",
    "assets/audio/nature/waves.mp3"
];

var sourcesNature = document.getElementById('sourceNature');
var natureSound = document.getElementById('nature-sound');
var natureIcon = document.getElementById('nature-icon');

natureIcon.addEventListener('click', toggleNature); 

function toggleNature() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNature.setAttribute("src", natureAudio);
    
    if (natureSound.paused) {
        natureSound.load();
        natureSound.play();
        natureIcon.classList.add('fa-pause');
        natureIcon.classList.remove('fa-tree');
    } else {
        natureSound.pause();
        natureIcon.classList.add('fa-tree');
        natureIcon.classList.remove('fa-pause');
    }
}

function randomNature() {
    var natureAudio = natures[Math.floor(Math.random() * natures.length)];
    sourcesNature.setAttribute("src", natureAudio);

    for (var i = 0; i < natures.length; i++) {
        natureSound.load();
        natureSound.play();
        natureIcon.classList.add('fa-pause');
        natureIcon.classList.remove('fa-tree');
    }
}

/*
* Nature volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeNature = document.querySelector("#volume-nature");

volumeNature.addEventListener("change", function(e) {
natureSound.volume = e.currentTarget.value / 100;
});