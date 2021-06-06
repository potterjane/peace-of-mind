/*
* When user enters page, Welcome function should appear for 5 seconds, with “How are you feeling today?” typed out one letter at a time
* Code taken from Conor Bailey's instructional Youtube video on how to place welcome text in front of the website for 5 seconds
* Code taken from Maximus McCullough's Youtube instructional video on how to use JavaScript to type in one letter at a time
*/

const welcome = document.querySelector('.welcome'); //Welcome class taken from index.html

if (!sessionStorage.isVisited) { //Got this if/else and sessionStorage code from SitePoint, this helps show the preloader (Welcome page) only once per visit
    sessionStorage.isVisited = 'true'; 
    document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=>{
        welcome.classList.add('displayNone');
    }, 5000); //If user enters page in new session, show Welcome page for 5 seconds
    })
} else {
    $('.welcome').hide(); //If user reloads page in same session, do not show Welcome page
}

let feelingText = "How are you feeling?"; //Text for Welcome page
let feelingArray = feelingText.split(""); //Split the text per letter
let feelingTimer; 

function feeling() {
    if (feelingArray.length > 0) {
        document.getElementById('feeling').innerHTML += feelingArray.shift(); //Adds Welcome text one letter at a time until there are no more letters in feelingText
    } else {
        clearTimeout(feelingTimer);
        return false;
    }
    feelingTimer = setTimeout('feeling()', 110); //Sets timer of how long it takes for each letter to load into the page
}

feeling(); //Added this to load the text in the Welcome page when user enters page in new session