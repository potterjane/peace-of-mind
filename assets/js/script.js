//--------------------------------------------------------------------------------------------------------------------------------------------------Welcome section
//When user enters page, Welcome function should appear for 5 seconds, with “How are you today?” typed out one letter at a time

//Code taken from Conor Bailey's instructional Youtube video on how to place welcome text in front of the website for 5 seconds
const welcome = document.querySelector('.welcome');

if (!sessionStorage.isVisited) { //Got this if/else and sessionStorage code from SitePoint, this helps only show the preloader once per visit
    sessionStorage.isVisited = 'true';
    document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=>{
        welcome.classList.add('displayNone');
    }, 5000);
    })
} else {
    $('.welcome').hide();
}

//Code taken from Maximus McCullough's Youtube instructional video on how to use JS to type in one letter at a time
let feelingText = "How are you feeling today?";

let feelingArray = feelingText.split("");

let feelingTimer;

function feeling() {
    if (feelingArray.length > 0) {
        document.getElementById('feeling').innerHTML += feelingArray.shift();
    } else {
        clearTimeout(feelingTimer);
        return false;
    }
    feelingTimer = setTimeout('feeling()', 110);
}

feeling();

//----------------------------------------------------------------------------------------------------------------------------------------------------Audio section
//At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
//User should also be able to control the volume and change sound effect any time. 
//Sound effect should be played in a loop in infinity until window is closed, user clicks “Reset all” or when user clicks pause.

//Home sounds
let homes = [
    "assets/audio/home/barbecuing.mp3",
    "assets/audio/home/dishes.mp3",
    "assets/audio/home/fireplace.mp3"
];

let sourcesHome = document.getElementById('sourceHome');
let homeSound = document.getElementById('home-sound');
let mainIcon = document.querySelector('.main-icon');
let homeIcon = document.getElementById('home-icon'); //This code was taken from Code Institute's tutor Tim during a tutor session
// let pauseIcon = document.querySelector('fa-pause')[0];

homeIcon.addEventListener('click', toggleHome); //This code was taken from Code Institute's tutor Tim during a tutor session

function toggleHome() {
    let audioSrc = homes[Math.floor(Math.random() * homes.length)]; // get a random audio file from homes-array
    sourcesHome.setAttribute("src", audioSrc);
    // sourcesHome.setAttribute("src", homes[0]);
    // sourcesHome.setAttribute("src", homes[1]);
    // sourcesHome.setAttribute("src", homes[2]);
    
    if (homeSound.paused) {
        homeSound.load();
        homeSound.play();
        homeIcon.classList.add('fa-pause');
        homeIcon.classList.remove('fa-home');
    } else {
        homeSound.pause();
        homeIcon.classList.add('fa-home');
        homeIcon.classList.remove('fa-pause');
    }
}

function randomHome() {
    let audioSrc = homes[Math.floor(Math.random() * homes.length)];
    sourcesHome.setAttribute("src", audioSrc);

    for (var i = 0; i < homes.length; i++) {
        homeSound.load();
        homeSound.play();
        homeIcon.classList.add('fa-pause');
        homeIcon.classList.remove('fa-home');
    }
}

//Home volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeHome = document.querySelector("#volume-home");

volumeHome.addEventListener("change", function(e) {
homeSound.volume = e.currentTarget.value / 100;
})

//Nature sounds
let natures = [
    {
        sources: "assets/audio/nature/birds.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/nature/leaves.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/nature/waves.mp3",
        types: "audio/mp3"
    },
];

let sourcesNature = document.getElementById('sourceNature');
let natureSound = document.getElementById('nature-sound');
/*
function toggleNature() {
    let natureSounds = natures[Math.floor(Math.random() * natures.length)];
    let randomNatures = Object.values(natureSounds);
    sourcesNature.setAttribute("src", randomNatures[0]);
    sourcesNature.setAttribute("type", randomNatures[1]);

    //Code taken from StackOverflow on how to toggle audio play and pause with one button/icon/link
    if (natureSound.paused) {
        natureSound.load();
        natureSound.play();
    } else {
        natureSound.pause();
    }
}
*/
function randomNature() {
    let natureSounds = natures[Math.floor(Math.random() * natures.length)];
    let randomNatures = Object.values(natureSounds);
    sourcesNature.setAttribute("src", randomNatures[0]);
    sourcesNature.setAttribute("type", randomNatures[1]);

    natureSound.load();
    natureSound.play();   
}

