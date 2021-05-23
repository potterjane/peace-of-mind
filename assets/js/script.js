/*--When user enters page, Welcome function should appear for 5 seconds, with “How are you today?” typed out one letter at a time--*/

/*--Code taken from Conor Bailey's instructional Youtube video on how to place welcome text in front of the website for 5 seconds--*/
const welcome = document.querySelector('.welcome');

document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=>{
        welcome.classList.add('displayNone');
    }, 5000);
})

/*--/Code taken from Conor Bailey's instructional Youtube video on how to place welcome text in front of the website for 5 seconds--*/

/*--Code taken from Maximus McCullough's Youtube instructional video on how to use JS to type in one letter at a time--*/
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
/*--/Code taken from Maximus McCullough's Youtube instructional video on how to use JS to type in one letter at a time--*/


function sounds() {
    /*--At Home page, when user clicks on an icon, a random sound effect should be played until they click either “Reset all” or the icon again for pause. 
    User should also be able to control the volume and change sound effect any time. Sound effect should be played in a loop in infinity until window is closed, 
    user clicks “Reset all” or when user clicks pause.--*/
}

function resetAll() {
    /*--When user clicks “Reset all”, all the sound effects and background are reset/turn off/cancelled--*/
}

function changeBackground() {
    /*--When user clicks “Change background”, background changes--*/
}

/* --------------------------------------------------------------------------------------------------------------------------------------------Contact page */

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
