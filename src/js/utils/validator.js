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
        this.setStatus(field, `Bitte gib eine gültige E-mail Adresse an`, `error`);
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

    // const url = action.action.replace(`/post?`, `/post-json?`) + `&c=?`;

    fetch(action, {
      method,
      // mode: `no-cors`,
      body: form,
    }).then((response) => {
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


// function submitMailChimp(data) {
//   reset(data);
//   var form = data.form;
//   var payload = {}; // Skip Ajax submission if http/s mismatch, fallback to POST instead

//   if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
//     form.attr('method', 'post');
//     return;
//   }

//   preventDefault(data); // Find & populate all fields

//   var status = findFields(form, payload);

//   if (status) {
//     return alert(status);
//   } // Disable submit button


//   disableBtn(data); // Use special format for MailChimp params

//   var fullName;

//   _.each(payload, function (value, key) {
//     if (emailField.test(key)) {
//       payload.EMAIL = value;
//     }

//     if (/^((full[ _-]?)?name)$/i.test(key)) {
//       fullName = value;
//     }

//     if (/^(first[ _-]?name)$/i.test(key)) {
//       payload.FNAME = value;
//     }

//     if (/^(last[ _-]?name)$/i.test(key)) {
//       payload.LNAME = value;
//     }
//   });

//   if (fullName && !payload.FNAME) {
//     fullName = fullName.split(' ');
//     payload.FNAME = fullName[0];
//     payload.LNAME = payload.LNAME || fullName[1];
//   } // Use the (undocumented) MailChimp jsonp api


//   var url = data.action.replace('/post?', '/post-json?') + '&c=?'; // Add special param to prevent bot signups

//   var userId = url.indexOf('u=') + 2;
//   userId = url.substring(userId, url.indexOf('&', userId));
//   var listId = url.indexOf('id=') + 3;
//   listId = url.substring(listId, url.indexOf('&', listId));
//   payload['b_' + userId + '_' + listId] = '';
//   $.ajax({
//     url: url,
//     data: payload,
//     dataType: 'jsonp'
//   }).done(function (resp) {
//     data.success = resp.result === 'success' || /already/.test(resp.msg);

//     if (!data.success) {
//       console.info('MailChimp error: ' + resp.msg);
//     }

//     afterSubmit(data);
//   }).fail(function () {
//     afterSubmit(data);
//   });
// } // Common callback which runs after all Ajax submissions

