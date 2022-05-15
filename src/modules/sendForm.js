const sendForm = ({
  someElem = []
}) => {
  let form = document.querySelector('form');
  let name = form.fio;
  let phone = form.tel;
  let statusBlock = document.createElement('div');
  let loadText = 'Идёт отправка...';
  let errorText = 'Ошибка...';
  let successText = 'Спасибо! Отправлено';

  //Функция на проверку валидности полей формы
  const validate = () => {
    let success = true;
    let phoneLength = form.tel.value.length;
    if (phoneLength < 7) {
      success = false;
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
    statusBlock.style.color = 'black';
    statusBlock.classList.add('rezault');
    form.append(statusBlock);

    formData.forEach((val, key) => {
      FormBody[key] = val.trim();
    });


    let element = document.getElementById(someElem.id);

    if (someElem.type === 'block') {
      FormBody[someElem.id] = element.textContent;
    } else if (someElem.type === 'input') {
      FormBody[someElem.id] = element.value;
    }

    //Проверка и отправка формы
    if (validate(formElements)) {
      sendData(FormBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            if (input.type !== 'submit') {
              input.value = '';
            }
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });

      //Закрытие модального окна после успешной отправки
      let rezault = document.querySelector('.rezault');
      let modal = document.querySelector('.modal-callback');
      let modalOverlay = document.querySelector('.modal-overlay');
      rezault.style.display = 'block';
      setTimeout(() => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
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

  //Подсказки для правильного ввода номера телефона
  let formElements = form.querySelectorAll('input');
  for (let i of formElements) {
    if (i.matches('.tel')) {
      i.addEventListener('input', () => {
        if (phone.value.length < 7) {
          let phoneError = document.querySelector('.phoneError');
          if (phoneError) {
            phoneError.remove();
          }
          phone.insertAdjacentHTML('afterEnd', '<label for="tel" class="phoneError" style="color:red; font-size: 15px;">Не менее 7 цифр</label>');
        } else if (phone.value.length > 6) {
          let phoneError = document.querySelector('.phoneError');
          if (phoneError) {
            phoneError.remove();
          }
        }
      });
    } else if (i.matches('.fio')) {
      i.addEventListener('click', () => {
        let nameError = document.querySelector('.nameError');
            if (nameError) {
              nameError.remove();
            }
            name.insertAdjacentHTML('afterEnd', '<label for="fio" class="nameError" style="color:red; font-size: 15px;">Только кириллица</label>');
        i.addEventListener('input', () => {
          if (name.value.length > 1) {
            let nameError = document.querySelector('.nameError');
            if (nameError) {
              nameError.remove();
            }
          }
        });
      });
    }
  }
};

export default sendForm;