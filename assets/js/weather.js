/*
* At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
* User should also be able to control the volume and change sound effect any time. 
* Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.
*/

//Weather sounds
var weathers = [
    "assets/audio/weather/heavy-rain.mp3",
    "assets/audio/weather/rain-and-thunder.mp3",
    "assets/audio/weather/rain-on-umbrella.mp3",
    "assets/audio/weather/rain-on-window.mp3",
    "assets/audio/weather/rain.mp3",
    "assets/audio/weather/thunder.mp3"
];

//For desktop and larger tablet screens
var sourcesWeatherBig = document.getElementById('sourceWeatherBig');
var weatherSoundBig = document.getElementById('weather-sound-big');
var weatherIconBig = document.getElementById('weather-icon-big');

weatherIconBig.addEventListener('click', toggleWeatherBig); 

function toggleWeatherBig() {
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherBig.setAttribute("src", weatherAudio);
    
    if (weatherSoundBig.paused) {
        weatherSoundBig.load();
        weatherSoundBig.play();
        weatherIconBig.classList.add('fa-pause');
        weatherIconBig.classList.remove('fa-cloud-sun-rain');
    } else {
        weatherSoundBig.pause();
        weatherIconBig.classList.add('fa-cloud-sun-rain');
        weatherIconBig.classList.remove('fa-pause');
    }
}

function randomWeatherBig() {
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)];
    sourcesWeatherBig.setAttribute("src", weatherAudio);

    for (var i = 0; i < weathers.length; i++) {
        weatherSoundBig.load();
        weatherSoundBig.play();
        weatherIconBig.classList.add('fa-pause');
        weatherIconBig.classList.remove('fa-cloud-sun-rain');
    }
}

/*
* Weather volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeWeatherBig = document.querySelector("#volume-weather-big");

volumeWeatherBig.addEventListener("change", function(e) {
    weatherSoundBig.volume = e.currentTarget.value / 100;
});

//For smaller tablet and mobile screens
var sourcesWeatherSmall = document.getElementById('sourceWeatherSmall');
var weatherSoundSmall = document.getElementById('weather-sound-small');
var weatherIconSmall = document.getElementById('weather-icon-small');

weatherIconSmall.addEventListener('click', toggleWeatherSmall); 

function toggleWeatherSmall() {
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherSmall.setAttribute("src", weatherAudio);
    
    if (weatherSoundSmall.paused) {
        weatherSoundSmall.load();
        weatherSoundSmall.play();
        weatherIconSmall.classList.add('fa-pause');
        weatherIconSmall.classList.remove('fa-cloud-sun-rain');
    } else {
        weatherSoundSmall.pause();
        weatherIconSmall.classList.add('fa-cloud-sun-rain');
        weatherIconSmall.classList.remove('fa-pause');
    }
}

function randomWeatherSmall() {
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)];
    sourcesWeatherSmall.setAttribute("src", weatherAudio);

    for (var i = 0; i < weathers.length; i++) {
        weatherSoundSmall.load();
        weatherSoundSmall.play();
        weatherIconSmall.classList.add('fa-pause');
        weatherIconSmall.classList.remove('fa-cloud-sun-rain');
    }
}

/*
* Weather volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

var volumeWeatherSmall = document.querySelector("#volume-weather-small");

volumeWeatherSmall.addEventListener("change", function(e) {
    weatherSoundSmall.volume = e.currentTarget.value / 100;
});