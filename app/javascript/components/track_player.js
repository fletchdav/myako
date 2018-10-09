const buttons = document.querySelectorAll('.track');
const playerProgress = document.querySelector('.player_progress');
const playerCursor = document.querySelector('.player_cursor');
var audio;

function handleProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  playerCursor.style.left = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / playerProgress.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
  console.log(e);
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
      })
      audio.play();
      buttons.forEach(button => {button.classList.remove('playing')});
      event.currentTarget.classList.add('playing');
    } else {
      audio.play();
    }
  } else {
    audio.pause();
  }
}

function play() {
  buttons.forEach((button) => {
    button.addEventListener("click", toggle);
  });
}

export { play };


playerProgress.addEventListener('click', scrub);
