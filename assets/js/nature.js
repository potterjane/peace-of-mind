/*
* At "Home" page, when user clicks on the sound Nature icon or the previous/next icon, 
a random sound effect should be played in a loop until they either click the icon again 
to stop playing the sound or click the “Reset all” button to reload page. 
* User can also control the volume. 
* Users cannot click to resume to the same sound. Pause method is used to stop the audio, not pause.
*/

//Natures-array
var natures = [
    "assets/audio/nature/beach-and-seagulls.mp3",
    "assets/audio/nature/birds.mp3",
    "assets/audio/nature/leaves.mp3",
    "assets/audio/nature/rainforest.mp3",
    "assets/audio/nature/river-flowing.mp3",
    "assets/audio/nature/waves.mp3"
];

//For desktop and larger tablet screens
var sourcesNatureBig = document.getElementById('sourceNatureBig'); //Source id taken from index.html
var natureSoundBig = document.getElementById('nature-sound-big'); //Audio id taken from index.html
var natureIconBig = document.getElementById('nature-icon-big'); //Nature icon id taken from index.html

natureIconBig.addEventListener('click', toggleNatureBig); //Added click event to the nature icon id

function toggleNatureBig() { //Sound function for the nature icon
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureBig.setAttribute("src", natureAudio); //Adds random natures audio to the src attribute in index.html
    
    if (natureSoundBig.paused) { 
        natureSoundBig.load();
        natureSoundBig.play(); //If sound is playing, add stop icon and remove the nature icon
        natureIconBig.classList.add('fa-stop'); 
        natureIconBig.classList.remove('fa-tree');
    } else {
        natureSoundBig.pause(); //If sound is on pause method, add the nature icon and remove the stop icon
        natureIconBig.classList.add('fa-tree');
        natureIconBig.classList.remove('fa-stop');
    }
}

function randomNatureBig() { //Sound function for the previous and next icons
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureBig.setAttribute("src", natureAudio); //Adds random natures audio to the src attribute in index.html

    for (var i = 0; i < natures.length; i++) { //Loops the natures-array
        natureSoundBig.load();
        natureSoundBig.play(); //If sound is playing, add stop icon and remove the nature icon
        natureIconBig.classList.add('fa-stop');
        natureIconBig.classList.remove('fa-tree');
    }
}

//For smaller tablet and mobile screens
var sourcesNatureSmall = document.getElementById('sourceNatureSmall'); //Source id taken from index.html
var natureSoundSmall = document.getElementById('nature-sound-small'); //Audio id taken from index.html
var natureIconSmall = document.getElementById('nature-icon-small'); //Nature icon id taken from index.html

natureIconSmall.addEventListener('click', toggleNatureSmall); //Added click event to the nature icon id

function toggleNatureSmall() { //Sound function for the nature icon
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureSmall.setAttribute("src", natureAudio); //Adds random natures audio to the src attribute in index.html
    
    if (natureSoundSmall.paused) {
        natureSoundSmall.load();
        natureSoundSmall.play(); //If sound is playing, add stop icon and remove the nature icon
        natureIconSmall.classList.add('fa-stop');
        natureIconSmall.classList.remove('fa-tree');
    } else {
        natureSoundSmall.pause(); //If sound is on pause method, add the nature icon and remove the stop icon
        natureIconSmall.classList.add('fa-tree');
        natureIconSmall.classList.remove('fa-stop');
    }
}

function randomNatureSmall() { //Sound function for the previous and next icons
    var natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
    sourcesNatureSmall.setAttribute("src", natureAudio); //Adds random natures audio to the src attribute in index.html

    for (var i = 0; i < natures.length; i++) { //Loops the natures-array
        natureSoundSmall.load();
        natureSoundSmall.play(); //If sound is playing, add stop icon and remove the nature icon
        natureIconSmall.classList.add('fa-stop');
        natureIconSmall.classList.remove('fa-tree');
    }
}

/*
* Nature volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

//For desktop and larger tablet screens
var volumeNatureBig = document.querySelector("#volume-nature-big"); //Volume nature id taken from index.html

volumeNatureBig.addEventListener("change", function(e) { //Added change event to the volume nature id
    natureSoundBig.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});

//For smaller tablet and mobile screens
var volumeNatureSmall = document.querySelector("#volume-nature-small"); //Volume nature id taken from index.html

volumeNatureSmall.addEventListener("change", function(e) { //Added change event to the volume nature id
    natureSoundSmall.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});