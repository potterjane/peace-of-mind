/*
* User clicks the 'Want inspiration?' button to get a random inspirational quotes
* Got help from SoloLearn on how to get data from API
* Quotes sourced from 'Quotes Free API'
*/

document.addEventListener("click", function (event) {
    if (!event.target.matches("#quotesBtn")) return; //Checking if the button was clicked
    
    fetch("https://type.fit/api/quotes") //Using fetch API to request the endpoint for random quotes
        .then(function(response) {
            return response.json(); //fetch returns a response object which we pass to a JavaScript object
        })
        .then(function(data) { //Result of that data gets passed to the innerHTML below
        var randomIndex = Math.floor(Math.random()*data.length);
        document.getElementById("text").innerHTML = '<i class="fas fa-quote-left"></i> <br>'+data[randomIndex].text;
        document.getElementById("author").innerHTML = '-' + data[randomIndex].author;
    });
    
});