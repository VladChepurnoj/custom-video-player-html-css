const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play and pause
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update icons
function updatePlayButton() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x" ></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x" ></i>';
  }
}

//update progress & timestamp
function updateProgress() {
  return true;
}

//set video progress
function setVideoProgress() {
  return true;
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//event list
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("play", updatePlayButton);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
