//When user clicks “Change background” button, background changes to a random video 

//Videos-array with src and type
var videos = [
    {
        sources: "assets/videos/mp4/aurora-borealis.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/beach-waves-move.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/car-drive.mp4",
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
        sources: "assets/videos/mp4/night-sky.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/office.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/pink-sky-and-beach.mp4",
        types: "video/mp4"
    },
    {
        sources: "assets/videos/mp4/rain-on-banana-leaves.mp4",
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
        sources: "assets/videos/mp4/sunset-by-beach.mp4",
        types: "video/mp4"
    }
];

var sourcesVid = document.getElementById('sourceVideos'); //Source id taken from index.html
var bgVideo = document.getElementById('bg-video'); //Video id taken from index.html

function changeBackground() { //Background video function
    var bgVideos = videos[Math.floor(Math.random() * videos.length)]; //Got a random video file from videos-array, code got from Kirupa
    var randomChoice = Object.values(bgVideos); //Got this method to return the videos-array values from Javascript.info
    sourcesVid.setAttribute("src", randomChoice[0]); //Adds random videos to the src attribute in index.html, got set attribute from W3Schools
    sourcesVid.setAttribute("type", randomChoice[1]); //Adds random videos to the type attribute in index.html, got set attribute from W3Schools

    $("div").removeClass("cover-image"); //When user clicks 'Change background' button, main background image is removed, got removeClass code from W3Schools
    bgVideo.load();
    bgVideo.play();
}