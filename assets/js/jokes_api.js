/*
* Laughter is the best medicine to reduce stress and anxiety. User clicks the 'Wanna hear a joke?' button to get a random joke
* Got help from SnipCart on how to get jokes data from API
* Jokes sourced from user 15Dkatz's 'official_joke_api' on GitHub
*/

document.addEventListener("click", function (event) {
    if (!event.target.matches("#jokesBtn")) return; //Checking if the button was clicked
  
    fetch ("https://official-joke-api.appspot.com/random_joke") //Using fetch API to request the endpoint for random jokes
      .then((response) => response.json()) //fetch returns a response object which we pass to a JavaScript object
      .then((data) => getJoke(data)); //Result of that data gets passed to the function below
});
  
function getJoke(data) {
    const setup = document.getElementById("setup"); //Create variable for the setup object
    const punchline = document.getElementById("punchline"); //Create punchline for the punchline object
    setup.innerHTML = data.setup; //Get the respective object's key and put it in the innerHTML
    punchline.innerHTML = data.punchline; //Get the respective object's key and put it in the innerHTML
}