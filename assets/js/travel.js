//At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
//User should also be able to control the volume and change sound effect any time. 
//Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.

//Travel sounds
let travels = [
    "assets/audio/travel/bicycle.mp3",
    "assets/audio/travel/car.mp3",
    "assets/audio/travel/train.mp3"
];

let sourcesTravel = document.getElementById('sourceTravel');
let travelSound = document.getElementById('travel-sound');
let travelIcon = document.getElementById('travel-icon');

travelIcon.addEventListener('click', toggleTravel); 

function toggleTravel() {
    let travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravel.setAttribute("src", travelAudio);
    
    if (travelSound.paused) {
        travelSound.load();
        travelSound.play();
        travelIcon.classList.add('fa-pause');
        travelIcon.classList.remove('fa-subway');
    } else {
        travelSound.pause();
        travelIcon.classList.add('fa-subway');
        travelIcon.classList.remove('fa-pause');
    }
}

function randomTravel() {
    let travelAudio = travels[Math.floor(Math.random() * travels.length)]; 
    sourcesTravel.setAttribute("src", travelAudio);

    for (var i = 0; i < travels.length; i++) {
        travelSound.load();
        travelSound.play();
        travelIcon.classList.add('fa-pause');
        travelIcon.classList.remove('fa-subway');
    }
}

//Travel volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeTravel = document.querySelector("#volume-travel");

volumeTravel.addEventListener("change", function(e) {
    travelSound.volume = e.currentTarget.value / 100;
})
