export const FormType = {
  SURVEY: `survey`,
  SUBSCRIBE: `subscribe`,
  CONTACT: `contact`
};

export const MailChimpErrorType = {
  INVALID: `Invalid Resource`,
  EXISTS: `Member Exists`,
  FORGOTTEN: `Forgotten Email Not Subscribed`
};

export const MailChimpErrorTypeText = {
  INVALID: `Deine E-Mail ist falsch oder ungültig. Gib bitte eine echte E-Mail-Adresse ein.`,
  EXISTS: `Deine E-Mail ist bereits in unserer Liste.`,
  FORGOTTEN: `Deine E-Mail wurde dauerhaft gelöscht und kann nicht erneut importiert werden.`
};
