let i = 0;
var intervalID;
const instaPhotos = [];
document.querySelectorAll('.insta-photo').forEach(photo => instaPhotos.push(photo));
const length = instaPhotos.length;

function imageClassChange () {
  instaPhotos[i].classList.add('active');
  if (i > 0 && i < length - 1) {
    instaPhotos[i - 1].classList.remove('active');
    i = i + 1;
  } else if (i == 0) {
    instaPhotos[length - 1].classList.remove('active');
    i = i + 1;
  } else if (i == length - 1) {
    instaPhotos[i - 1].classList.remove('active');
    i = 0;
  }
}

function gigClassChange () {
  if (document.querySelector('.activeable')) {
    const featuredGig = document.querySelector('.activeable');
    featuredGig.classList.toggle('active');
  }
}


function instaBlink() {
  intervalID = setInterval(function () {
    imageClassChange();
    gigClassChange();
  }, 1000);
}

export { instaBlink }

  // instaPhotos[i].classList.add('active');
  // if (i > 0) {
  //   instaPhotos[i - 1].classList.remove('active');
  //   i = i + 1;
  // } else if (i = 0) {
  //   instaPhotos[length - 1].classList.remove('active');
  //   i = i + 1;
  // } else if (i = lenght - 1) {
  //   instaPhotos[i - 1].classList.remove('active');
  //   i = 0;
  // }
