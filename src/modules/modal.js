'use strict';

import {
  animateOpen
} from './helpers';

let modal = () => {
  //Получение элементов со страницы
  let modal = document.querySelector('.popup');
  let buttons = document.querySelectorAll('.popup-btn');
  let modalContent = modal.querySelector('.popup-content');
  let mediaQuery = window.matchMedia('(min-width: 768px)');
  

  //Открытие модального окна
  for (let btn of buttons) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (mediaQuery.matches) {
        animateOpen(modalContent);
      }
    });
  }

  //Закрытие модального окна
  const closeModal = () => {
    modal.style.display = 'none';
  };

  //Закрытие по кнопке и клику вне окна
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  });

  //Закрытие по кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
};

export default modal;