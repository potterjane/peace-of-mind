//--------------------------------------------------------------------------------------------------------------------------------------------------Welcome section
//When user enters page, Welcome function should appear for 5 seconds, with “How are you today?” typed out one letter at a time

//Code taken from Conor Bailey's instructional Youtube video on how to place welcome text in front of the website for 5 seconds
const welcome = document.querySelector('.welcome');

if (!sessionStorage.isVisited) { //Got this if/else and sessionStorage code from SitePoint, this helps show the preloader only once per visit
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
//Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.

//Home sounds
let homes = [
    "assets/audio/home/barbecuing.mp3",
    "assets/audio/home/dishes.mp3",
    "assets/audio/home/fireplace.mp3"
];

let sourcesHome = document.getElementById('sourceHome');
let homeSound = document.getElementById('home-sound');
let homeIcon = document.getElementById('home-icon'); //This code was taken from Code Institute's tutor Tim during a tutor session

homeIcon.addEventListener('click', toggleHome); //This code was taken from Code Institute's tutor Tim during a tutor session

function toggleHome() {
    let audioSrc = homes[Math.floor(Math.random() * homes.length)]; //Got a random audio file from homes-array
    sourcesHome.setAttribute("src", audioSrc);
    
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
    let homeAudio = homes[Math.floor(Math.random() * homes.length)];
    sourcesHome.setAttribute("src", homeAudio);

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
    "assets/audio/nature/birds.mp3",
    "assets/audio/nature/leaves.mp3",
    "assets/audio/nature/waves.mp3"
];

let sourcesNature = document.getElementById('sourceNature');
let natureSound = document.getElementById('nature-sound');
let natureIcon = document.getElementById('nature-icon');

natureIcon.addEventListener('click', toggleNature); 

function toggleNature() {
    let natureAudio = natures[Math.floor(Math.random() * natures.length)]; //Got a random audio file from natures-array
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
    let natureAudio = natures[Math.floor(Math.random() * natures.length)];
    sourcesNature.setAttribute("src", natureAudio);

    for (var i = 0; i < natures.length; i++) {
        natureSound.load();
        natureSound.play();
        natureIcon.classList.add('fa-pause');
        natureIcon.classList.remove('fa-tree');
    }
}

//Nature volume control
//Code taken from StackOverflow on how to add volume control function in JavaScript
let volumeNature = document.querySelector("#volume-nature");

volumeNature.addEventListener("change", function(e) {
natureSound.volume = e.currentTarget.value / 100;
})

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

//Weather sounds
let weathers = [
    "assets/audio/weather/rain.mp3",
    "assets/audio/weather/thunder.mp3"
];

let sourcesWeather = document.getElementById('sourceWeather');
let weatherSound = document.getElementById('weather-sound');
let weatherIcon = document.getElementById('weather-icon');

weatherIcon.addEventListener('click', toggleWeather); 

function toggleWeather() {
    let weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeather.setAttribute("src", weatherAudio);
    
    if (weatherSound.paused) {
        weatherSound.load();
        weatherSound.play();
        weatherIcon.classList.add('fa-pause');
        weatherIcon.classList.remove('fa-cloud-sun-rain');
    } else {
        weatherSound.pause();
        weatherIcon.classList.add('fa-cloud-sun-rain');
        weatherIcon.classList.remove('fa-pause');
    }
}

function randomWeather() {
    let weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; 
    sourcesWeather.setAttribute("src", weatherAudio);

    for (var i = 0; i < weathers.length; i++) {
        weatherSound.load();
        weatherSound.play();
        weatherIcon.classList.add('fa-pause');
        weatherIcon.classList.remove('fa-cloud-sun-rain');
    }
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