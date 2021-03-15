import {FormType} from "../const.js";
import {MailChimpError} from "../const.js";
import {MailChimpErrorText} from "../const.js";

const onSuccess = (form, type) => {
  if (FormType.SURVEY === type) {
    const successMessage = form.querySelector(`.survey__form-success`);
    successMessage.classList.remove(`survey__form-success--hidden`);
  }

  if (FormType.SUBSCRIBE === type) {
    const successMessage = form.querySelector(`.form__message--success`);
    const successMessageOnButton = form.querySelector(`.form__button`);
    successMessageOnButton.classList.add(`form__button--success`);
    successMessageOnButton.innerText = `Vielen Dank!`;
    successMessage.classList.remove(`form__message--hidden`);
  }

  if (FormType.CONTACT === type) {
    const successMessageOnButton = form.querySelector(`.form__button`);
    successMessageOnButton.classList.add(`form__button--success`);
    successMessageOnButton.innerText = `Vielen Dank für deine Nachricht!`;
    form.reset();
  }
};

const getMailChimpError = (data, errorMessage) => {
  if (data.title === MailChimpError.INVALID) {
    errorMessage.innerText = MailChimpErrorText.INVALID;
  }
  if (data.title === MailChimpError.EXISTS) {
    errorMessage.innerText = MailChimpErrorText.EXISTS;
  }
  if (data.title === MailChimpError.FORGOTTEN) {
    errorMessage.innerText = MailChimpErrorText.FORGOTTEN;
  }

  errorMessage.classList.remove(`form__message--hidden`);
};

const onError = (form, data) => {
  const errorMessage = form.querySelector(`.form__message--error`);

  if (data.title) {
    getMailChimpError(data, errorMessage);
  } else {
    errorMessage.classList.remove(`form__message--hidden`);
  }
};

export const send = (form, type) => {
  const StatusCode = {
    OK: 200
  };

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data === StatusCode.OK || data.status === `pending`) {
      onSuccess(form, type);
    } else {
      onError(form, data);
    }
  });
};

