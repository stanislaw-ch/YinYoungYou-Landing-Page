import analytics from "../utils/google-analytics.js";
import {animateCSS} from "../utils/animate-css.js";
import {createBanner} from "../utils/banner-create.js";
import {setStartNextBanner} from "../modules/banner-start-next.js";
import {Banners, Cookies} from "../const.js";

export const setGoogleAnalyticsBanner = function () {
  const isAnalytics = function () {
    if (sessionStorage.getItem(`cookies_enabled`) === Cookies.TRUE) {
      console.log(`true`);
      analytics.onAccept();
    } else {
      console.log(`false`);
      analytics.onRevoke();
    }
  };

  const onButtonClick = async function (trigger, selector, isAccept) {
    await trigger.addEventListener(`click`, function () {
      selector.classList.add(`banner--hidden`);
      sessionStorage.setItem(`cookies_enabled`, isAccept);
      isAnalytics();
      setStartNextBanner();
    });
  };

  function setBanner(selector) {
    const optInButton = selector.querySelector(`.banner__button--opt-in`);
    const optOutButton = selector.querySelector(`.banner__button--opt-out`);
    selector.classList.remove(`banner--hidden`);
    animateCSS(selector, `slideInUp`);

    onButtonClick(optInButton, selector, Cookies.TRUE);
    onButtonClick(optOutButton, selector, Cookies.FALSE);
  }

  createBanner(`google-analytics`, Banners.GOOGLE);

  const banner = document.querySelector(`.banner__google-analytics`);
  setBanner(banner);
};
