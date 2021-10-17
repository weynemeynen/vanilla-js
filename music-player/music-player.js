const doc = document,
  musicContainer = doc.getElementById('music-container'),
  prevBtn = doc.getElementById('prev'),
  playBtn = doc.getElementById('play'),
  nextBtn = doc.getElementById('next'),
  audio = doc.getElementById('audio'),
  progressBar = doc.getElementById('progress-bar'),
  progress = progressBar.closest('.progress'),
  title = doc.getElementById('title'),
  cover = doc.getElementById('cover');

// Названия песен
const songs = [
  'Sun-King',
  'She-Came-In-Through-The-Bathroom-Window',
  'You-Never-Give-Me-Your-Money',
  'Golden-Slumbers',
  'The-End',
  'The-End-you-make',
  'autogenous-training-for-alcohol-abusers'
];

let songIndex = 3;

loadSong(songs[songIndex]);

function titleWithoutВash(str) {
  return str.split('-').join(' ');
}

function loadSong(song) {
  title.innerText = titleWithoutВash(song);
  cover.src = `images/${song}.jpg`;
  audio.src = `music/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn
    .querySelector('[class*="bi-"]')
    .classList.replace('bi-play', 'bi-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn
    .querySelector('[class*="bi-"]')
    .classList.replace('bi-pause', 'bi-play');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(event) {
  const { duration, currentTime } = event.target;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function setProgress(event) {
  const width = event.target.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// слушатели событий
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// переключение песен
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// анимация progress-bar
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
// по окончанию песни
audio.addEventListener('ended', nextSong);
