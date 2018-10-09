const buttons = document.querySelectorAll('.track');

const toggle = () => {
  const audio = event.currentTarget.querySelector('.audio')
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
