//Header section for smaller screens, collapse side navbar code taken from W3Schools

function openNav() {
    document.getElementById("mobSidebar").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mobSidebar").style.width = "0";
    document.getElementById("header").style.marginLeft= "0";
}