import FormValidator from '../utils/form-validator.js';
import {FormType} from "../const.js";

export const getSubscribeForm = function () {
  const form = document.querySelectorAll(`.subscribe form`);
  const fields = [`email`];

  if (form) {
    form.forEach((item) => new FormValidator(item, fields, FormType.SUBSCRIBE).init());
  }
};
