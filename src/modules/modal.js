'use strict';

let modal = () => {
  //Получение элементов со страницы
  let modal = document.querySelector('.modal-callback');
  let modalOverlay = document.querySelector('.modal-overlay');
  let buttonsOpen = document.querySelectorAll('.callback-btn');
  let buttonsClose = document.querySelector('.modal-close');
  let buttonServices = document.querySelector('.button-services');
  let formElements = modal.querySelectorAll('input');

 
  //Открытие модального окна
  const openModal = () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
  };

  //Закрытие модального окна
  const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    //Очистка полей
    formElements.forEach(input => {
      if (input.type !== 'submit') {
        input.value = '';
      }
    });
  };

  //Открытие модального окна
  for (let i of buttonsOpen) {
    i.addEventListener('click', () => {
      openModal();
    });
  }

  buttonServices.addEventListener('click', () => {
    openModal();
  });


  //Закрытие по клику вне окна
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  //Закрытие по кнопке вне окна
  buttonsClose.addEventListener('click', () => {
    closeModal();
  });

  //Закрытие по кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  //Открытие модального окна из слайдера services
  let openModalsBtn = document.querySelectorAll('.services-item > .element > .img-wrapper');
  for(let i of openModalsBtn){
    i.addEventListener('click', ()=>{
       openModal();
    });
  }
};

export default modal;