//When user clicks “Change background” button, background changes to a random video 

//Arraylist of videos with src and type
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
    /*
    {
        sources: "assets/videos/webm/aurora-borealis.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/beach-waves-move.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/car-drive.webm",
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
        sources: "assets/videos/webm/night-sky.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/office.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/pink-sky-and-beach.webm",
        types: "video/webm"
    },
    {
        sources: "assets/videos/webm/rain-on-banana-leaves.webm",
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
    {
        sources: "assets/videos/webm/sunset-by-beach.webm",
        types: "video/webm"
    }
    */
];

var sourcesVid = document.getElementById('sourceVideos');
var bgVideo = document.getElementById('bg-video');

function changeBackground() {
    var bgVideos = videos[Math.floor(Math.random() * videos.length)]; //Code got from Kirupa
    var randomChoice = Object.values(bgVideos); //Got code from Javascript.info
    sourcesVid.setAttribute("src", randomChoice[0]); //Got set attribute from W3Schools
    sourcesVid.setAttribute("type", randomChoice[1]);

    $("div").removeClass("cover-image"); //Got removeClass code from W3Schools
    bgVideo.load();
    bgVideo.play();
}