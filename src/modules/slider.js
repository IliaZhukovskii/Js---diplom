'use strict';

const slider = () => {
  //Получение переменных
  let sliderBlock = document.querySelector('.portfolio-content');
  let slides = document.querySelectorAll('.portfolio-item');
  let dots = document.querySelectorAll('.dot');
  let portfolioDots = document.querySelector('.portfolio-dots');

  let currentSlide = 0;
  let interval;
  let timerInterval = 2000;

  //Добавление точек к слайдам
  const createDots = () => {
    for (let i = 0; i < slides.length; i++) {
      let li = document.createElement('li');
      li.classList.add('dot');
      portfolioDots.append(li);
    }

    dots = document.querySelectorAll('.dot');

    for (let i = 0; i < dots.length; i++) {
      dots[0].classList.add('dot-active');
    }
  };
  createDots();

  //Предыдущий слайд
  const prevSlide = (elems, index, srtClass) => {
    elems[index].classList.remove(srtClass);
  };

  //Следующий слайд
  const nextSlide = (elems, index, srtClass) => {
    elems[index].classList.add(srtClass);
  };

  //Автоматическая прокрутка слайдов
  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  //Переключение слайдов
  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    //Следующий слайд
    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    //Предыдущий слайд
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  //Остановка автоматической прокрутки при наведении
  sliderBlock.addEventListener('mouseenter', e => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  //Запуск автоматической прокрутки при уводе курсора
  sliderBlock.addEventListener('mouseleave', e => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timerInterval);
    }
  }, true);

  startSlide(timerInterval);
};


export default slider;