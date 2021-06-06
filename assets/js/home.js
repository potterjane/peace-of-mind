/*
* At "Home" page, when user clicks on the sound Home icon or the previous/next icon, 
a random sound effect should be played in a loop until they either click the icon again 
to stop playing the sound or click the “Reset all” button to reload page. 
* User can also control the volume. 
* Users cannot click to resume to the same sound. Pause method is used to stop the audio, not pause.
*/

//Homes-array
var homes = [
    "assets/audio/home/barbecuing.mp3",
    "assets/audio/home/chopping-food.mp3",
    "assets/audio/home/dishes.mp3",
    "assets/audio/home/fireplace.mp3",
    "assets/audio/home/laundry-room.mp3",
    "assets/audio/home/shower.mp3"
];

//For desktop and larger tablet screens
var sourcesHomeBig = document.getElementById('sourceHomeBig'); //Source id taken from index.html
var homeSoundBig = document.getElementById('home-sound-big'); //Audio id taken from index.html
var homeIconBig = document.getElementById('home-icon-big'); //Home icon id taken from index.html

homeIconBig.addEventListener('click', toggleHomeBig); //Added click event to the home icon id

function toggleHomeBig() { //Sound function for the home icon
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeBig.setAttribute("src", homeAudio); //Adds random homes audio to the src attribute in index.html
    
    if (homeSoundBig.paused) { 
        homeSoundBig.load();
        homeSoundBig.play(); //If sound is playing, add stop icon and remove the home icon
        homeIconBig.classList.add('fa-stop'); 
        homeIconBig.classList.remove('fa-home');
    } else {
        homeSoundBig.pause(); //If sound is on pause method, add the home icon and remove the stop icon
        homeIconBig.classList.add('fa-home');
        homeIconBig.classList.remove('fa-stop');
    }
}

function randomHomeBig() { //Sound function for the previous and next icons
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeBig.setAttribute("src", homeAudio); //Adds random homes audio to the src attribute in index.html

    for (var i = 0; i < homes.length; i++) { //Loops the homes-array
        homeSoundBig.load();
        homeSoundBig.play(); //If sound is playing, add stop icon and remove the home icon
        homeIconBig.classList.add('fa-stop');
        homeIconBig.classList.remove('fa-home');
    }
}

//For smaller tablet and mobile screens
var sourcesHomeSmall = document.getElementById('sourceHomeSmall'); //Source id taken from index.html
var homeSoundSmall = document.getElementById('home-sound-small'); //Audio id taken from index.html
var homeIconSmall = document.getElementById('home-icon-small'); //Home icon id taken from index.html

homeIconSmall.addEventListener('click', toggleHomeSmall); //Added click event to the home icon id

function toggleHomeSmall() { //Sound function for the home icon
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeSmall.setAttribute("src", homeAudio); //Adds random homes audio to the src attribute in index.html
    
    if (homeSoundSmall.paused) {
        homeSoundSmall.load();
        homeSoundSmall.play(); //If sound is playing, add stop icon and remove the home icon
        homeIconSmall.classList.add('fa-stop');
        homeIconSmall.classList.remove('fa-home');
    } else {
        homeSoundSmall.pause(); //If sound is on pause method, add the home icon and remove the stop icon
        homeIconSmall.classList.add('fa-home');
        homeIconSmall.classList.remove('fa-stop');
    }
}

function randomHomeSmall() { //Sound function for the previous and next icons
    var homeAudio = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHomeSmall.setAttribute("src", homeAudio); //Adds random homes audio to the src attribute in index.html

    for (var i = 0; i < homes.length; i++) { //Loops the homes-array
        homeSoundSmall.load();
        homeSoundSmall.play(); //If sound is playing, add stop icon and remove the home icon
        homeIconSmall.classList.add('fa-stop');
        homeIconSmall.classList.remove('fa-home');
    }
}

/*
* Home volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

//For desktop and larger tablet screens
var volumeHomeBig = document.querySelector("#volume-home-big"); //Volume home id taken from index.html

volumeHomeBig.addEventListener("change", function(e) { //Added change event to the volume home id
    homeSoundBig.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});

//For smaller tablet and mobile screens
var volumeHomeSmall = document.querySelector("#volume-home-small"); //Volume home id taken from index.html

volumeHomeSmall.addEventListener("change", function(e) { //Added change event to the volume home id
    homeSoundSmall.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});