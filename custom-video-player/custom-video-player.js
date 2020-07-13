const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.querySelector('.progress');
const progressBar = document.getElementById('progress-bar');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
  progress.classList.add('border', 'border-secondary');
}

function updatePlayIcon() {
  const icon = play.parentElement.querySelector('.bi');
  video.paused ? icon.classList.replace('bi-pause', 'bi-play') : icon.classList.replace('bi-play', 'bi-pause');
}

function updateProgress() {
  progressBar.style.width = (video.currentTime / video.duration) * 100 + '%';

  // timestamp минуты/секунды
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + mins;
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + secs;
  }

  timestamp.textContent = `${mins}:${secs}`
}

function setVideoProgress(event) {
  const width = event.target.clientWidth;
  const clickX = event.offsetX;
  const duration = video.duration;

  video.currentTime = (clickX / width) * duration;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
  progress.classList.remove('border', 'border-secondary');
}

// listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setVideoProgress);

addEventListener('keydown', event => {
  if (event.code === 'Space') {
    toggleVideoStatus();
  }
  if (event.code === 'Escape') {
    stopVideo();
  }
});