/*
* At "Home" page, when user clicks on the sound Weather icon or the previous/next icon, 
a random sound effect should be played in a loop until they either click the icon again 
to stop playing the sound or click the “Reset all” button to reload page. 
* User can also control the volume. 
* Users cannot click to resume to the same sound. Pause method is used to stop the audio, not pause.
*/

//Weathers-array
var weathers = [
    "assets/audio/weather/heavy-rain.mp3",
    "assets/audio/weather/rain-and-thunder.mp3",
    "assets/audio/weather/rain-on-umbrella.mp3",
    "assets/audio/weather/rain-on-window.mp3",
    "assets/audio/weather/rain.mp3",
    "assets/audio/weather/thunder.mp3"
];

//For desktop and larger tablet screens
var sourcesWeatherBig = document.getElementById('sourceWeatherBig'); //Source id taken from index.html
var weatherSoundBig = document.getElementById('weather-sound-big'); //Audio id taken from index.html
var weatherIconBig = document.getElementById('weather-icon-big'); //Weather icon id taken from index.html

weatherIconBig.addEventListener('click', toggleWeatherBig); //Added click event to the weather icon id

function toggleWeatherBig() { //Sound function for the weather icon
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherBig.setAttribute("src", weatherAudio); //Adds random weathers audio to the src attribute in index.html
    
    if (weatherSoundBig.paused) { 
        weatherSoundBig.load();
        weatherSoundBig.play(); //If sound is playing, add stop icon and remove the weather icon
        weatherIconBig.classList.add('fa-stop'); 
        weatherIconBig.classList.remove('fa-cloud-sun-rain');
    } else {
        weatherSoundBig.pause(); //If sound is on pause method, add the weather icon and remove the stop icon
        weatherIconBig.classList.add('fa-cloud-sun-rain');
        weatherIconBig.classList.remove('fa-stop');
    }
}

function randomWeatherBig() { //Sound function for the previous and next icons
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherBig.setAttribute("src", weatherAudio); //Adds random weathers audio to the src attribute in index.html

    for (var i = 0; i < weathers.length; i++) { //Loops the weathers-array
        weatherSoundBig.load();
        weatherSoundBig.play(); //If sound is playing, add stop icon and remove the weather icon
        weatherIconBig.classList.add('fa-stop');
        weatherIconBig.classList.remove('fa-cloud-sun-rain');
    }
}

//For smaller tablet and mobile screens
var sourcesWeatherSmall = document.getElementById('sourceWeatherSmall'); //Source id taken from index.html
var weatherSoundSmall = document.getElementById('weather-sound-small'); //Audio id taken from index.html
var weatherIconSmall = document.getElementById('weather-icon-small'); //Weather icon id taken from index.html

weatherIconSmall.addEventListener('click', toggleWeatherSmall); //Added click event to the weather icon id

function toggleWeatherSmall() { //Sound function for the weather icon
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherSmall.setAttribute("src", weatherAudio); //Adds random weathers audio to the src attribute in index.html
    
    if (weatherSoundSmall.paused) {
        weatherSoundSmall.load();
        weatherSoundSmall.play(); //If sound is playing, add stop icon and remove the weather icon
        weatherIconSmall.classList.add('fa-stop');
        weatherIconSmall.classList.remove('fa-cloud-sun-rain');
    } else {
        weatherSoundSmall.pause(); //If sound is on pause method, add the weather icon and remove the stop icon
        weatherIconSmall.classList.add('fa-cloud-sun-rain');
        weatherIconSmall.classList.remove('fa-stop');
    }
}

function randomWeatherSmall() { //Sound function for the previous and next icons
    var weatherAudio = weathers[Math.floor(Math.random() * weathers.length)]; //Got a random audio file from weathers-array
    sourcesWeatherSmall.setAttribute("src", weatherAudio); //Adds random weathers audio to the src attribute in index.html

    for (var i = 0; i < weathers.length; i++) { //Loops the weathers-array
        weatherSoundSmall.load();
        weatherSoundSmall.play(); //If sound is playing, add stop icon and remove the weather icon
        weatherIconSmall.classList.add('fa-stop');
        weatherIconSmall.classList.remove('fa-cloud-sun-rain');
    }
}

/*
* Weather volume control
* Code taken from StackOverflow on how to add volume control function in JavaScript
*/

//For desktop and larger tablet screens
var volumeWeatherBig = document.querySelector("#volume-weather-big"); //Volume weather id taken from index.html

volumeWeatherBig.addEventListener("change", function(e) { //Added change event to the volume weather id
    weatherSoundBig.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});

//For smaller tablet and mobile screens
var volumeWeatherSmall = document.querySelector("#volume-weather-small"); //Volume weather id taken from index.html

volumeWeatherSmall.addEventListener("change", function(e) { //Added change event to the volume weather id
    weatherSoundSmall.volume = e.currentTarget.value / 100; //Updates the volume when slider is moved
});