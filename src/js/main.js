import FormValidator from './utils/form-validator.js';
import {send} from "./utils/form-send.js";
import {FormType} from "./const.js";

const subscribeForm = document.querySelectorAll(`.subscribe form`);
const subscribeFields = [`email`];

const contactForm = document.querySelector(`.contact__form form`);
const contactFields = [`email`, `message`];

const surveyForm = document.querySelector(`.survey form`);

const banner = document.querySelector(`.banner`);

if (subscribeForm) {
  subscribeForm.forEach((item) => new FormValidator(item, subscribeFields, FormType.SUBSCRIBE).init());
}

if (contactForm) {
  new FormValidator(contactForm, contactFields, FormType.CONTACT).init();
}

if (surveyForm) {
  const checkboxes = surveyForm.querySelectorAll(`input[type=checkbox]`);

  const otherOption = surveyForm.querySelector(`.form__option-item--option-list`);
  const otherOptionInput = surveyForm.querySelector(`.form__option-self`);

  const submitButton = surveyForm.querySelector(`.survey__form-button--submit`);
  const submitOptionButton = surveyForm.querySelector(`.survey__form-button--send`);
  const cancelButton = surveyForm.querySelector(`.survey__form-button--cancel`);

  const isButtonDisabled = (button, state) => {
    button.disabled = state;
  };

  checkboxes.forEach((element) => element.addEventListener(`click`, function (evt) {
    if (evt.target.id === `option-7`) {
      evt.target.checked = false;
    }

    let isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked === true);

    if (isChecked) {
      isButtonDisabled(submitButton, false);
      isButtonDisabled(submitOptionButton, false);
    } else {
      isButtonDisabled(submitButton, true);
      isButtonDisabled(submitOptionButton, true);
    }

  }));

  otherOption.addEventListener(`click`, function () {
    otherOption.classList.add(`form__option-item--hidden`);
    otherOptionInput.classList.remove(`form__option-self--hidden`);
    submitButton.classList.add(`survey__form-button--hidden`);
    otherOptionInput.querySelector(`input`).focus();

    otherOptionInput.addEventListener(`input`, function () {
      const input = otherOptionInput.querySelector(`input`);
      let value = input.value;

      if (value.trim() === ``) {
        isButtonDisabled(submitOptionButton, true);
      } else {
        isButtonDisabled(submitOptionButton, false);
      }
    });
  });

  cancelButton.addEventListener(`click`, function () {
    otherOptionInput.classList.add(`form__option-self--hidden`);
    otherOption.classList.remove(`form__option-item--hidden`);
    otherOption.querySelector(`.form__option-input`).checked = false;
    submitButton.classList.remove(`survey__form-button--hidden`);

    otherOptionInput.querySelector(`input`).value = ``;
  });

  surveyForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();

    send(surveyForm, FormType.SURVEY);
  });
}

if (banner) {
  const closeButton = banner.querySelector(`.banner__button`);

  closeButton.addEventListener(`click`, function () {
    banner.classList.add(`banner--hidden`);
  });
}
