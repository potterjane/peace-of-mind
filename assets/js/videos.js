//When user clicks “Change background” button, background changes to a random video 

let videos = [
    {
        sources: "assets/videos/mp4/beach-waves-move.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/fireplace.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/forest.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/office.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/raindrops.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/reading.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/webm/beach-waves-move.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/fireplace.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/forest.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/office.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/raindrops.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/reading.webm",
        types: "video/webm"
    },
];

let sourcesVid = document.getElementById('sourceVideos');
let bgVideo = document.getElementById('bg-video');

function changeBackground() {
    let bgVideos = videos[Math.floor(Math.random() * videos.length)]; //Code got from
    let randomChoice = Object.values(bgVideos); //Got code from
    sourcesVid.setAttribute("src", randomChoice[0]); //Got set attribute from
    sourcesVid.setAttribute("type", randomChoice[1]);

    bgVideo.load();
    bgVideo.play();
}