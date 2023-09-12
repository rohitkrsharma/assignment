let currentSlide = 0;

function showSlide(slideIndex) {
  const slider = document.querySelector('.slider');
  const cardWidth = document.querySelector('.card').offsetWidth;
  const offset = -slideIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
  currentSlide = slideIndex;
}

function nextSlide() {
  if (currentSlide < 4) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

showSlide(currentSlide);
