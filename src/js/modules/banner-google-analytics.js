import analytics from "../utils/google-analytics.js";
import {animateCSS} from "../utils/animate-css.js";
import {createBanner} from "../utils/banner-create.js";
import {setStartNextBanner} from "../modules/banner-start-next.js";
import {Banners, Cookies} from "../const.js";

export const setGoogleAnalyticsBanner = function () {
  const isAnalytics = function () {
    if (sessionStorage.getItem(`cookies_enabled`) === Cookies.TRUE) {
      analytics.onAccept();
    } else {
      analytics.onRevoke();
    }
  };

  const onButtonClick = async function (trigger, selector, isAccept) {
    await trigger.addEventListener(`click`, function () {
      selector.remove();
      sessionStorage.setItem(`cookies_enabled`, isAccept);
      isAnalytics();
      setStartNextBanner();
    });
  };

  function setBanner(selector) {
    const optInButton = selector.querySelector(`.banner__button--opt-in`);
    const optOutButton = selector.querySelector(`.banner__button--opt-out`);
    animateCSS(selector, `slideInUp`);

    onButtonClick(optInButton, selector, Cookies.TRUE);
    onButtonClick(optOutButton, selector, Cookies.FALSE);
  }

  createBanner(`google-analytics`, Banners.GOOGLE);

  const banner = document.querySelector(`.banner__google-analytics`);
  setBanner(banner);
};
