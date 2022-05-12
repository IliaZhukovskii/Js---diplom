'use strict';

//Анимация вывода результата калькулятора
const resultCalc = (totalValue, total) => {
  total.innerHTML = totalValue; 
};


//Анимация появления 
const animateOpen = (object) => {
  let count = 0;
  //Начальное положение
  object.style.top = 0 + 'px';
  const animate = () => {
    count++;
    object.style.top = count + 'px';
    if (count < 60) {
      setTimeout(animate, 5);
    }
  };
  animate();
};


export {
  animateOpen,
  resultCalc
};