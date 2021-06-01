//Header section for smaller screens, collapse side navbar code taken from W3Schools

function openNav() {
    document.getElementById("mobSidebar").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.getElementById("small-title").style.marginLeft = "250px";
    document.getElementById("main-home").style.marginLeft = "250px";
    document.getElementById("footer-home").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mobSidebar").style.width = "0";
    document.getElementById("header").style.marginLeft= "0";
    document.getElementById("small-title").style.marginLeft = "0";
    document.getElementById("main-home").style.marginLeft = "0";
    document.getElementById("footer-home").style.marginLeft = "0";
}