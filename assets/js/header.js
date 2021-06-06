/*
* Header section for smaller screens
* Collapsed sidebar code taken from W3Schools
*/

function openNav() { //Function that opens the sidebar when user clicks the '☰'
    document.getElementById("mobSidebar").style.width = "250px"; //Moves the navigation links section to the right with 250px
    document.getElementById("header").style.marginLeft = "250px"; //Moves the '☰' to the right with 250px
}
  
function closeNav() { //Function that closes the sidebar when user clicks the 'x'
    document.getElementById("mobSidebar").style.width = "0"; //Moves the navigation links section back to the left from 250px to 0
    document.getElementById("header").style.marginLeft= "0"; //Moves the '☰' back to the left from 250px to 0
}