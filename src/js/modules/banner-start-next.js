import {Banners} from "../const.js";
import {animateCSS} from "../utils/animate-css.js";
import {createBanner} from "../utils/banner-create.js";

export const setStartNextBanner = function () {
  createBanner(`start-next`, Banners.START_NEXT);

  const banner = document.querySelector(`.banner__start-next`);
  const closeButton = banner.querySelector(`.banner__close-button`);

  banner.classList.remove(`banner--hidden`);

  animateCSS(banner, `slideInUp`);

  closeButton.addEventListener(`click`, function () {
    banner.remove();
  });
};
