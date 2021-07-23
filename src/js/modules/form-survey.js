import {send} from "../utils/form-send.js";
import {FormType} from "../const.js";

export const getSurveyForm = function () {
  const form = document.querySelector(`.survey form`);

  if (form) {
    const checkboxes = form.querySelectorAll(`input[type=checkbox]`);

    const otherOption = form.querySelector(`.form__option-item--option-list`);
    const otherOptionInput = form.querySelector(`.form__option-self`);

    const submitButton = form.querySelector(`.survey__form-button--submit`);
    const submitOptionButton = form.querySelector(`.survey__form-button--send`);
    const cancelButton = form.querySelector(`.survey__form-button--cancel`);

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
      otherOption.classList.remove(`form__option-item--hidden`);
      otherOptionInput.classList.add(`form__option-self--hidden`);
      submitButton.classList.remove(`survey__form-button--hidden`);
      otherOption.querySelector(`.form__option-input`).checked = false;

      otherOptionInput.querySelector(`input`).value = ``;
    });

    form.addEventListener(`submit`, function (evt) {
      evt.preventDefault();

      fetch(`./scriptURL.php`, {
        method: `GET`,
      }).then((response) => {
        return response.json();
      })
      .then((scriptURL) => {
        send(form, FormType.SURVEY, scriptURL);
      });
    });
  }
};
