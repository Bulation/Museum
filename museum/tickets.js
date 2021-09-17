const ticketInputs = document.querySelectorAll(".amount-number-buttons__number");

class CustomValidation {
  // Установим пустой массив сообщений об ошибках
  invalidities = [];

  // Метод, проверяющий валидность
  checkValidity(input) {
    let validity = input.validity;

    if (validity.badInput || validity.typeMismatch) {
      this.addInvalidity('You should input number');
    }
    if (validity.patternMismatch) {
      this.addInvalidity("This is the wrong pattern for this field");
    }

    if (validity.rangeOverflow) {
      let max = input.getAttribute("max");
      this.addInvalidity("The maximum value should be " + max);
    }

    if (validity.rangeUnderflow) {
      let min = input.getAttribute("min");
      this.addInvalidity("The minimum value should be " + min);
    }

    if (validity.stepMismatch) {
      let step = input.getAttribute("step");
      this.addInvalidity("This number needs to be a multiple of " + step);
    }
  }

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity(message) {
    this.invalidities.push(message);
  }

  // Получаем общий текст сообщений об ошибках
  getInvalidities() {
    return this.invalidities.join(". \n");
  }
}

// Добавляем обработчик клика на кнопку отправки формы
for (let i = 0; i < ticketInputs.length; i++) {
    let input = ticketInputs[i];
    input.addEventListener("input", function (e) {
    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
        if (!input.checkValidity()) {
          let inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
          inputCustomValidation.checkValidity(input); // Выявим ошибки
          let customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
          input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
        }
    });
}