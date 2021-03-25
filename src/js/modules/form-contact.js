import FormValidator from '../utils/form-validator.js';
import {FormType} from "../const.js";

export const setContactForm = function () {
  const form = document.querySelector(`.contact__form form`);
  const fields = [`email`, `message`];

  if (form) {
    new FormValidator(form, fields, FormType.CONTACT).init();
  }
};
