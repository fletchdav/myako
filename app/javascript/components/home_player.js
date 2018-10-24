const track = document.querySelector('.featured-production-details p')
const audio = document.querySelector('.featured-production-details audio')
const range = document.querySelector('#range');

function togglePlay () {
  range.style.display = "block"
  if (audio.paused) {
    audio.play();
    track.classList.add('playing');
  } else {
    audio.pause();
    track.classList.remove('playing');
  }
}

function handleRange () {
  let progress = audio.currentTime / audio.duration
  range.value = progress *100
}

function handleSkip () {
  audio.currentTime = range.value /100 * audio.duration
}

function homePlayer () {
  range.value = "0"
  track.addEventListener('click', togglePlay)
  audio.addEventListener('timeupdate', handleRange)
  range.addEventListener('change', handleSkip)
}

export { homePlayer };
