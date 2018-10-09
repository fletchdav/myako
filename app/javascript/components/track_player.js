const buttons = document.querySelectorAll('.track');
const playerProgress = document.querySelector('.player_progress');
const playerCursor = document.querySelector('.player_cursor');
const playerButton =document.querySelector('#play');
const nextButton =document.querySelector('#next');
const previousButton =document.querySelector('#previous');
var audio;
const trackList = document.querySelector('.audio');

function handleProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  playerCursor.style.left = `${percent}%`;
}

function scrub(e) {
  if (document.querySelector('.playing')) {
    audio = document.querySelector('.playing').querySelector('audio')
    const scrubTime = (e.offsetX / playerProgress.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
  }
}

function updateButton() {
  if (document.querySelector('.running')) {
    playerButton.innerText = 'PAUSE'
  } else {
  playerButton.innerText = 'PLAY'
  }
}

function toggleButton() {
    if  (document.querySelector('.running')) {
    audio = document.querySelector('.running');
    audio.pause();
    audio.classList.remove('running');
    audio.parentElement.classList.remove('track_running');
    updateButton();
  } else if (document.querySelector('.playing')) {
    audio = document.querySelector('.playing').querySelector('.audio')
    audio.play();
    audio.classList.add('running');
    audio.parentElement.classList.add('track_running');
    updateButton();
  } else {

  }
}

const toggle = () => {
  audio = event.currentTarget.querySelector('.audio')
  audio.addEventListener('timeupdate', handleProgress);
  if (audio.paused) {
    if (audio.currentTime == 0) {
      const audios = document.querySelectorAll('.audio');
      audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.classList.remove('running');
        audio.parentElement.classList.remove('track_running');
      })
      audio.play();
      buttons.forEach(button => {button.classList.remove('playing')});
      event.currentTarget.classList.add('playing');
      audio.classList.add('running');
      audio.parentElement.classList.add('track_running');
    } else {
      audio.play();
      audio.classList.add('running');
      audio.parentElement.classList.add('track_running');
    }
  } else {
    audio.pause();
    audio.classList.remove('running');
    audio.parentElement.classList.remove('track_running');
  }
  updateButton();
}

function play() {
  buttons.forEach((button) => {
    button.addEventListener("click", toggle);
  });
}

playerProgress.addEventListener('click', scrub);
playerButton.addEventListener('click', toggleButton);

function next() {
  // trouver l'index de audio active dans tracklist
  // index + 1
  // jouer l'audio correspondante
}

nextButton.addEventListener('click', next);

export { play };

