//When user clicks “Change background” button, background changes to a random video 

//Arraylist of videos with src and type
var videos = [
    {
        sources: "../videos/mp4/beach-waves-move.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/mp4/fireplace.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/mp4/forest.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/mp4/office.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/mp4/raindrops.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/mp4/reading.mp4",
        types: "video/mp4"
    },
    {
        sources: "../videos/webm/beach-waves-move.webm",
        types: "video/webm"
    },
    {
        sources: "../videos/webm/fireplace.webm",
        types: "video/webm"
    },
    {
        sources: "../videos/webm/forest.webm",
        types: "video/webm"
    },
    {
        sources: "../videos/webm/office.webm",
        types: "video/webm"
    },
    {
        sources: "../videos/webm/raindrops.webm",
        types: "video/webm"
    },
    {
        sources: "../videos/webm/reading.webm",
        types: "video/webm"
    },
];

var sourcesVid = document.getElementById('sourceVideos');
var bgVideo = document.getElementById('bg-video');

function changeBackground() {
    var bgVideos = videos[Math.floor(Math.random() * videos.length)]; //Code got from Kirupa
    var randomChoice = Object.values(bgVideos); //Got code from Javascript.info
    sourcesVid.setAttribute("src", randomChoice[0]); //Got set attribute from W3Schools
    sourcesVid.setAttribute("type", randomChoice[1]);

    bgVideo.load();
    bgVideo.play();
}