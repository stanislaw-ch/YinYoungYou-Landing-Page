export default class Validator {
  constructor(form, fields, formType) {
    this.form = form;
    this.fields = fields;
    this.formType = formType;

    this.errors = 0;
  }

  init() {
    this.validateOnEntry();
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    this.form.addEventListener(`submit`, (e) => {
      e.preventDefault();

      this.fields.forEach((field) => {
        const input = this.form.querySelector(`#${field}`);
        this.validateFields(input);
      });

      if (this.errors === 0) {
        this.send(new FormData(this.form), this.form.action, this.form.method, this.formType);
      }
    });
  }

  validateOnEntry() {

    this.fields.forEach((field) => {
      const input = this.form.querySelector(`#${field}`);

      input.addEventListener(`input`, () => {
        const errorMessage = this.form.querySelector(`.form__message`);
        const buttonMessage = this.form.querySelector(`.form__button`);

        if (!(errorMessage.classList.contains(`form__message--hidden`))) {
          errorMessage.classList.add(`form__message--hidden`);
        }

        if (buttonMessage.classList.contains(`form__button--success`)) {
          buttonMessage.classList.remove(`form__button--success`);
          buttonMessage.innerText = `Abonnieren!`;
          if (this.formType === `subscribe`) {
            buttonMessage.innerText = `Abonnieren!`;
          }
          if (this.formType === `contact`) {
            buttonMessage.innerText = `Nachricht abschicken`;
          }
        }

        this.validateFields(input);
      });
    });
  }

  validateFields(field) {
    // Check presence of values
    if (field.value.trim() === ``) {
      this.setStatus(field, `Bitte schreib uns eine Nachricht`, `error`);
      // this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, `error`);
    } else {
      this.setStatus(field, null, `success`);
    }

    // check for a valid email address
    if (field.type === `email`) {
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      // const re = /\S+@\S+\.\S+/;
      if (re.test(field.value)) {
        this.setStatus(field, null, `success`);
        this.errors = 0;
      } else {
        this.setStatus(field, `Bitte gib eine gültige E-mail Adresse an.`, `error`);
        // this.setStatus(field, `Please enter valid email address`, `error`);
        this.errors++;
      }
    }

    // Password confirmation edge case
    // if (field.id === `password_confirmation`) {
    //   const passwordField = this.form.querySelector(`#password`);

    //   if (field.value.trim() === ``) {
    //     this.setStatus(field, `Password confirmation required`, `error`);
    //   } else if (field.value !== passwordField.value) {
    //     this.setStatus(field, `Password does not match`, `error`);
    //   } else {
    //     this.setStatus(field, null, `success`);
    //   }
    // }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(`.form__input-message`);

    if (status === `success`) {
      if (errorMessage) {
        errorMessage.innerText = ``;
      }

      field.classList.remove(`form__input--error`);
    }

    if (status === `error`) {
      field.parentElement.querySelector(`.form__input-message`).innerText = message;
      field.classList.add(`form__input--error`);
    }
  }

  send(form, action, method, formType) {
    const StatusCode = {
      OK: 200
    };

    fetch(action, {
      method,
      mode: `cors`,
      body: form,
    }).then((response) => {
      console.log(response.status);
      if (response.status === StatusCode.OK) {
        const successMessage = this.form.querySelector(`.form__button`);
        successMessage.classList.add(`form__button--success`);
        if (formType === `subscribe`) {
          successMessage.innerText = `Vielen Dank!`;
        }
        if (formType === `contact`) {
          successMessage.innerText = `Vielen Dank für deine Nachricht!`;
        }

        this.form.reset();
      } else {
        const errorMessage = this.form.querySelector(`.form__message--error`);
        errorMessage.classList.remove(`form__message--hidden`);
      }
    });
  }
}
