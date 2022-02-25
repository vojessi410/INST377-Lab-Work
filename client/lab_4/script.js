let slidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;

console.log(slides);

document.
    document.querySelector('carousel_button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });

document.
    document.querySelector('carousel_button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        console.log(slide);
    }
}

function moveToNextSlide() {
    updateSlidePosition();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
};

function moveToPrevSlide() {
    updateSlidePosition();

    if (slidePosition === 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
};


