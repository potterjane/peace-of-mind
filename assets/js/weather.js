//At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
//User should also be able to control the volume and change sound effect any time. 
//Sound effect should be played in a loop in infinity until window is closed, or user clicks “Reset all”, or when user clicks pause.

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