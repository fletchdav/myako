const controls = document.querySelector('.controls');
const buttons = document.querySelectorAll('.track');
const playerProgress = document.querySelector('.player_progress');
const playerCursor = document.querySelector('.player_cursor');
const playerButton =document.querySelector('#play');
const nextButton =document.querySelector('#next');
const previousButton =document.querySelector('#previous');
const trackList = [];
let audio;
let indexPlaying = 0;
document.querySelectorAll('.audio').forEach(audio => trackList.push(audio));

function handleProgress() {
  const audioPlaying = document.querySelector('.playing').querySelector('.audio');
  const percent = (audioPlaying.currentTime / audioPlaying.duration) * 100;
  playerCursor.style.left = `${percent}%`;
}

function scrub(e) {
  if (document.querySelector('.playing')) {
    audio = document.querySelector('.playing').querySelector('audio')
    if (audio.duration !== Infinity) {
      const scrubTime = (e.offsetX / playerProgress.offsetWidth) * audio.duration;
      audio.currentTime = scrubTime;
    }
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
    playerCursor.style.background = "white";
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
    audio = trackList[0];
    audio.play();
    audio.classList.add('running');
    audio.parentElement.classList.add('track_running');
    audio.parentElement.classList.add('playing');
    updateButton();
    audio.addEventListener('timeupdate', handleProgress);
  }
}

const toggle = () => {
  playerCursor.style.background = "white";
  controls.style.display = "flex";
  audio = event.currentTarget.querySelector('.audio')
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
  audio.addEventListener('timeupdate', handleProgress);
  updateButton();
  autoNext();
}

function play() {
  buttons.forEach((button) => {
    button.addEventListener("click", toggle);
  });
  playerProgress.addEventListener('click', scrub);
  playerButton.addEventListener('click', toggleButton);
  nextButton.addEventListener('click', next);
  previousButton.addEventListener('click', previous);
}





// next
function next() {
  let audioToPlay;
  let audioPlaying = document.querySelector('.playing').querySelector('.audio');
  indexPlaying = trackList.indexOf(audioPlaying);
  audioPlaying.pause();
  audioPlaying.currentTime = 0;
  audioPlaying.classList.remove('running');
  audioPlaying.parentElement.classList.remove('track_running');
  audioPlaying.parentElement.classList.remove('playing');
  if (indexPlaying == trackList.length - 1) {
    audioToPlay = trackList[0];
  } else {
    audioToPlay = trackList[indexPlaying + 1];
  }
  audioToPlay.play();
  audioToPlay.parentElement.classList.add('playing');
  audioToPlay.classList.add('running');
  audioToPlay.parentElement.classList.add('track_running');
  audioToPlay.addEventListener('timeupdate', handleProgress);
  updateButton();
  autoNext();
}

// previous
function previous() {
  let audioToPlay;
  let audioPlaying = document.querySelector('.playing').querySelector('.audio');
  indexPlaying = trackList.indexOf(audioPlaying);
  audioPlaying.pause();
  audioPlaying.currentTime = 0;
  audioPlaying.classList.remove('running');
  audioPlaying.parentElement.classList.remove('track_running');
  audioPlaying.parentElement.classList.remove('playing');
  if (indexPlaying == 0) {
    audioToPlay = trackList[trackList.length - 1];
  } else {
    audioToPlay = trackList[indexPlaying - 1];
  }
  audioToPlay.play();
  audioToPlay.parentElement.classList.add('playing');
  audioToPlay.classList.add('running');
  audioToPlay.parentElement.classList.add('track_running');
  audioToPlay.addEventListener('timeupdate', handleProgress);
  updateButton();
  autoNext();
}

function autoNext() {
  let audioPlaying = document.querySelector('.playing').querySelector('.audio');
  audioPlaying.addEventListener('ended', next);
}

export { play };

