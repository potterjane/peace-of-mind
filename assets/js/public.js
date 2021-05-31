//At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
//User should also be able to control the volume and change sound effect any time. 
//Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.

//Public sounds
let publics = [
    "assets/audio/public/office.mp3",
    "assets/audio/public/restaurant.mp3",
    "assets/audio/public/traffic.mp3"
];

let sourcesPublic = document.getElementById('sourcePublic');
let publicSound = document.getElementById('public-sound');
let publicIcon = document.getElementById('public-icon');

publicIcon.addEventListener('click', togglePublic); 

function togglePublic() {
    let publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublic.setAttribute("src", publicAudio);
    
    if (publicSound.paused) {
        publicSound.load();
        publicSound.play();
        publicIcon.classList.add('fa-pause');
        publicIcon.classList.remove('fa-utensils');
    } else {
        publicSound.pause();
        publicIcon.classList.add('fa-utensils');
        publicIcon.classList.remove('fa-pause');
    }
}

function randomPublic() {
    let publicAudio = publics[Math.floor(Math.random() * publics.length)];
    sourcesPublic.setAttribute("src", publicAudio);

    for (var i = 0; i < publics.length; i++) {
        publicSound.load();
        publicSound.play();
        publicIcon.classList.add('fa-pause');
        publicIcon.classList.remove('fa-utensils');
    }
}

//Public volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumePublic = document.querySelector("#volume-public");

volumePublic.addEventListener("change", function(e) {
publicSound.volume = e.currentTarget.value / 100;
})