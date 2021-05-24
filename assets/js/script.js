/* --------------------------------------------------------------------------------------------------------------------------------------------Welcome section */
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

/* --------------------------------------------------------------------------------------------------------------------------------------------Audio section */
function sounds() {
    /*--At Home page, when user clicks on an icon, a random sound effect should be played until 
    they click either “Reset all” or the icon again for pause. 
    User should also be able to control the volume and change sound effect any time. Sound effect 
    should be played in a loop in infinity until window is closed, 
    user clicks “Reset all” or when user clicks pause.--*/
}

/* --------------------------------------------------------------------------------------------------------------------------------------------Reset section */
function resetAll() {
    /*--When user clicks “Reset all”, all the sound effects and background are reset/turn off/cancelled--*/
}

/* --------------------------------------------------------------------------------------------------------------------------------------------Video section */
/*--When user clicks “Change background” button, background changes--*/

/*--Following function adds video sources via Javascript, code taken from Burn Ignorance--*/

//Video array
let videoSource = new Array();
videoSource[0] = 'assets/videos/mp4/beach-waves-move.mp4';
videoSource[1] = 'assets/videos/mp4/beach-waves-still.mp4';
videoSource[2] = 'assets/videos/mp4/fireplace.mp4';
videoSource[3] = 'assets/videos/mp4/forest.mp4';
videoSource[4] = 'assets/videos/mp4/office.mp4';
videoSource[5] = 'assets/videos/mp4/puppy-sleeping.mp4';
videoSource[6] = 'assets/videos/mp4/raindrops.mp4';
videoSource[7] = 'assets/videos/mp4/reading.mp4';
videoSource[8] = 'assets/videos/mp4/river-flowing.mp4';

/*--/Following function adds video sources via Javascript, code taken from Burn Ignorance--*/

$('#bgvid').append(videoSource);

//Get video element
let bgVid = document.getElementById('bgvid');

//Get button element
let vidBtn = document.getElementById('main-bg-btn');

//Click event listener, code taken from learn-webdev's Youtube instructional video
vidBtn.addEventListener('click', function() {
    //Randomize the videos
    var randomVid = videoSource[Math.floor(Math.random() * videoSource.length)]
});


/* --------------------------------------------------------------------------------------------------------------------------------------------Contact section */

/*--User can send in their questions or feedback via “Contact” page, all fields are required before they can submit the form--*/
/*--All the code contained in this function was taken from Code Institute's Sending Emails Using EmailJS module--*/
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
    return false;

}
/*--/All the code contained in this function was taken from Code Institute's Sending Emails Using EmailJS module--*/
