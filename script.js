document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector('.nav.prev');
  const nextButton = carousel.querySelector('.nav.next');
  
  let currentIndex = 0;

  const updateTrackPosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width + 20; // Slide width + margin
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateTrackPosition();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    updateTrackPosition();
  });
});
