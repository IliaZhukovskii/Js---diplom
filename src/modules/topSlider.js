'use strict';

const topSlider = () => {

  //Получение переменных
  let slides = document.querySelectorAll('.item');
  let currentSlide = 0;
  

  const autoSlide = () => {
    slides[currentSlide].style.display = 'none';
    currentSlide++;
  
    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    slides[currentSlide].style.display = 'block';
  };

  //Автопрокрутка слайдов
  const start = () => {
    setInterval(autoSlide, 3000);
  };

  start();

};


export default topSlider;