// const player = document.querySelector('.player');
// const audio = player.querySelector('.audio');
// const playerButton = player.querySelector('.player_button');
// const playerProgress = player.querySelector('.player_progress');
// const playerCursor = player.querySelector('.player_cursor');

// function play() {
//   if(audio.paused) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// }

// function updateButton() {
//   const icon = this.paused ? 'play' : 'pause';
//   console.log(icon);
//   playerButton.textContent = icon;
// }

// function toggleplay() {
// playerButton.addEventListener('click', play);
// }

// function handleProgress() {
//   const percent = (audio.currentTime / audio.duration) * 100;
//   playerCursor.style.left = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / playerProgress.offsetWidth) * audio.duration;
//   audio.currentTime = scrubTime;
//   console.log(e);
// }

// function audioPlayer() {
//   toggleplay();
//   audio.addEventListener('play', updateButton);
//   audio.addEventListener('pause', updateButton);
//   playerProgress.addEventListener('click', scrub);
//   audio.addEventListener('timeupdate', handleProgress);
// }



// export { audioPlayer };

