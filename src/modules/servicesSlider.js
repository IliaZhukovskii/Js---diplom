'use strict';

const servicesSlider = () => {

  //Получение переменных
  let servicesArrow = document.querySelector('.services-arrow');
  let servicesCarousel = document.querySelector('.services-carousel');
  let mediaQueryDesctop = window.matchMedia('(min-width: 1240px)');
  let mediaQueryLap = window.matchMedia('(max-width: 1239px)');
  let position = 0;

  servicesArrow.addEventListener('click', (e) => {
    //В право
    if (e.target.matches('.arrow-right')) {
      //Если экран > 1240px
      if (mediaQueryDesctop.matches) {
        if (position >= 0 && position < 1200) {
          position += 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
      }
      //Если экран < 1239px
      if (mediaQueryLap.matches) {
        if (position >= 0 && position < 1600) {
          position += 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
      }
    }
    //В лево
    if (e.target.matches('.arrow-left')) {
      //Если экран > 1240px
      if (mediaQueryDesctop.matches) {
        if (position <= 1200 && position > 0) {
          position -= 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
      }
      //Если экран < 1239px
      if (mediaQueryLap.matches) {
        if (position <= 1600 && position > 0) {
          position -= 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
      }

    }
  });
};


export default servicesSlider;