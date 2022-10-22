import Player from "@vimeo/player"
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const onPlay = throttle((data)=>{
    localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000);

player.on('timeupdate', onPlay);

function backtime() {
    try {
        const saveVideo = localStorage.getItem(STORAGE_KEY)
    if (saveVideo) {
        return JSON.parse(saveVideo)
    }
    } catch (error) {
        console.log("error ", error)
    }
}

player.setCurrentTime(backtime()).then(function(seconds) {
    console.log(seconds)
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
});