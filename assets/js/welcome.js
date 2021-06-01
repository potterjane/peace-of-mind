//When user enters page, Welcome function should appear for 5 seconds, with “How are you feeling today?” typed out one letter at a time

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
let feelingText = "How are you feeling?"; //Text shown in desktop screens or larger tablet screens
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