let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
// const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document
  .getElementById('carousel_button--next')
  // document.querySelector('#carousel_button--next')
  .addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    moveToNextSlide();
  });

document
  .getElementById('#carousel_button--prev')
  .addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    moveToPrevSlide();
  });

function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (const slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }

  slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition--;
  }
  updateSlidePosition();
}
