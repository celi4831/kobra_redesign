window.addEventListener("load", myVideoControls);

// Video
let video = document.querySelector("#pilotvideo");

//Buttons
let playButton = document.querySelector("#play-pause");
let muteButton = document.querySelector("#mute");
let fullScreenButton = document.querySelector("#full-screen");

//Sliders
let seekBar = document.querySelector("#seek-bar");
let volumeBar = document.querySelector("#volume-bar");


function myVideoControls() {


    // Event listener for play/pause button
    playButton.addEventListener("click", myPlay);

    // Event listener for mute botton
    muteButton.addEventListener("click", myMute);

    // Event listener for full-screen button
    fullScreenButton.addEventListener("click", myFullscreen);

    // Event listener for seek bar
    seekBar.addEventListener("change", mySeekBar);

    // Update seek bar as the video plays
    video.addEventListener("timeupdate", myTimeupdate);

    // Event listener for volume bar
    volumeBar.addEventListener("change", myVolumeBar);

}


function myPlay() {
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
    } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
    }
}

function myMute() {
    if (video.muted == false) {
        // Mute the video
        video.muted = true;

        // Update the button text
        muteButton.innerHTML = "Unmute";
    } else {
        // Unmute the video
        video.muted = false;

        // Update the button text
        muteButton.innerHTML = "Mute";
    }

}

function myFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen(); // Chrome and Safari
    }
}

function mySeekBar() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
}

function myTimeupdate() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
}

function myVolumeBar() {
    // Update the video volume
    video.volume = volumeBar.value;
}
