/*
* User can send in their questions or feedback via “Contact” page
* All fields except upload field are required before they can submit the form
* All the code contained in the following function was taken from Code Institute's Sending Emails Using EmailJS module
*/

function feedbackForm(contactForm) { 
    emailjs.send('Gmail', 'pom', { //Service ID(Gmail), Template ID(pom, i.e. for peace of mind)
        'from_name': contactForm.name.value, //Get the value from the text input and add it to the email template
        'from_email': contactForm.email.value, //Get the value from the email input and add it to the email template
        'message': contactForm.message.value //Get the value from the message textarea and add it to the email template
    })
    .then(
        function(response) {
            alert("Message successfully sent!"); //Alert users with a pop-up message when message was sent sucessfully
            console.log('SUCCESS', response);
        },
        function(error) {
            alert("Message failed to send."); //Alert users with a pop-up message when message failed to send
            console.log('FAILED', error);
        });

    contactForm.reset(); //Code taken from W3Schools to clear form after every submit
    return false;
}