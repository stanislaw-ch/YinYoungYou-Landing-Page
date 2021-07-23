require(`animate.css`);

import {getImpressumContactField} from "./modules/impressum-contact-field.js";
import {getGoogleAnalyticsBanner} from "./modules/banner-google-analytics.js";
import {getSurveyForm} from "./modules/form-survey.js";
import {getContactForm} from "./modules/form-contact.js";
import {getSubscribeForm} from "./modules/form-subscribe.js";

getImpressumContactField();
getSurveyForm();
getContactForm();
getSubscribeForm();

if (sessionStorage.getItem(`cookies_enabled`) === null) {
  getGoogleAnalyticsBanner();
}
