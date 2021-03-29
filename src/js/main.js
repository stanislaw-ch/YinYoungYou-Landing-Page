require(`animate.css`);

import {setImpressumContactField} from "./modules/impressum-contact-field.js";
import {setGoogleAnalyticsBanner} from "./modules/banner-google-analytics.js";
import {setStartNextBanner} from "./modules/banner-start-next.js";
import {setSurveyForm} from "./modules/form-survey.js";
import {setContactForm} from "./modules/form-contact.js";
import {setSubscribeForm} from "./modules/form-subscribe.js";

setImpressumContactField();
setSurveyForm();
setContactForm();
setSubscribeForm();

if (sessionStorage.getItem(`cookies_enabled`) === null) {
  setGoogleAnalyticsBanner();
} else {
  setStartNextBanner();
}
