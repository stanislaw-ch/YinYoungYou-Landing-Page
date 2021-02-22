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
