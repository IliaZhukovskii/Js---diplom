'use strict';

const servicesSlider = () => {

  //Получение переменных
  let servicesArrow = document.querySelector('.services-arrow');
  let servicesCarousel = document.querySelector('.services-carousel');
  let prev = document.querySelector('.arrow-left');
  let next = document.querySelector('.arrow-right');
  let slides = document.querySelectorAll('.col-sm-6 > .element');
  
  servicesArrow.addEventListener('click', (e) =>{
    if(e.target.classList.contains('arrow-left')){
      servicesCarousel.style.marginLeft = 600 + 'px';
    }
    
  });

};


export default servicesSlider;