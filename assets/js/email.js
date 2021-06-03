/*
*User can send in their questions or feedback via “Contact” page, all fields 
except upload field are required before they can submit the form
*/

//All the code contained in this function was taken from Code Institute's Sending Emails Using EmailJS module
function feedbackForm(contactForm) { 
    emailjs.send('Gmail', 'pom', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.email.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
            alert("Message successfully sent!");
            console.log('SUCCESS', response);
        },
        function(error) {
            alert("Message failed to send.");
            console.log('FAILED', error);
        });

    contactForm.reset(); //Code taken from W3Schools to clear form after every submit
    return false;
}