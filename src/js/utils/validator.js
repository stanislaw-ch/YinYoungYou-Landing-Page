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
        this.send(this.formType);
      }
    });
  }

  validateOnEntry() {

    this.fields.forEach((field) => {
      const input = this.form.querySelector(`#${field}`);

      input.addEventListener(`input`, () => {
        const successMessage = this.form.querySelector(`.form__message--error`);
        const errorMessage = this.form.querySelector(`.form__message--success`);
        const buttonMessage = this.form.querySelector(`.form__button`);

        if (errorMessage) {
          if (!(errorMessage.classList.contains(`form__message--hidden`))) {
            errorMessage.classList.add(`form__message--hidden`);
          }
        }

        if (successMessage) {
          if (!(successMessage.classList.contains(`form__message--hidden`))) {
            successMessage.classList.add(`form__message--hidden`);
          }
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
    } else {
      this.setStatus(field, null, `success`);
    }

    // check for a valid email address
    if (field.type === `email`) {
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (re.test(field.value)) {
        this.setStatus(field, null, `success`);
        this.errors = 0;
      } else {
        this.setStatus(field, `Bitte gib eine gültige E-mail Adresse an`, `error`);
        this.errors++;
      }
    }
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

  send(formType) {
    const successMessageOnButton = this.form.querySelector(`.form__button`);
    const successMessage = this.form.querySelector(`.form__message--success`);
    const errorMessage = this.form.querySelector(`.form__message--error`);

    const formEntries = new FormData(this.form).entries();
    const json = Object.assign(...Array.from(formEntries, ([x, y]) => ({[x]: y})));

    let fetchData = {
      method: `POST`,
      body: JSON.stringify(json),
      headers: {"Content-Type": `application/json`}
    };

    if (formType === `subscribe`) {
      fetch(`/subscribe`, fetchData)
        .then((res) => {
          if (res.ok) {
            successMessageOnButton.classList.add(`form__button--success`);
            successMessageOnButton.innerText = `Vielen Dank!`;
            successMessage.classList.remove(`form__message--hidden`);
          } else {
            errorMessage.classList.remove(`form__message--hidden`);
          }
        });
    }

    if (formType === `contact`) {
      fetch(`/send-form`, fetchData)
        .then((res) => {
          if (res.ok) {
            successMessageOnButton.classList.add(`form__button--success`);
            successMessageOnButton.innerText = `Vielen Dank für deine Nachricht!`;

            this.form.reset();
          } else {
            errorMessage.classList.remove(`form__message--hidden`);
          }
        });
    }
  }
}
