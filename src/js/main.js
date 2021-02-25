import Validator from './utils/validator.js';

const subscribeForm = document.querySelectorAll(`.subscribe form`);
const subscribeFields = [`email`];

const contactForm = document.querySelector(`.contact__form form`);
const contactFields = [`email`, `comment`];
// const fields = [`username`, `email`, `password`, `password_confirmation`];

if (subscribeForm) {
  subscribeForm.forEach((item) => new Validator(item, subscribeFields, `subscribe`).init());
}

if (contactForm) {
  new Validator(contactForm, contactFields, `contact`).init();
}

const surveyForm = document.querySelector(`.survey form`);

if (surveyForm) {
  const allCheckboxes = surveyForm.querySelectorAll(`input[type=checkbox]`);

  const otherOption = surveyForm.querySelector(`.form__option-item--option-list`);
  const otherOptionInText = surveyForm.querySelector(`.form__option-self`);

  const submitButton = surveyForm.querySelector(`.survey__form-button--submit`);
  const submitOptionButton = surveyForm.querySelector(`.survey__form-button--send`);
  const cancelButton = surveyForm.querySelector(`.survey__form-button--cancel`);

  const successMassage = surveyForm.querySelector(`.survey__form-success`);

  const send = function (form, action, method) {
    const StatusCode = {
      OK: 200
    };

    fetch(action, {
      method,
      body: form,
    }).then((response) => {
      if (response.status === StatusCode.OK) {
        successMassage.classList.remove(`survey__form-success--hidden`);
      }
    });
  };

  allCheckboxes.forEach((element) => element.addEventListener(`click`, function (evt) {
    if (evt.target.id === `option-7`) {
      evt.target.checked = false;
    }

    let isChecked = Array.from(allCheckboxes).some((it) => it.checked === true);

    if (isChecked) {
      submitButton.disabled = false;
      submitOptionButton.disabled = false;
    } else {
      submitButton.disabled = true;
      submitOptionButton.disabled = true;
    }

  }));

  otherOption.addEventListener(`click`, function () {
    otherOption.classList.add(`form__option-item--hidden`);
    otherOptionInText.classList.remove(`form__option-self--hidden`);
    submitButton.classList.add(`survey__form-button--hidden`);
    otherOptionInText.querySelector(`input`).focus();

    otherOptionInText.addEventListener(`input`, function () {
      const input = otherOptionInText.querySelector(`input`);
      let value = input.value;

      if (value.trim() === ``) {
        submitOptionButton.disabled = true;
      } else {
        submitOptionButton.disabled = false;
      }
    });
  });

  cancelButton.addEventListener(`click`, function () {
    otherOptionInText.classList.add(`form__option-self--hidden`);
    otherOption.classList.remove(`form__option-item--hidden`);
    otherOption.querySelector(`.form__option-input`).checked = false;
    submitButton.classList.remove(`survey__form-button--hidden`);

    otherOptionInText.querySelector(`input`).value = ``;
  });

  surveyForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();

    send(new FormData(surveyForm), surveyForm.action, surveyForm.method);
  });
}
