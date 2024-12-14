const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dots span');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

let currentIndex = 0;

function updateCarousel() {

  const offset = -(currentIndex * (items[0].offsetWidth + 20)) + 45;
  carousel.style.transform = `translateX(${offset}px)`;


  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}


dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentIndex = Number(dot.dataset.index);
    updateCarousel();
  });
});

inputField.addEventListener('input', function () {
  if (inputField.value.trim() !== '') {
    submitButton.classList.add('active');
  } else {
    submitButton.classList.remove('active');
  }
});



updateCarousel();


