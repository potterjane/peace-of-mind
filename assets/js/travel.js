/*
* At "Home" page, when user clicks on the sound Travel icon or the previous/next icon, 
a random sound effect should be played in a loop until they either click the icon again 
to stop playing the sound or click the “Reset all” button to reload page. 
* User can also control the volume. 
* Users cannot click to resume to the same sound. Pause method is used to stop the audio, not pause.
*/

//Travels-array
var travels = [
    "assets/audio/travel/airplane-landing.mp3",
    "assets/audio/travel/airport-terminal.mp3",
    "assets/audio/travel/bicycle.mp3",
    "assets/audio/travel/car.mp3",
    "assets/audio/travel/train-arriving.mp3",
    "assets/audio/travel/train.mp3"
];

//For desktop and larger tablet screens
var sourcesTravelBig = document.getElementById('sourceTravelBig'); //Source id taken from index.html
var travelSoundBig = document.getElementById('travel-sound-big'); //Audio id taken from index.html
var travelIconBig = document.getElementById('travel-icon-big'); //Travel icon id taken from index.html

travelIconBig.addEventListener('click', toggleTravelBig); //Added click event to the travel icon id

function toggleTravelBig() { //Sound function for the travel icon
    var travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelBig.setAttribute("src", travelAudio); //Adds random travels audio to the src attribute in index.html
    
    if (travelSoundBig.paused) { 
        travelSoundBig.load();
        travelSoundBig.play(); //If sound is playing, add stop icon and remove the travel icon
        travelIconBig.classList.add('fa-stop'); 
        travelIconBig.classList.remove('fa-subway');
    } else {
        travelSoundBig.pause(); //If sound is on pause method, add the travel icon and remove the stop icon
        travelSoundBig.classList.add('fa-subway');
        travelIconBig.classList.remove('fa-stop');
    }
}

function randomTravelBig() { //Sound function for the previous and next icons
    var travelIconBig = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelBig.setAttribute("src", travelIconBig); //Adds random travels audio to the src attribute in index.html

    for (var i = 0; i < travels.length; i++) { //Loops the travels-array
        travelSoundBig.load();
        travelSoundBig.play(); //If sound is playing, add stop icon and remove the travel icon
        travelIconBig.classList.add('fa-stop');
        travelIconBig.classList.remove('fa-subway');
    }
}

//For smaller tablet and mobile screens
var sourcesTravelSmall = document.getElementById('sourceTravelSmall'); //Source id taken from index.html
var travelSoundSmall = document.getElementById('travel-sound-small'); //Audio id taken from index.html
var travelIconSmall = document.getElementById('travel-icon-small'); //Travel icon id taken from index.html

travelIconSmall.addEventListener('click', toggleTravelSmall); //Added click event to the travel icon id

function toggleTravelSmall() { //Sound function for the travel icon
    var travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelSmall.setAttribute("src", travelAudio); //Adds random travels audio to the src attribute in index.html
    
    if (travelSoundSmall.paused) {
        travelSoundSmall.load();
        travelSoundSmall.play(); //If sound is playing, add stop icon and remove the travel icon
        travelIconSmall.classList.add('fa-stop');
        travelIconSmall.classList.remove('fa-subway');
    } else {
        travelSoundSmall.pause(); //If sound is on pause method, add the travel icon and remove the stop icon
        travelIconSmall.classList.add('fa-subway');
        travelIconSmall.classList.remove('fa-stop');
    }
}

function randomTravelSmall() { //Sound function for the previous and next icons
    var travelAudio = travels[Math.floor(Math.random() * travels.length)]; //Got a random audio file from travels-array
    sourcesTravelSmall.setAttribute("src", travelAudio); //Adds random travels audio to the src attribute in index.html

    for (var i = 0; i < travels.length; i++) { //Loops the travels-array
        travelSoundSmall.load();
        travelSoundSmall.play(); //If sound is playing, add stop icon and remove the travel icon
        travelIconSmall.classList.add('fa-stop');
        travelIconSmall.classList.remove('fa-subway');
    }
}

/*
* Travel volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

//For desktop and larger tablet screens
var volumeTravelBig = document.querySelector("#volume-travel-big"); //Volume travel id taken from index.html

volumeTravelBig.addEventListener("change", function(e) { //Added change event to the volume travel id
    travelSoundBig.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});

//For smaller tablet and mobile screens
var volumeTravelSmall = document.querySelector("#volume-travel-small"); //Volume travel id taken from index.html

volumeTravelSmall.addEventListener("change", function(e) { //Added change event to the volume travel id
    travelSoundSmall.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});