;(function () {
  var app = {
    initialize() {
      this.setUpListeners()
    },
    setUpListeners() {
      const form = document.querySelector('.needs-validation')

      form.addEventListener('submit', this.changeInput)
      form.addEventListener('submit', this.submitForm)
    },
    changeInput(event) {
      event.preventDefault()
      event.stopPropagation()
      this.classList.add('was-validated')

      // if (app.validateForm(this)) {
      //   app.showSubmitButtonState(true)
      // } else {
      //   app.showSubmitButtonState(false)
      // }
    },
    submitForm(event) {
      event.preventDefault()
      event.stopPropagation()

      const form = document.querySelector('.memory__request')
      const alert = document.querySelector('.memory__request-sent')

      if (app.validateForm(this)) {
        console.log('отправка ajax запроса')
        form.classList.add('d-none')
        alert.classList.remove('d-none')
      } else {
        console.log('запрос не был отправлен')
      }
    },
    // showSubmitButtonState(boolean) {
    //   const submitButton = document.querySelector('button[type="submit"]')
    //   if (boolean) {
    //     submitButton.disabled = false
    //   } else {
    //     submitButton.disabled = true
    //   }
    // },
    validateForm(form) {
      let valid = true
      const requiredFields = form.querySelectorAll('input[required]')
      const firstname = form.querySelector('#firstname')
      const lastname = form.querySelector('#lastname')
      const tel = form.querySelector('input[type="tel"]')
      const email = form.querySelector('input[type="email"]')
      const password = form.querySelector('input[type="password"]')

      function getFieldName(input) {
        return input.parentElement.querySelector('label').innerText
      }

      function removeFeedbacks(input) {
        const feedbacks = input.parentElement.querySelectorAll(
          '.invalid-feedback'
        )
        if (feedbacks.length) {
          feedbacks.forEach((feedback) => feedback.remove())
        }
      }

      function showError(input, message) {
        removeFeedbacks(input)
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        const feedback = document.createElement('small')
        feedback.classList.add('invalid-feedback')
        feedback.innerText = message
        input.parentElement.appendChild(feedback)
      }

      function showSuccess(input) {
        removeFeedbacks(input)
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
      }

      function checkRequired(inputs) {
        inputs.forEach((input) => {
          if (input.value === '') {
            showError(input, `заполните поле: ${getFieldName(input)}`)
            valid = false
          } else {
            showSuccess(input)
          }
        })
      }

      function checkTel(input) {
        if (input.validity.valueMissing) {
          input.setCustomValidity(
            `пожалуйста, заполните поле ${getFieldName(input)}`
          )
          form.reportValidity()
        } else {
          input.setCustomValidity('')
          input.reportValidity()
          showSuccess(input)
        }
      }

      function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (input.validity.valueMissing) {
          input.setCustomValidity(
            `пожалуйста, заполните поле ${getFieldName(input)}`
          )
          form.reportValidity()
        } else if (!re.test(input.value.trim())) {
          showError(input, `не верный: ${getFieldName(input)}`)
          valid = false
        } else {
          input.setCustomValidity('')
          input.reportValidity()
          showSuccess(input)
        }
      }

      function checkLength(input, min, max) {
        if (input.value.length < min) {
          showError(
            input,
            `в поле: ${getFieldName(
              input
            )}, должно быть не менее ${min} символов`
          )
          valid = false
        } else if (input.value.length > max) {
          showError(
            input,
            `в поле: ${getFieldName(
              input
            )}, должно быть не более ${max} символов`
          )
          valid = false
        }
      }

      checkRequired(requiredFields)
      checkLength(firstname, 2, 10)
      checkLength(lastname, 2, 10)
      checkLength(password, 3, 10)
      checkTel(tel)
      checkEmail(email)

      return valid
    }
  }

  app.initialize()
})()
