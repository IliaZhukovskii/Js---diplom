'use strict';

//Таймер
let timer = (deadline) => {
  let timerHours = document.getElementById('timer-hours');
  let timerMinutes = document.getElementById('timer-minutes');
  let timerSeconds = document.getElementById('timer-seconds');

  //Рассчет
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNiw = new Date().getTime();
    let timeRemaining = (dateStop - dateNiw) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };
  };

  //Вывод таймера на страницу
  const updateClock = () => {
    let getTime = getTimeRemaining();

    //Проверка, на кол-во символов
    if(String(getTime.hours).length == 1){
      getTime.hours = '0' + getTime.hours;
    }
    if(String(getTime.minutes).length == 1){
      getTime.minutes = '0' + getTime.minutes;
    }
    if(String(getTime.seconds).length == 1){
      getTime.seconds = '0' + getTime.seconds;
    }

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
  };

  //Запуск таймера
  const setIntervalFun = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    }
  };
  setIntervalFun();
};

export default timer;