import {FormType} from "../const.js";
import {MailChimpErrorType} from "../const.js";
import {MailChimpErrorTypeText} from "../const.js";

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
  if (data.title === MailChimpErrorType.INVALID) {
    errorMessage.innerText = MailChimpErrorTypeText.INVALID;
  }
  if (data.title === MailChimpErrorType.EXISTS) {
    errorMessage.innerText = MailChimpErrorTypeText.EXISTS;
  }
  if (data.title === MailChimpErrorType.FORGOTTEN) {
    errorMessage.innerText = MailChimpErrorTypeText.FORGOTTEN;
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
    if (data === StatusCode.OK || data.status === `pending`) {
      onSuccess(form, type);
    } else {
      onError(form, data);
    }
  });
};

export const sendToSheets = (form, type) => {
  const scriptURL = `https://script.google.com/macros/s/AKfycbwLEg8hvbAUJrQHEYBlD2NGFyNx9JVwSwajSs_TuvneRly017sloS8w9JWnFyv2vP-3/exec`;

  fetch(scriptURL, {
    method: form.method,
    body: new FormData(form),
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.result === `success`) {
      onSuccess(form, type);
    } else {
      onError(form, data);
    }
  });
};