//Nature volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeNature = document.querySelector("#volume-nature");

volumeNature.addEventListener("change", function(e) {
natureSound.volume = e.currentTarget.value / 100;
})

//Public sounds
let publics = [
    {
        sources: "assets/audio/public/office.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/public/restaurant.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/public/traffic.mp3",
        types: "audio/mp3"
    },
];

let sourcesPublic = document.getElementById('sourcePublic');
let publicSound = document.getElementById('public-sound');

function randomPublic() {
    let publicSounds = publics[Math.floor(Math.random() * publics.length)];
    let randomPublics = Object.values(publicSounds);
    sourcesPublic.setAttribute("src", randomPublics[0]);
    sourcesPublic.setAttribute("type", randomPublics[1]);

    publicSound.load();
    publicSound.play();
}

//Public volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumePublic = document.querySelector("#volume-public");

volumePublic.addEventListener("change", function(e) {
publicSound.volume = e.currentTarget.value / 100;
})

//Travel sounds
let travels = [
    {
        sources: "assets/audio/travel/bicycle.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/travel/car.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/travel/train.mp3",
        types: "audio/mp3"
    },
];

let sourcesTravel = document.getElementById('sourceTravel');
let travelSound = document.getElementById('travel-sound');

function randomTravel() {
    let travelSounds = travels[Math.floor(Math.random() * travels.length)];
    let randomTravels = Object.values(travelSounds);
    sourcesTravel.setAttribute("src", randomTravels[0]);
    sourcesTravel.setAttribute("type", randomTravels[1]);

    travelSound.load();
    travelSound.play();
}

//Travel volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeTravel = document.querySelector("#volume-travel");

volumeTravel.addEventListener("change", function(e) {
travelSound.volume = e.currentTarget.value / 100;
})

//Weather sounds
let weathers = [
    {
        sources: "assets/audio/weather/rain.mp3",
        types: "audio/mp3"
    },
    {
        sources: "assets/audio/weather/thunder.mp3",
        types: "audio/mp3"
    },
];

let sourcesWeather = document.getElementById('sourceWeather');
let weatherSound = document.getElementById('weather-sound');

function randomWeather() {
    let weatherSounds = weathers[Math.floor(Math.random() * weathers.length)];
    let randomWeathers = Object.values(weatherSounds);
    sourcesWeather.setAttribute("src", randomWeathers[0]);
    sourcesWeather.setAttribute("type", randomWeathers[1]);

    weatherSound.load();
    weatherSound.play();
}

//Weather volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeWeather = document.querySelector("#volume-weather");

volumeWeather.addEventListener("change", function(e) {
weatherSound.volume = e.currentTarget.value / 100;
})

//----------------------------------------------------------------------------------------------------------------------------------------------------Video section
//When user clicks “Change background” button, background changes to a random video 

let videos = [
    {
        sources: "assets/videos/mp4/beach-waves-move.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/fireplace.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/forest.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/office.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/raindrops.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/reading.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/webm/beach-waves-move.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/fireplace.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/forest.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/office.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/raindrops.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/reading.webm",
        types: "video/webm"
    },
];

let sourcesVid = document.getElementById('sourceVideos');
let bgVideo = document.getElementById('bg-video');

function changeBackground() {
    let bgVideos = videos[Math.floor(Math.random() * videos.length)];
    let randomChoice = Object.values(bgVideos);
    sourcesVid.setAttribute("src", randomChoice[0]);
    sourcesVid.setAttribute("type", randomChoice[1]);

    bgVideo.load();
    bgVideo.play();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------Reset section
//When user clicks “Reset all”, all the sound effects and background are reset/turn off/cancelled

function resetAll() {
    window.location.reload(); //Code on how to reload a page using JavaScript was taken from StackOverflow
}

//--------------------------------------------------------------------------------------------------------------------------------------------------Contact section
//User can send in their questions or feedback via “Contact” page, all fields are required before they can submit the form

//All the code contained in this function was taken from Code Institute's Sending Emails Using EmailJS module
function feedbackForm(contactForm) { 
    emailjs.send('Gmail', 'pom', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.email.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
        },
        function(error) {
            console.log('FAILED', error);
        });

    contactForm.reset() //Code taken from W3Schools to clear form after every submit
    return false;
}