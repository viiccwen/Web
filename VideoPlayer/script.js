const d = document;
var videoFile;
var videoPlayer;
var playerBtn;
var volumeAdjustor;
var progressInfo;
var totalTime;
var currentTime;

window.onload = function () {
    videoFile = d.querySelector(".videofile");
    videoPlayer = d.querySelector(".videoplayer");
    progressInfo = d.querySelector(".progressinfo");
    volumeAdjustor = d.querySelector(".volumn-adjust");


    videoPlayer.addEventListener("timeupdate", function () {
        currentTime = formatTime(videoPlayer.currentTime);
        progressInfo.innerHTML = currentTime + " / " + totalTime;
    });

    videoPlayer.addEventListener("loadedmetadata", function () {
        totalTime = formatTime(videoPlayer.duration);
        progressInfo.innerHTML = currentTime + " / " + totalTime;
    });
}

function VideoLoad() {
    const files = videoFile.files;
    if (files.length > 0) {
        const file = files[0];
        const objectURL = URL.createObjectURL(file);
        videoPlayer.src = objectURL;
        videoPlayer.load();
    }
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return (
        minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds
    );
}

function toplay(e) {
    playerBtn = e.target;
    if (playerBtn.getAttribute("data-target") == "play") {
        videoPlayer.play();
        playerBtn.innerHTML = "暫停";
        playerBtn.setAttribute("data-target", "stop");
    } else if (playerBtn.getAttribute("data-target") == "stop") {
        videoPlayer.pause();
        playerBtn.innerHTML = "播放";
        playerBtn.setAttribute("data-target", "play");
    }
}

function screen(func) {
    if (func == 'inc')
        videoPlayer.style.width = "100%";
    else if (func == 'dec')
        videoPlayer.style.width = "50%";
    else if (func == 'nor')
        videoPlayer.style.width = "70%";
}

function VolumnAdjust() {
    videoPlayer.volume = volumeAdjustor.value;
}