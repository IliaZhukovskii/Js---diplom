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
  
};

export default link;