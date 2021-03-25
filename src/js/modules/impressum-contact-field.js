
import {Contacts} from "../const.js";

export const setImpressumContactField = function () {
  const contactField = document.querySelector(`.aup__contact`);

  const getImpressumContact = (elem) => {
    const phone = Contacts.TEL.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, `$1 $2 $3 $4 $5`);
    const contact = elem.innerHTML = `Telefon: <a href="tel:${Contacts.TEL}">${phone}</a> <br>E-Mail: <a href="mailto:${Contacts.EMAIL}@${Contacts.DOMAIN}">${Contacts.EMAIL}&#64;${Contacts.DOMAIN}</a>`;
    return contact;
  };

  if (contactField) {
    getImpressumContact(contactField);
  }
};
