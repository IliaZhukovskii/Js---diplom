'use strict';

let link = () => {
  //Плавная прокрутка страницы при клике на ссылки
  let animateLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let link of animateLinks) {
    link.addEventListener('click', e => {
      e.preventDefault();
      let id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  //Кнопка на верх
  let trackScroll = () =>{
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight - 700;

    if (scrolled > coords) {
      up.style.display = 'block';
    }
    if (scrolled < coords) {
      up.style.display = 'none';
    }
  };
  let  backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 10);
    }
  };

  let up = document.querySelector('.upTop');
  window.addEventListener('scroll', trackScroll);
  up.addEventListener('click', backToTop);
};

export default link;