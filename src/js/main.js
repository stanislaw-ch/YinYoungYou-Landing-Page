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
  const otherOption = surveyForm.querySelector(`.form__option-item--option-list`);
  const otherOptionInText = surveyForm.querySelector(`.form__option-self`);

  const submitButton = surveyForm.querySelector(`.survey__form-button--submit`);
  const cancelButton = surveyForm.querySelector(`.survey__form-button--cancel`);

  const successMassage = surveyForm.querySelector(`.survey__form-success`);

  otherOption.addEventListener(`click`, function () {
    otherOption.classList.add(`form__option-item--hidden`);
    otherOptionInText.classList.remove(`form__option-self--hidden`);
    submitButton.classList.add(`survey__form-button--hidden`);
  });

  cancelButton.addEventListener(`click`, function () {
    otherOptionInText.classList.add(`form__option-self--hidden`);
    otherOption.classList.remove(`form__option-item--hidden`);
    otherOption.querySelector(`.form__option-input`).checked = false;
    submitButton.classList.remove(`survey__form-button--hidden`);
  });

  surveyForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    successMassage.classList.remove(`survey__form-success--hidden`);
  });
}
