'use strict';

//Получение элементов со страницы
let calcInput = document.querySelectorAll('.calc-block > input');
let inputText = document.querySelectorAll('input[placeholder="Ваше имя"]');
let inputPlaceholder = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
let inputEmail = document.querySelectorAll('input[type="email"]');
let inputTel = document.querySelectorAll('input[type="tel"]');



const validateForm = () => {

  //Ввод в калькуляторе только цифр 
  for (let item of calcInput) {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d]/g, "");
    });
  }

  //Функция проверки на ввод только кириллицы в любом регистре, дефиса и пробела
  const checkCyrillic = (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\s,.-]/g, "");
  };

  //Функция проверки на ввод только олить ввод только латиницы в любом регистре,
  //цифры и спецсимволы:  @  -  _  . ! ~ * '
  const checkLatin = (e) => {
    e.target.value = e.target.value.replace(/[^\w-@.!~*']/g, "");
  };

  //Функция проверки на ввод только цифр, круглых скобок и дефис
  const checkNumber = (e) => {
    e.target.value = e.target.value.replace(/[^\d()+-]/g, "");
  };

  //Проверка для input type="text"
  for (let item of inputText) {
    item.addEventListener('input', checkCyrillic);
  }

  //Проверка для input placeholder="Ваше сообщение"
  for (let item of inputPlaceholder) {
    item.addEventListener('input', checkCyrillic);
  }

  //Проверка для input type="email"
  for (let item of inputEmail) {
    item.addEventListener('input', checkLatin);
  }

  //Проверка для input type="tel"
  for (let item of inputTel) {
    item.addEventListener('input', checkNumber);
  }

};


export default validateForm;