'use strict';

const servicesSlider = () => {

  //Получение переменных
  let servicesArrow = document.querySelector('.services-arrow');
  let servicesCarousel = document.querySelector('.services-carousel');
  let position = 0;

  servicesArrow.addEventListener('click', (e) => {
    //В право
    if (e.target.matches('.arrow-right')) {
      if (position == 0) {
        servicesCarousel.style.marginLeft = -1200 + 'px';
        position = -1200;
      }
    }
    //В лево
    if (e.target.matches('.arrow-left')) {
      if (position == -1200) {
        servicesCarousel.style.marginLeft = 0 + 'px';
        position = 0;
      }
    }
  });
};


export default servicesSlider;