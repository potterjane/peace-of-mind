https://official-joke-api.appspot.com/jokes/random

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://official-joke-api.appspot.com/jokes/random"); //Used GET method to retrieve data from the server (via the URL)
xhr.send(); //Used to send the request to retrieve data from the server

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //Checking that the operation has been completed (with readyState == 4) and the request succeeded and content delivered (with status == 200)
        document.getElementById("main-jokes").innerHTML = this.responseText; //Changes its innerHTML to the response text that comes back from the xhr object
    }
};