import FormValidator from '../utils/form-validator.js';
import {FormType} from "../const.js";

export const getContactForm = function () {
  const form = document.querySelector(`.contact__form form`);
  const fields = [`email`, `message`];

  if (form) {
    const checkBox = form.querySelector(`input[type="checkbox"]`);

    checkBox.checked = false;

    new FormValidator(form, fields, FormType.CONTACT).init();
  }
};
