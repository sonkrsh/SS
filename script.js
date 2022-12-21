const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goPrev = () => {
  counter--;
  slideImage();
};
const goNext = () => {
  if (slides.length - 1 > counter) {
    counter++;
    slideImage();
  }
};
