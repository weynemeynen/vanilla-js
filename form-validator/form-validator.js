(function () {
  var app = {
    initialize() {
      this.setUpListeners();
    },
    setUpListeners() {
      const form = document.querySelector('.needs-validation');

      form.addEventListener('input', this.changeInput);
      form.addEventListener('submit', this.submitForm);
    },
    changeInput(event) {
      event.preventDefault();
      event.stopPropagation();
      this.classList.add('was-validated');

      if (app.validateForm(this)) {
        app.showSubmitButtonState(true);
      } else {
        app.showSubmitButtonState(false);
      }
    },
    submitForm(event) {
      event.preventDefault();
      event.stopPropagation();

      if (app.validateForm(this)) {
        console.log('отправка ajax запроса');
      } else {
        console.log('запрос не был отправлен');
      }
    },
    showSubmitButtonState(boolean) {
      const submitButton = document.querySelector('button[type="submit"]');
      if (boolean) {
        submitButton.disabled = false;
        submitButton.classList.remove('btn-light', 'btn-warning', 'btn-block');
        submitButton.classList.add('btn-success', 'btn-lg');
        submitButton.innerText = 'Отправить';
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove('btn-light', 'btn-success', 'btn-lg');
        submitButton.classList.add('btn-warning', 'btn-block');
        submitButton.innerText = 'Заполните все обязательные поля правильно';
      }
    },
    validateForm(form) {
      let valid = true;
      const requiredFields = form.querySelectorAll('input[required]');
      const firstname = form.querySelector('#firstname');
      const lastname = form.querySelector('#lastname');
      const email = form.querySelector('input[type="email"]');
      const password = form.querySelector('input[type="password"]');

      function getFieldName(input) {
        return input.parentElement.querySelector('label').innerText;
      }

      function removeFeedbacks(input) {
        const feedbacks = input.parentElement.querySelectorAll('.feedback');
        if (feedbacks) {
          feedbacks.forEach((feedback) => feedback.remove());
        }
      }

      function showError(input, message) {
        removeFeedbacks(input);
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        const feedback = document.createElement('small');
        feedback.classList.add('feedback', 'invalid-feedback');
        feedback.innerText = message;
        input.parentElement.appendChild(feedback);
      }
      function showSuccess(input) {
        removeFeedbacks(input);
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }

      function checkRequired(inputs) {
        inputs.forEach((input) => {
          if (input.value === '') {
            showError(input, `заполните поле: ${getFieldName(input)}`);
            valid = false;
          } else {
            showSuccess(input);
          }
        });
      }

      function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(input.value.trim())) {
          showError(input, `не верный: ${getFieldName(input)}`);
          valid = false;
        } else {
          showSuccess(input);
        }
      }

      function checkLength(input, min, max) {
        if (input.value.length < min) {
          showError(
            input,
            `поле: ${getFieldName(input)}, должно быть не менее ${min} символов`
          );
          valid = false;
        } else if (input.value.length > max) {
          showError(
            input,
            `поле: ${getFieldName(input)}, должно быть не более ${max} символов`
          );
          valid = false;
        }
      }

      checkRequired(requiredFields);
      checkLength(firstname, 2, 10);
      checkLength(lastname, 2, 10);
      checkLength(password, 3, 10);
      checkEmail(email);

      return valid;
    },
  };

  app.initialize();
})();