import "bootstrap";

// import { audioPlayer } from '../components/player';
// audioPlayer();

import { play } from '../components/track_player';
if (document.querySelector('.track')) {
  play();
}



import { mobilemenu } from '../components/mobilemenu';
mobilemenu();
