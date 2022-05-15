'use strict';

//Получение элементов со страницы

let inputName = document.querySelector('input[placeholder="Ваше имя"]');
let inputTel = document.querySelector('input[name="tel"]');


const validateForm = () => {

  //Функция проверки на ввод только кириллицы в любом регистре
  const checkCyrillic = (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\s]/g, "");
  };

  //Функция проверки на ввод только цифр и +
  const checkNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  };

  //Проверка для имени
  inputName.addEventListener('input', checkCyrillic);

  //Проверка для номера телефона
  inputTel.addEventListener('input', checkNumber);

};

export default validateForm;