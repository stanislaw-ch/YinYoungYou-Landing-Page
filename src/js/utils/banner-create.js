export const createBanner = function (type, body) {
  const banner = document.createElement(`section`);
  banner.classList.add(`banner`);
  banner.classList.add(`banner__${type}`);

  banner.insertAdjacentHTML(`afterbegin`, body);

  document.body.appendChild(banner);

  return banner;
};
