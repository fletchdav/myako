import "bootstrap";

// import { audioPlayer } from '../components/player';
// audioPlayer();

import { play } from '../components/track_player';
if (document.querySelector('.track')) {
  play();
}

import { mobilemenu } from '../components/mobilemenu';
mobilemenu();

import { scroll } from '../components/scroll';
if (document.querySelector('a[href^="#"]')) {
  scroll();
}


import { endBlink } from '../components/endblink';
if (document.querySelector('.gig-content')) {
  endBlink();
}

import { homePlayer } from '../components/home_player';
if (document.querySelector('.featured-production-details')) {
  homePlayer();
}

import { instaBlink } from '../components/insta';
if(document.querySelector('.insta')) {
  instaBlink();
}

