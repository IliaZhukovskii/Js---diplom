const sendForm = ({
  formId,
  someElem = []
}) => {
  let form = document.getElementById(formId);
  let name = form.user_name;
  let phone = form.user_phone;
  let email = form.user_email;
  let emailExample = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let nameExample = /[^\s]/;
  let statusBlock = document.createElement('div');
  let loadText = 'Загрузка...';
  let errorText = 'Ошибка...';
  let successText = 'Спасибо! Наш менеджер с Вами свяжется';


  //Функция на проаерку валидности полей формы
  const validate = (list) => {
    let success = true;
    let phoneLength = form.user_phone.value.length;
    for (let i of list) {
      if (name.value.length < 2 || !name.value.match(nameExample) || phoneLength < 7 || !email.value.match(emailExample)) {
        success = false;
      }
    }
    return success;
  };

  //Отправка данных
  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json());
  };

  //Отправка формы
  const submitForm = () => {
    let formElements = form.querySelectorAll('input');
    let formData = new FormData(form);
    let FormBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = 'white';
    statusBlock.classList.add('rezault');
    form.append(statusBlock);

    formData.forEach((val, key) => {
      FormBody[key] = val.trim();
    });

    someElem.forEach(elem => {
      let element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        FormBody[elem.id] = element.textContent;
      } else if (e.type === 'input') {
        FormBody[elem.id] = element.value;
      }
    });

    //Проверка и отправка формы
    if (validate(formElements)) {
      sendData(FormBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });

      //Закрытие модального окна после успешной отправки
      let rezault = document.querySelector('.rezault');
      let modal = document.querySelector('.popup');
      rezault.style.display = 'block';
      setTimeout(() => {
        modal.style.display = 'none';
        rezault.style.display = 'none';
      }, 3000);
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });

  } catch (error) {
    console.log(error.message);
  }

  //Подсказки для правильного ввода email и номера телефона
  let formElements = form.querySelectorAll('input');
  for (let i of formElements) {
    if (i.matches('.form-phone')) {
      i.addEventListener('input', () => {
        if (phone.value.length < 7) {
          let phoneError = document.querySelector('.phoneError');
          if (phoneError) {
            phoneError.remove();
          }
          phone.insertAdjacentHTML('afterEnd', '<label for="user_phone" class="phoneError" style="color:red; font-size: 15px;">Не менее 7 цифр</label>');
        } else if (phone.value.length > 6) {
          let phoneError = document.querySelector('.phoneError');
          if (phoneError) {
            phoneError.remove();
          }
        }
      });
    } else if (i.matches('.form-email')) {
      i.addEventListener('input', () => {
        if (!email.value.match(emailExample)) {
          let emailError = document.querySelector('.emailError');
          if (emailError) {
            emailError.remove();
          }
          email.insertAdjacentHTML('afterEnd', '<label for="user_phone" class="emailError" style="color:red; font-size: 15px;" >Пример: example@mail.ru</label>');
        } else if (email.value.match(emailExample)) {
          let emailError = document.querySelector('.emailError');
          if (emailError) {
            emailError.remove();
          }
        }
      });
    } else if (i.matches('.top-form') || i.matches('.form-name')) {
      i.addEventListener('input', () =>{
        if (name.value.length < 2) {
          let nameError = document.querySelector('.nameError');
          if (nameError) {
            nameError.remove();
          }
          name.insertAdjacentHTML('afterEnd', '<label for="user_phone" class="nameError" style="color:red; font-size: 15px;">Не менее 2 символов</label>');
        } else if (name.value.length > 1) {
          let nameError = document.querySelector('.nameError');
          if (nameError) {
            nameError.remove();
          }
        }
      });
    }
  }
};

export default sendForm;