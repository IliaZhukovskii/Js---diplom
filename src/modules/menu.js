'use strict';


let menu = () => {
  //Получение элементов со страницы
  let menu = document.querySelector('menu');

  //Открытие/закрытие меню
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };


  document.addEventListener('click', e => {
    //Закрытие по кнопке, пункту меню
    if (e.target.closest('.menu') ||
      e.target.classList.contains('close-btn') ||
      e.target.closest('menu>ul>li>a')) {
      handleMenu();
    }
  });

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

export default menu;