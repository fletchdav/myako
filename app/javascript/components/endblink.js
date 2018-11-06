function endBlink () {
  const featuredGig = document.querySelector('.gig-content');
  featuredGig.classList.add('activeable');
  featuredGig.addEventListener('click', () => {
    featuredGig.classList.remove('activeable');
  });
}

export { endBlink }
