/*
* At "Home" page, when user clicks on the sound Public icon or the previous/next icon, 
a random sound effect should be played in a loop until they either click the icon again 
to stop playing the sound or click the “Reset all” button to reload page. 
* User can also control the volume. 
* Users cannot click to resume to the same sound. Pause method is used to stop the audio, not pause.
*/

//Publics-array
var publics = [
    "assets/audio/public/city-park.mp3",
    "assets/audio/public/office.mp3",
    "assets/audio/public/outdoor-swimming-pool.mp3",
    "assets/audio/public/restaurant.mp3",
    "assets/audio/public/shopping-mall.mp3",
    "assets/audio/public/traffic.mp3"
];

//For desktop and larger tablet screens
var sourcesPublicBig = document.getElementById('sourcePublicBig'); //Source id taken from index.html
var publicSoundBig = document.getElementById('public-sound-big'); //Audio id taken from index.html
var publicIconBig = document.getElementById('public-icon-big'); //Public icon id taken from index.html

publicIconBig.addEventListener('click', togglePublicBig); //Added click event to the public icon id

function togglePublicBig() { //Sound function for the public icon
    var publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicBig.setAttribute("src", publicAudio); //Adds random publics audio to the src attribute in index.html
    
    if (publicSoundBig.paused) { 
        publicSoundBig.load();
        publicSoundBig.play(); //If sound is playing, add stop icon and remove the public icon
        publicIconBig.classList.add('fa-stop'); 
        publicIconBig.classList.remove('fa-utensils');
    } else {
        publicSoundBig.pause(); //If sound is on pause method, add the public icon and remove the stop icon
        publicIconBig.classList.add('fa-utensils');
        publicIconBig.classList.remove('fa-stop');
    }
}

function randomPublicBig() { //Sound function for the previous and next icons
    var publicIconBig = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicBig.setAttribute("src", publicIconBig); //Adds random publics audio to the src attribute in index.html

    for (var i = 0; i < publics.length; i++) { //Loops the publics-array
        publicSoundBig.load();
        publicSoundBig.play(); //If sound is playing, add stop icon and remove the public icon
        publicIconBig.classList.add('fa-stop');
        publicIconBig.classList.remove('fa-utensils');
    }
}

//For smaller tablet and mobile screens
var sourcesPublicSmall = document.getElementById('sourcePublicSmall'); //Source id taken from index.html
var publicSoundSmall = document.getElementById('public-sound-small'); //Audio id taken from index.html
var publicIconSmall = document.getElementById('public-icon-small'); //Public icon id taken from index.html

publicIconSmall.addEventListener('click', togglePublicSmall); //Added click event to the public icon id

function togglePublicSmall() { //Sound function for the public icon
    var publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicSmall.setAttribute("src", publicAudio); //Adds random publics audio to the src attribute in index.html
    
    if (publicSoundSmall.paused) {
        publicSoundSmall.load();
        publicSoundSmall.play(); //If sound is playing, add stop icon and remove the public icon
        publicIconSmall.classList.add('fa-stop');
        publicIconSmall.classList.remove('fa-utensils');
    } else {
        publicSoundSmall.pause(); //If sound is on pause method, add the public icon and remove the stop icon
        publicIconSmall.classList.add('fa-utensils');
        publicIconSmall.classList.remove('fa-stop');
    }
}

function randomPublicSmall() { //Sound function for the previous and next icons
    var publicAudio = publics[Math.floor(Math.random() * publics.length)]; //Got a random audio file from publics-array
    sourcesPublicSmall.setAttribute("src", publicAudio); //Adds random publics audio to the src attribute in index.html

    for (var i = 0; i < publics.length; i++) { //Loops the publics-array
        publicSoundSmall.load();
        publicSoundSmall.play(); //If sound is playing, add stop icon and remove the public icon
        publicIconSmall.classList.add('fa-stop');
        publicIconSmall.classList.remove('fa-utensils');
    }
}

/*
* Public volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

//For desktop and larger tablet screens
var volumePublicBig = document.querySelector("#volume-public-big"); //Volume public id taken from index.html

volumePublicBig.addEventListener("change", function(e) { //Added change event to the volume public id
    publicSoundBig.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});

//For smaller tablet and mobile screens
var volumePublicSmall = document.querySelector("#volume-public-small"); //Volume public id taken from index.html

volumePublicSmall.addEventListener("change", function(e) { //Added change event to the volume public id
    publicSoundSmall.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});