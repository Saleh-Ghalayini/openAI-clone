const dots = document.querySelectorAll('.dots span');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

let currentIndexList = [0,0,0,0,0,0,0];
let offsetList = [45,20,20,20,20,20,20];

function updateCarousel(index, cl ,dir) {
  const carousel = document.querySelector(cl);
  let items;
  if(index==0){
    items= document.querySelectorAll('.carousel-item');
    const offset = -(currentIndexList[index] * (items[0].offsetWidth + 20)) + offsetList[index];
    carousel.style.transform = `translateX(${offset}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndexList[index]);
    });
  }
  else{
    items= document.querySelectorAll('.carousel-item-products-'+index);
    if(dir==1){
      const offset = -(currentIndexList[index] * (items[0].offsetWidth + 20)) + offsetList[index];
      console.log(offset)
      carousel.style.transform = `translateX(${offset}%)`;
    }
    else{
      const offset = (currentIndexList[index] * (items[0].offsetWidth + 20)) - offsetList[index];
      console.log(offset)
      carousel.style.transform = `translateX(${offset}%)`;
    }
   
  }

 
}


dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentIndexList[0] = Number(dot.dataset.index);
    updateCarousel(0,'.carousel' ,0);
  });
});

inputField.addEventListener('input', function () {
  if (inputField.value.trim() !== '') {
    submitButton.classList.add('active');
  } else {
    submitButton.classList.remove('active');
  }
});

function shift(index, nub){
  currentIndexList[index]+=nub;
updateCarousel(index, '.carousel-products-'+index, nub);

}

updateCarousel(0,'.carousel');
updateCarousel(0,'.carousel-products-0',1);
updateCarousel(1,'.carousel-products-1',1);
updateCarousel(2,'.carousel-products-2',1);
updateCarousel(3,'.carousel-products-3',1);
updateCarousel(4,'.carousel-products-4',1);
updateCarousel(5,'.carousel-products-5',1);


