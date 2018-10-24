
function scroll() {
  let navbarHeight = document.querySelector('.navbar-wagon').offsetHeight;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(anchor.getAttribute('href'));
        let height = target.offsetTop;
        window.scrollTo({
          top: height - navbarHeight,
          behavior: 'smooth'
        });
      });
  });

  window.addEventListener('scroll', function (e) {
    document.querySelectorAll('.label_content').forEach(label => {
      let labelTop = label.offsetTop;
      let labelBottom = label.offsetTop + label.offsetHeight;
      let labelId = label.dataset['label'];
      let labelListItem = document.querySelector('.labels_list').querySelector(`[data-label=${labelId}]`)
      if ((window.scrollY >= labelTop - navbarHeight) && (window.scrollY <= labelBottom - navbarHeight)) {
        labelListItem.classList.add('active');
      } else {
        labelListItem.classList.remove('active');
      }
    });
  });
}

export { scroll }
