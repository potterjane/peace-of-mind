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

function sounds() {
    
}

//----------------------------------------------------------------------------------------------------------------------------------------------------Reset section
//When user clicks “Reset all”, all the sound effects and background are reset/turn off/cancelled

function resetAll() {

}

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

let sources = document.getElementsByTagName('source')[0].getAttribute("src"); //Code on how to get attribute was found on MDN Webdocs
let types = document.getElementsByTagName('source')[0].getAttribute("type"); //Code on how to get attribute was found on MDN Webdocs

function changeBackground() {
    for (let i = 0; i <= videos.length; i++) {
        console.log(videos[i]);
    };
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
    return false;
}