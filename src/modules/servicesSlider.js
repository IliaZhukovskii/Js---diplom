'use strict';

const servicesSlider = () => {

  //Получение переменных
  let servicesArrow = document.querySelector('.services-arrow');
  let servicesCarousel = document.querySelector('.services-carousel');
  let nextSlide = document.querySelector('.arrow-right');
  let prevSlide = document.querySelector('.arrow-left');
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
          console.log(position);
        }
        if (position > 0) {
          prevSlide.style.visibility = 'visible';
        }
        if (position == 1200) {
          nextSlide.style.visibility = 'hidden';
        }
      }
      //Если экран < 1239px
      if (mediaQueryLap.matches) {
        if (position >= 0 && position < 1600) {
          position += 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
        if (position > 0) {
          prevSlide.style.visibility = 'visible';
        }
        if (position == 1600) {
          nextSlide.style.visibility = 'hidden';
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
        if (position == 0) {
          prevSlide.style.visibility = 'hidden';
        }
        if (position < 1200) {
          nextSlide.style.visibility = 'visible';
        }
      }
      //Если экран < 1239px
      if (mediaQueryLap.matches) {
        if (position <= 1600 && position > 0) {
          position -= 400;
          servicesCarousel.style.marginLeft = -position + 'px';
        }
        if (position == 0) {
          prevSlide.style.visibility = 'hidden';
        }
        if (position < 1600) {
          nextSlide.style.visibility = 'visible';
        }
      }

    }
  });
};


export default servicesSlider;