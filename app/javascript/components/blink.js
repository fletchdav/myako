function endBlink () {
  const featuredGig = document.querySelector('.gig-content');
  featuredGig.classList.add('featured-gig');
  featuredGig.addEventListener('click', () => {
    featuredGig.classList.remove('featured-gig');
  });
}

export { endBlink }
