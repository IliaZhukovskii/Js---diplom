'use strict';

const accordeon = () => {

  //Получение переменных
  let accordeon = document.querySelector('.accordeon');
  let elements = document.querySelectorAll('.accordeon > .element');
  let elementContent = document.querySelectorAll('.accordeon > .element > .element-content');

  accordeon.addEventListener('click', (e) => {
    if (e.target.closest('.element')) {
      let tabBtn = e.target.closest('.element');
      elements.forEach((tab, index) => {
        if (tab == tabBtn) {
          tab.classList.toggle('active');
          elementContent[index].style.display = 'block';
          if (!tab.classList.contains('active')) {
            elementContent[index].style.display = 'none';
          }
          //Закрытие остальных
        } else {
          tab.classList.remove('active');
          elementContent[index].style.display = 'none';
        }
      });
    }
  });
};


export default accordeon;