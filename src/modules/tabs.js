'use strict';

const tabs = () => {

  let tabPanel = document.querySelector('.service-header');
  let tabs = document.querySelectorAll('.service-header-tab');
  let tabContent = document.querySelectorAll('.service-tab');

  tabPanel.addEventListener('click', (e) => {

    if (e.target.closest('.service-header-tab')) {
      let tabBtn = e.target.closest('.service-header-tab');
      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      });
    } 
  });

};



export default tabs;