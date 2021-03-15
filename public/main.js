/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ "./assets/sass/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _contact_form_php__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.php */ "./contact-form.php");
/* harmony import */ var _survey_php__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey.php */ "./survey.php");
/* harmony import */ var _subscribe_php__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribe.php */ "./subscribe.php");






__webpack_require__(/*! ./index.html */ "./index.html");

__webpack_require__(/*! ./contact.html */ "./contact.html");

__webpack_require__(/*! ./impressum.html */ "./impressum.html");

__webpack_require__(/*! ./datenschutz.html */ "./datenschutz.html");

__webpack_require__(/*! ./cookie-richtlinien.html */ "./cookie-richtlinien.html");

/***/ }),

/***/ "./js/const.js":
/*!*********************!*\
  !*** ./js/const.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormType": () => (/* binding */ FormType),
/* harmony export */   "MailChimpError": () => (/* binding */ MailChimpError),
/* harmony export */   "MailChimpErrorText": () => (/* binding */ MailChimpErrorText)
/* harmony export */ });
var FormType = {
  SURVEY: "survey",
  SUBSCRIBE: "subscribe",
  CONTACT: "contact"
};
var MailChimpError = {
  INVALID: "Invalid Resource",
  EXISTS: "Member Exists",
  FORGOTTEN: "Forgotten Email Not Subscribed"
};
var MailChimpErrorText = {
  INVALID: "Deine E-Mail ist falsch oder ung\xFCltig. Gib bitte eine echte E-Mail-Adresse ein.",
  EXISTS: "Deine E-Mail ist bereits in unserer Liste.",
  FORGOTTEN: "Deine E-Mail wurde dauerhaft gel\xF6scht und kann nicht erneut importiert werden."
};

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_form_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/form-validator.js */ "./js/utils/form-validator.js");
/* harmony import */ var _utils_form_send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/form-send.js */ "./js/utils/form-send.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./js/const.js");



var subscribeForm = document.querySelectorAll(".subscribe form");
var subscribeFields = ["email"];
var contactForm = document.querySelector(".contact__form form");
var contactFields = ["email", "message"];
var surveyForm = document.querySelector(".survey form");
var banner = document.querySelector(".banner");

if (subscribeForm) {
  subscribeForm.forEach(function (item) {
    return new _utils_form_validator_js__WEBPACK_IMPORTED_MODULE_0__.default(item, subscribeFields, _const_js__WEBPACK_IMPORTED_MODULE_2__.FormType.SUBSCRIBE).init();
  });
}

if (contactForm) {
  new _utils_form_validator_js__WEBPACK_IMPORTED_MODULE_0__.default(contactForm, contactFields, _const_js__WEBPACK_IMPORTED_MODULE_2__.FormType.CONTACT).init();
}

if (surveyForm) {
  var checkboxes = surveyForm.querySelectorAll("input[type=checkbox]");
  var otherOption = surveyForm.querySelector(".form__option-item--option-list");
  var otherOptionInput = surveyForm.querySelector(".form__option-self");
  var submitButton = surveyForm.querySelector(".survey__form-button--submit");
  var submitOptionButton = surveyForm.querySelector(".survey__form-button--send");
  var cancelButton = surveyForm.querySelector(".survey__form-button--cancel");

  var isButtonDisabled = function isButtonDisabled(button, state) {
    button.disabled = state;
  };

  checkboxes.forEach(function (element) {
    return element.addEventListener("click", function (evt) {
      if (evt.target.id === "option-7") {
        evt.target.checked = false;
      }

      var isChecked = Array.from(checkboxes).some(function (checkbox) {
        return checkbox.checked === true;
      });

      if (isChecked) {
        isButtonDisabled(submitButton, false);
        isButtonDisabled(submitOptionButton, false);
      } else {
        isButtonDisabled(submitButton, true);
        isButtonDisabled(submitOptionButton, true);
      }
    });
  });
  otherOption.addEventListener("click", function () {
    otherOption.classList.add("form__option-item--hidden");
    otherOptionInput.classList.remove("form__option-self--hidden");
    submitButton.classList.add("survey__form-button--hidden");
    otherOptionInput.querySelector("input").focus();
    otherOptionInput.addEventListener("input", function () {
      var input = otherOptionInput.querySelector("input");
      var value = input.value;

      if (value.trim() === "") {
        isButtonDisabled(submitOptionButton, true);
      } else {
        isButtonDisabled(submitOptionButton, false);
      }
    });
  });
  cancelButton.addEventListener("click", function () {
    otherOptionInput.classList.add("form__option-self--hidden");
    otherOption.classList.remove("form__option-item--hidden");
    otherOption.querySelector(".form__option-input").checked = false;
    submitButton.classList.remove("survey__form-button--hidden");
    otherOptionInput.querySelector("input").value = "";
  });
  surveyForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    (0,_utils_form_send_js__WEBPACK_IMPORTED_MODULE_1__.send)(surveyForm, _const_js__WEBPACK_IMPORTED_MODULE_2__.FormType.SURVEY);
  });
}

if (banner) {
  var closeButton = banner.querySelector(".banner__button");
  closeButton.addEventListener("click", function () {
    banner.classList.add("banner--hidden");
  });
}

/***/ }),

/***/ "./js/utils/form-send.js":
/*!*******************************!*\
  !*** ./js/utils/form-send.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./js/const.js");




var onSuccess = function onSuccess(form, type) {
  if (_const_js__WEBPACK_IMPORTED_MODULE_0__.FormType.SURVEY === type) {
    var successMessage = form.querySelector(".survey__form-success");
    successMessage.classList.remove("survey__form-success--hidden");
  }

  if (_const_js__WEBPACK_IMPORTED_MODULE_0__.FormType.SUBSCRIBE === type) {
    var _successMessage = form.querySelector(".form__message--success");

    var successMessageOnButton = form.querySelector(".form__button");
    successMessageOnButton.classList.add("form__button--success");
    successMessageOnButton.innerText = "Vielen Dank!";

    _successMessage.classList.remove("form__message--hidden");
  }

  if (_const_js__WEBPACK_IMPORTED_MODULE_0__.FormType.CONTACT === type) {
    var _successMessageOnButton = form.querySelector(".form__button");

    _successMessageOnButton.classList.add("form__button--success");

    _successMessageOnButton.innerText = "Vielen Dank f\xFCr deine Nachricht!";
    form.reset();
  }
};

var getMailChimpError = function getMailChimpError(data, errorMessage) {
  if (data.title === _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpError.INVALID) {
    errorMessage.innerText = _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpErrorText.INVALID;
  }

  if (data.title === _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpError.EXISTS) {
    errorMessage.innerText = _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpErrorText.EXISTS;
  }

  if (data.title === _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpError.FORGOTTEN) {
    errorMessage.innerText = _const_js__WEBPACK_IMPORTED_MODULE_0__.MailChimpErrorText.FORGOTTEN;
  }

  errorMessage.classList.remove("form__message--hidden");
};

var onError = function onError(form, data) {
  var errorMessage = form.querySelector(".form__message--error");

  if (data.title) {
    getMailChimpError(data, errorMessage);
  } else {
    errorMessage.classList.remove("form__message--hidden");
  }
};

var send = function send(form, type) {
  var StatusCode = {
    OK: 200
  };
  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);

    if (data === StatusCode.OK || data.status === "pending") {
      onSuccess(form, type);
    } else {
      onError(form, data);
    }
  });
};

/***/ }),

/***/ "./js/utils/form-validator.js":
/*!************************************!*\
  !*** ./js/utils/form-validator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
/* harmony import */ var _form_send_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-send.js */ "./js/utils/form-send.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FormValidator = /*#__PURE__*/function () {
  function FormValidator(form, fields, formType) {
    _classCallCheck(this, FormValidator);

    this.form = form;
    this.fields = fields;
    this.formType = formType;
    this.errors = 0;
  }

  _createClass(FormValidator, [{
    key: "init",
    value: function init() {
      this.validateOnEntry();
      this.validateOnSubmit();
    }
  }, {
    key: "validateOnSubmit",
    value: function validateOnSubmit() {
      var _this = this;

      this.form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this.fields.forEach(function (field) {
          var input = _this.form.querySelector("[data-type=\"".concat(field, "\"]"));

          _this.validateFields(input);
        });

        if (_this.errors === 0) {
          (0,_form_send_js__WEBPACK_IMPORTED_MODULE_0__.send)(_this.form, _this.formType);
        }
      });
    }
  }, {
    key: "validateOnEntry",
    value: function validateOnEntry() {
      var _this2 = this;

      this.fields.forEach(function (field) {
        var input = _this2.form.querySelector("[data-type=\"".concat(field, "\"]"));

        input.addEventListener("input", function () {
          var successMessage = _this2.form.querySelector(".form__message--error");

          var errorMessage = _this2.form.querySelector(".form__message--success");

          var buttonMessage = _this2.form.querySelector(".form__button");

          if (errorMessage) {
            if (!errorMessage.classList.contains("form__message--hidden")) {
              errorMessage.classList.add("form__message--hidden");
            }
          }

          if (successMessage) {
            if (!successMessage.classList.contains("form__message--hidden")) {
              successMessage.classList.add("form__message--hidden");
            }
          }

          if (buttonMessage.classList.contains("form__button--success")) {
            buttonMessage.classList.remove("form__button--success");
            buttonMessage.innerText = "Abonnieren!";

            if (_this2.formType === "subscribe") {
              buttonMessage.innerText = "Abonnieren!";
            }

            if (_this2.formType === "contact") {
              buttonMessage.innerText = "Nachricht abschicken";
            }
          }

          _this2.validateFields(input);
        });
      });
    }
  }, {
    key: "validateFields",
    value: function validateFields(field) {
      // Check presence of values
      if (field.value.trim() === "") {
        this.setStatus(field, "Bitte schreib uns eine Nachricht", "error");
      } else {
        this.setStatus(field, null, "success");
      } // check for a valid email address


      if (field.type === "email") {
        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (re.test(field.value)) {
          this.setStatus(field, null, "success");
          this.errors = 0;
        } else {
          this.setStatus(field, "Bitte gib eine g\xFCltige E-mail Adresse an", "error");
          this.errors++;
        }
      }
    }
  }, {
    key: "setStatus",
    value: function setStatus(field, message, status) {
      var errorMessage = field.parentElement.querySelector(".form__input-message");

      if (status === "success") {
        if (errorMessage) {
          errorMessage.innerText = "";
        }

        field.classList.remove("form__input--error");
      }

      if (status === "error") {
        field.parentElement.querySelector(".form__input-message").innerText = message;
        field.classList.add("form__input--error");
      }
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./contact-form.php":
/*!**************************!*\
  !*** ./contact-form.php ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "contact-form.php");

/***/ }),

/***/ "./subscribe.php":
/*!***********************!*\
  !*** ./subscribe.php ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "subscribe.php");

/***/ }),

/***/ "./survey.php":
/*!********************!*\
  !*** ./survey.php ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "survey.php");

/***/ }),

/***/ "./assets/sass/main.scss":
/*!*******************************!*\
  !*** ./assets/sass/main.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1615814491647
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"../","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./contact.html":
/*!**********************!*\
  !*** ./contact.html ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <meta content=\"Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm.‍ Auf wissenschaftlicher Basis und mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können.\" name=\"description\">\n\n  <title>YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</title>\n\n  <link rel=\"preload\" href=\"fonts/roboto-lite-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"preload\" href=\"fonts/roboto-bold-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"shortcut icon\" href=\"img/favicon.jpg\" type=\"image/x-icon\">\n  <link rel=\"apple-touch-icon\" href=\"img/favicon.jpg\">\n</head>\n<body>\n  <header class=\"page-header\">\n    <nav class=\"main-nav\">\n      <div class=\"container\">\n        <div class=\"main-nav__wrapper\">\n          <a href=\"index.html\" class=\"main-nav__logo logo\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n              <!-- 1х: 945px; 2x: 1890px -->\n              <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"48\" height=\"50\" alt=\"Logo von YIN YOUNG YOU\">\n            </picture>\n          </a>\n          <ul class=\"main-nav__list site-list\">\n            <li class=\"site-list__item\">\n              <a href=\"contact.html\">Kontakt</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <main class=\"page-main\">\n    <h1 class=\"visually-hidden\">YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</h1>\n\n    <section class=\"contact\">\n      <div class=\"contact__bg\"></div>\n      <div class=\"contact__wrapper\">\n        <div class=\"contact__content-wrapper\">\n          <h2 class=\"visually-hidden\">Konaktformular</h2>\n          <div class=\"container\">\n            <div class=\"contact__content\">\n              <h3>Schreibe uns eine Nachricht</h3>\n              <p>Hast du Fragen oder Anmerkungen? <br>Wir freuen uns über deine Kontaktaufnahme und antworten dir frühstmöglich.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"contact__form-wrapper\">\n          <div class=\"container\">\n            <div class=\"contact__form-content-wrapper\">\n              <div class=\"contact__picture\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/team-foto-Stella_Susanne@1x.webp 1x, img/team-foto-Stella_Susanne@2x.webp 2x\">\n                  <!-- 1х: 400px; 2x: 800px -->\n                  <img src=\"img/team-foto-Stella_Susanne@1x.png\" srcset=\"img/team-foto-Stella_Susanne@2x.png 2x\" width=\"150\" height=\"150\" alt=\"Foto von Team\">\n                </picture>\n              </div>\n              <div class=\"contact__form\">\n                <form action=\"contact-form.php\" method=\"post\" class=\"form\">\n                  <div class=\"contact__form-item-wrapper\">\n                    <div class=\"contact__form-item\">\n                      <label for=\"user-name\">Name:</label>\n                      <input class=\"contact__form-input\" id=\"user-name\" type=\"text\" name=\"user_name\" placeholder=\"Dein Name\">\n                      <span class=\"form__input-message\"></span>\n                    </div>\n                    <div class=\"contact__form-item\">\n                      <label for=\"email-3\">E-mail Adresse:</label>\n                      <input class=\"contact__form-input form__input\" data-type=\"email\" id=\"email-3\" type=\"email\" name=\"email\" placeholder=\"Dein E-Mail\" required>\n                      <span class=\"form__input-message\"></span>\n                    </div>\n                  </div>\n                    <div class=\"contact__form-item contact__form-item--textarea\">\n                      <label for=\"message\">Nachricht:</label>\n                      <textarea class=\"contact__form-input contact__form-input--textarea\" data-type=\"message\" name=\"message\" id=\"message\" placeholder=\"Was können wir für dich tun?\" required></textarea>\n                      <span class=\"form__input-message\"></span>\n                    </div>\n                  <button class=\"contact__form-button form__button\">Nachricht abschicken</button>\n                  <div class=\"form__message form__message--error form__message--hidden\">\n                    <p>Oops! Leider ist etwas Schiefgelaufen :/</p>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"newsletter\">\n      <div class=\"newsletter__bg\"></div>\n      <div class=\"container\">\n        <div class=\"newsletter__content-wrapper\">\n          <div class=\"newsletter__content\">\n            <h3>Du möchtest auf dem Laufenden bleiben?</h3>\n            <div class=\"newsletter__subscribe subscribe\">\n              <p>Trage hier deine E-Mail-Adresse ein - wir informieren dich gerne, sobald wir starten können:</p>\n              <form action=\"subscribe.php\" method=\"POST\" class=\"form\">\n                <div class=\"subscribe__fields-wrapper\">\n                  <label for=\"email-4\" class=\"visually-hidden\">E-mail</label>\n                  <input\n                      class=\"subscribe__input form__input\"\n                      type=\"email\"\n                      name=\"email\"\n                      id=\"email-4\"\n                      data-type=\"email\"\n                      required\n                  />\n                  <span class=\"form__input-message\"></span>\n                  <button type=\"submit\" class=\"form__button\">Abonnieren</button>\n                </div>\n                <div class=\"form__message form__message--success form__message--hidden\">\n                  <p>Prüf bitte deinen Posteingang oder Spam-Ordner, um dein Abonnement zu bestätigen</p>\n                </div>\n                <div class=\"form__message form__message--error form__message--hidden\">\n                  <p>Oops! Leider ist etwas Schiefgelaufen :/</p>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"page-footer__content-wrapper\">\n        <a href=\"index.html\" class=\"page-footer__logo logo\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n            <!-- 1х: 945px; 2x: 1890px -->\n            <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"54\" height=\"57\" alt=\"Logo von YIN YOUNG YOU\">\n          </picture>\n        </a>\n        <ul class=\"page-footer__info-list\">\n          <li class=\"page-footer__info-item\">\n            <a href=\"impressum.html\">Impressum</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Datenschutz</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Cookie-Richtlinien</a>\n          </li>\n        </ul>\n        <ul class=\"page-footer__social social\">\n          <li class=\"social__item\">\n            <a href=\"https://www.facebook.com/Yin-Young-You-110442964063523\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">facebook</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-facebook\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.linkedin.com/company/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">linkedin</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-linkedin\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.instagram.com/yin_young_you/?hl=en\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">instagram</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-instagram\"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n\n  <section class=\"banner\">\n    <h2 class=\"visually-hidden\">Link für Startnext</h2>\n    <div class=\"container\">\n      <a href=\"https://www.startnext.com/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"banner__content-wrapper\">\n          <div class=\"banner__content\">\n            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>\n            <div class=\"banner__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x\">\n                <!-- 1х: 77px; 2x: 154px -->\n                <img src=\"img/logo_startnext@1x.png\" srcset=\"img/logo_startnext@2x.png 2x\" width=\"77\" height=\"77\" alt=\"Logo von Startnext\">\n              </picture>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <button class=\"banner__button\"></button>\n  </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./cookie-richtlinien.html":
/*!*********************************!*\
  !*** ./cookie-richtlinien.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <meta content=\"Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm.‍ Auf wissenschaftlicher Basis und mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können.\" name=\"description\">\n\n  <title>YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</title>\n\n  <link rel=\"preload\" href=\"fonts/roboto-lite-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"preload\" href=\"fonts/roboto-bold-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"shortcut icon\" href=\"img/favicon.jpg\" type=\"image/x-icon\">\n  <link rel=\"apple-touch-icon\" href=\"img/favicon.jpg\">\n</head>\n<body>\n  <header class=\"page-header\">\n    <nav class=\"main-nav\">\n      <div class=\"container\">\n        <div class=\"main-nav__wrapper\">\n          <a href=\"index.html\" class=\"main-nav__logo logo\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n              <!-- 1х: 945px; 2x: 1890px -->\n              <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"48\" height=\"50\" alt=\"Logo von YIN YOUNG YOU\">\n            </picture>\n          </a>\n          <ul class=\"main-nav__list site-list\">\n            <li class=\"site-list__item\">\n              <a href=\"contact.html\">Kontakt</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <main class=\"page-main\">\n    <section class=\"aup\">\n      <div class=\"container\">\n        <h2 class=\"visually-hidden\">Cookie-richtlinien</h2>\n        <h3>Cookie-richtlinien</h3>\n        <div class=\"aup__content-wrapper\">\n          <h4 class=\"aup__title\">Title</h4>\n          <p class=\"aup__sub-title\">Sub-title</p>\n          <p>Text</p>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"page-footer__content-wrapper\">\n        <a href=\"index.html\" class=\"page-footer__logo logo\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n            <!-- 1х: 945px; 2x: 1890px -->\n            <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"54\" height=\"57\" alt=\"Logo von YIN YOUNG YOU\">\n          </picture>\n        </a>\n        <ul class=\"page-footer__info-list\">\n          <li class=\"page-footer__info-item\">\n            <a href=\"impressum.html\">Impressum</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Datenschutz</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"cookie-richtlinien.html\">Cookie-Richtlinien</a>\n          </li>\n        </ul>\n        <ul class=\"page-footer__social social\">\n          <li class=\"social__item\">\n            <a href=\"https://www.facebook.com/Yin-Young-You-110442964063523\" target=\"_blank\">\n              <span class=\"visually-hidden\">facebook</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-facebook\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.linkedin.com/company/yin-young-you\" target=\"_blank\">\n              <span class=\"visually-hidden\">linkedin</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-linkedin\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.instagram.com/yin_young_you/?hl=en\" target=\"_blank\">\n              <span class=\"visually-hidden\">instagram</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-instagram\"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n\n  <section class=\"banner\">\n    <h2 class=\"visually-hidden\">Link für Startnext</h2>\n    <div class=\"container\">\n      <a href=\"https://www.startnext.com/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"banner__content-wrapper\">\n          <div class=\"banner__content\">\n            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>\n            <div class=\"banner__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x\">\n                <!-- 1х: 77px; 2x: 154px -->\n                <img src=\"img/logo_startnext@1x.png\" srcset=\"img/logo_startnext@2x.png 2x\" width=\"77\" height=\"77\" alt=\"Logo von Startnext\">\n              </picture>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <button class=\"banner__button\"></button>\n  </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./datenschutz.html":
/*!**************************!*\
  !*** ./datenschutz.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <meta content=\"Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm.‍ Auf wissenschaftlicher Basis und mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können.\" name=\"description\">\n\n  <title>YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</title>\n\n  <link rel=\"preload\" href=\"fonts/roboto-lite-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"preload\" href=\"fonts/roboto-bold-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"shortcut icon\" href=\"img/favicon.jpg\" type=\"image/x-icon\">\n  <link rel=\"apple-touch-icon\" href=\"img/favicon.jpg\">\n</head>\n<body>\n  <header class=\"page-header\">\n    <nav class=\"main-nav\">\n      <div class=\"container\">\n        <div class=\"main-nav__wrapper\">\n          <a href=\"index.html\" class=\"main-nav__logo logo\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n              <!-- 1х: 945px; 2x: 1890px -->\n              <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"48\" height=\"50\" alt=\"Logo von YIN YOUNG YOU\">\n            </picture>\n          </a>\n          <ul class=\"main-nav__list site-list\">\n            <li class=\"site-list__item\">\n              <a href=\"contact.html\">Kontakt</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <main class=\"page-main\">\n    <section class=\"aup\">\n      <div class=\"container container--aup\">\n        <h2 class=\"visually-hidden\">Datenschutz</h2>\n        <h3>Datenschutz</h3>\n        <div class=\"aup__content-wrapper\">\n          <h4 class=\"aup__title\">Allgemeiner Hinweis und Pflichtinformationen</h4>\n          <p class=\"aup__sub-title\">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>\n          <p>YIN YOUNG &amp; YOU (in Gründung) <br>Ansprechpartnerin: Stella Neidhöfer <br>Altensteinstraße 40 <br>14195 Berlin</p>\n\n          <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>\n\n          <h4 class=\"aup__title\">Wiederruf Ihrer Einwilligung zur Datenverarbeitung</h4>\n          <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>\n\n          <h4 class=\"aup__title\">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h4>\n          <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:</p>\n          <a href=\"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html\" target=\"_blank\">https://www.bfdi.bund.de/DE/Infothek/ Anschriften_Links/ anschriften_links-node.html.</a>\n          <p></p>\n          <h4 class=\"aup__title\">Recht auf Datenübertragbarkeit</h4>\n          <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>\n\n          <b>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</b>\n          <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>\n\n          <b>SSL- bzw. TLS-Verschlüsselung</b>\n          <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>\n\n          <b>Newsletter-Daten</b>\n          <p>Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den \"Austragen\"-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.</p>\n\n          <b>Google Analytics</b>\n          <p>Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.Google Analytics verwendet \"Cookies.\" Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert. Server-Standort ist im Regelfall die USA. </p>\n          <p>Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir &nbsp;ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und ggf. auch Werbung zu optimieren.</p>\n\n          <b>IP-Anonymisierung</b>\n          <p>Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google statt.</p>\n\n          <b>Browser Plugin</b>\n          <p>Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin herunterladen und installieren: <a href=\"https://tools.google.com/dlpage/gaoptout?hl=de.Widerspruch\" target=\"_blank\">https://tools.google.com/dlpage/gaoptout?hl=de.Widerspruch</a> gegen die Datenerfassung <br>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer Website verhindert: Google Analytics deaktivieren. <br>Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href=\"https://support.google.com/analytics/answer/6004245?hl=de.Auftragsverarbeitung\" target=\"_blank\">https://support.google.com/analytics/answer/ 6004245?hl=de.Auftragsverarbeitung</a> <br>Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen.Demografische Merkmale bei Google AnalyticsUnsere Website verwendet die Funktion “demografische Merkmale” von Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu einer bestimmten Person ist nicht möglich. Sie können diese Funktion jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten durch Google Analytics, wie im Punkt “Widerspruch gegen die Datenerfassung” erläutert, generell untersagen.</p>\n\n          <b>Google Web Fonts</b>\n          <p>Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. <br>Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer Website zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und Übertragung unseres Webauftritts. <br>Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen \"Privacy Shield\" zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleisten. <br>Einzelheiten über Google Web Fonts finden Sie unter: <a href=\"https://www.google.com/fonts#AboutPlace:about\" target=\"_blank\">https://www.google.com/ fonts#AboutPlace:about</a> und weitere Informationen in den Datenschutzbestimmungen von Google: <a href=\"https://policies.google.com/privacy/partners?hl=de\" target=\"_blank\">https://policies.google.com/privacy/partners?hl=de</a></p>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"page-footer__content-wrapper\">\n        <a href=\"index.html\" class=\"page-footer__logo logo\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n            <!-- 1х: 945px; 2x: 1890px -->\n            <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"54\" height=\"57\" alt=\"Logo von YIN YOUNG YOU\">\n          </picture>\n        </a>\n        <ul class=\"page-footer__info-list\">\n          <li class=\"page-footer__info-item\">\n            <a href=\"impressum.html\">Impressum</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Datenschutz</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Cookie-Richtlinien</a>\n          </li>\n        </ul>\n        <ul class=\"page-footer__social social\">\n          <li class=\"social__item\">\n            <a href=\"https://www.facebook.com/Yin-Young-You-110442964063523\" target=\"_blank\">\n              <span class=\"visually-hidden\">facebook</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-facebook\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.linkedin.com/company/yin-young-you\" target=\"_blank\">\n              <span class=\"visually-hidden\">linkedin</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-linkedin\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.instagram.com/yin_young_you/?hl=en\" target=\"_blank\">\n              <span class=\"visually-hidden\">instagram</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-instagram\"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n\n  <section class=\"banner\">\n    <h2 class=\"visually-hidden\">Link für Startnext</h2>\n    <div class=\"container\">\n      <a href=\"https://www.startnext.com/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"banner__content-wrapper\">\n          <div class=\"banner__content\">\n            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>\n            <div class=\"banner__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x\">\n                <!-- 1х: 77px; 2x: 154px -->\n                <img src=\"img/logo_startnext@1x.png\" srcset=\"img/logo_startnext@2x.png 2x\" width=\"77\" height=\"77\" alt=\"Logo von Startnext\">\n              </picture>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <button class=\"banner__button\"></button>\n  </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./impressum.html":
/*!************************!*\
  !*** ./impressum.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <meta content=\"Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm.‍ Auf wissenschaftlicher Basis und mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können.\" name=\"description\">\n\n  <title>YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</title>\n\n  <link rel=\"preload\" href=\"fonts/roboto-lite-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"preload\" href=\"fonts/roboto-bold-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"shortcut icon\" href=\"img/favicon.jpg\" type=\"image/x-icon\">\n  <link rel=\"apple-touch-icon\" href=\"img/favicon.jpg\">\n</head>\n<body>\n  <header class=\"page-header\">\n    <nav class=\"main-nav\">\n      <div class=\"container\">\n        <div class=\"main-nav__wrapper\">\n          <a href=\"index.html\" class=\"main-nav__logo logo\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n              <!-- 1х: 945px; 2x: 1890px -->\n              <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"48\" height=\"50\" alt=\"Logo von YIN YOUNG YOU\">\n            </picture>\n          </a>\n          <ul class=\"main-nav__list site-list\">\n            <li class=\"site-list__item\">\n              <a href=\"contact.html\">Kontakt</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <main class=\"page-main\">\n    <section class=\"aup\">\n      <div class=\"container container--aup\">\n        <h2 class=\"visually-hidden\">Impressum</h2>\n        <h3>Impressum</h3>\n        <div class=\"aup__content-wrapper\">\n          <h4 class=\"aup__title\">Angaben gemäß &#167; 5 TMG</h4>\n          <p class=\"aup__sub-title\">YIN YOUNG&nbsp;&amp;&nbsp;YOU&nbsp;(in Gründung)</p>\n          <p>Vertreten durch: <br> Stella Neidhöfer &amp; Susanne Birnkammer <br>Altensteinstraße 40 <br>14195 Berlin</p>\n\n          <h4 class=\"aup__title\">Kontakt</h4>\n          <p>Telefon: <a href=\"tel:+491702816458\">+49 170 281 64 58</a> <br>E-Mail: <a href=\"mailto:info@yin-young-you.com\">info@yin-young-you.com</a></p>\n\n          <h4 class=\"aup__title\">Redaktionell Verantwortliche</h4>\n          <p>Stella Neidhöfer &amp; Susanne Birnkammer <br>Altensteinstraße 40 <br>14195 Berlin</p>\n\n          <h4 class=\"aup__title\">Haftung für Inhalte</h4>\n          <p>Als Diensteanbieter sind wir gemäß &#167; 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &#167;&#167; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. <br>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>\n\n          <h4 class=\"aup__title\">Haftung für Links</h4>\n          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. <br>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>\n\n          <h4 class=\"aup__title\">Urheberrecht</h4>\n          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb derGrenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. <br>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"page-footer__content-wrapper\">\n        <a href=\"index.html\" class=\"page-footer__logo logo\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n            <!-- 1х: 945px; 2x: 1890px -->\n            <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"54\" height=\"57\" alt=\"Logo von YIN YOUNG YOU\">\n          </picture>\n        </a>\n        <ul class=\"page-footer__info-list\">\n          <li class=\"page-footer__info-item\">\n            <a href=\"impressum.html\">Impressum</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Datenschutz</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Cookie-Richtlinien</a>\n          </li>\n        </ul>\n        <ul class=\"page-footer__social social\">\n          <li class=\"social__item\">\n            <a href=\"https://www.facebook.com/Yin-Young-You-110442964063523\" target=\"_blank\">\n              <span class=\"visually-hidden\">facebook</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-facebook\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.linkedin.com/company/yin-young-you\" target=\"_blank\">\n              <span class=\"visually-hidden\">linkedin</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-linkedin\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.instagram.com/yin_young_you/?hl=en\" target=\"_blank\">\n              <span class=\"visually-hidden\">instagram</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-instagram\"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n\n  <section class=\"banner\">\n    <h2 class=\"visually-hidden\">Link für Startnext</h2>\n    <div class=\"container\">\n      <a href=\"https://www.startnext.com/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"banner__content-wrapper\">\n          <div class=\"banner__content\">\n            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>\n            <div class=\"banner__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x\">\n                <!-- 1х: 77px; 2x: 154px -->\n                <img src=\"img/logo_startnext@1x.png\" srcset=\"img/logo_startnext@2x.png 2x\" width=\"77\" height=\"77\" alt=\"Logo von Startnext\">\n              </picture>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <button class=\"banner__button\"></button>\n  </section>\n</body>\n</html>\n");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\n<html lang=\"de\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <meta content=\"Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm.‍ Auf wissenschaftlicher Basis und mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können.\" name=\"description\">\n\n  <title>YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</title>\n\n  <link rel=\"preload\" href=\"fonts/roboto-lite-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"preload\" href=\"fonts/roboto-bold-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\">\n  <link rel=\"shortcut icon\" href=\"img/favicon.jpg\" type=\"image/x-icon\">\n  <link rel=\"apple-touch-icon\" href=\"img/favicon.jpg\">\n</head>\n<body>\n  <header class=\"page-header\">\n    <nav class=\"main-nav\">\n      <div class=\"container\">\n        <div class=\"main-nav__wrapper\">\n          <a class=\"main-nav__logo logo\">\n            <picture>\n              <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n              <!-- 1х: 945px; 2x: 1890px -->\n              <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"48\" height=\"50\" alt=\"Logo von YIN YOUNG YOU\">\n            </picture>\n          </a>\n          <ul class=\"main-nav__list site-list\">\n            <li class=\"site-list__item\">\n              <a href=\"contact.html\">Kontakt</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <main class=\"page-main\">\n    <h1 class=\"visually-hidden\">YIN YOUNG YOU - Das individuelle Präventionsprogramm für dein Kind</h1>\n\n    <section class=\"offer section\">\n      <div class=\"offer__bg\"></div>\n      <div class=\"container\">\n        <div class=\"offer__wrapper\">\n          <div class=\"offer__content-wrapper\">\n            <h2 class=\"visually-hidden\">Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Kursprogramm</h2>\n            <div class=\"offer__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n                <!-- 1х: 945px; 2x: 1890px -->\n                <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"167\" height=\"175\" alt=\"Logo von YIN YOUNG YOU\">\n              </picture>\n            </div>\n            <div class=\"offer__content\">\n              <h3>More Colours, More You</h3>\n              <p>Hier entsteht unser innovatives Angebot für ein individuell an die Bedürfnisse deines Kindes angepasstes Präventionsprogramm. <br‍>Mit dem Ziel, deinem Kind mit viel Spaß dabei zu helfen, den Weg in eine gesunde und glückliche Zukunft zu gehen und sowohl alltägliche als auch schwierige Aufgaben selbst meistern zu können. Und das Ganze auf wissenschaftlich basierter Basis.</p>\n            </div>\n          </div>\n          <div class=\"offer__subscribe subscribe\">\n            <p>Trage hier deine E-Mail-Adresse ein - wir informieren dich gerne, sobald wir starten können:</p>\n            <form action=\"subscribe.php\" method=\"POST\" class=\"form\">\n              <div class=\"subscribe__fields-wrapper\">\n                <label class=\"visually-hidden\" for=\"email-1\">E-mail</label>\n                <input\n                    class=\"subscribe__input form__input\"\n                    type=\"email\"\n                    name=\"email\"\n                    id=\"email-1\"\n                    data-type=\"email\"\n                    required\n                />\n                <span class=\"form__input-message\"></span>\n                <button type=\"submit\" class=\"form__button\">Abonnieren</button>\n              </div>\n              <div class=\"form__message form__message--success form__message--hidden\">\n                <p>Prüf bitte deinen Posteingang oder Spam-Ordner, um dein Abonnement zu bestätigen</p>\n              </div>\n              <div class=\"form__message form__message--error form__message--hidden\">\n                <p>Oops! Leider ist etwas Schiefgelaufen :/</p>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"method section\">\n      <div class=\"container\">\n        <div class=\"method__content-wrapper\">\n          <h2 class=\"visually-hidden\">Psychologische Methoden für ein langfristiges psychisches Wohlbefinden</h2>\n          <div class=\"method__content\">\n            <h3>Was braucht ein Kind für ein langfristiges psychisches Wohlbefinden?</h3>\n            <p>Wir nehmen jedes Kind und jede*n Jugendliche*n in den eigenen Bedürfnissen und Interessen wahr und entwickeln daraus individuell angepasste und gesundheitsfördernde Kursprogramme. Diese bestehen aus wissenschaftlich belegten Methoden die Spaß machen und durch Psychologinnen konzipiert wurden. Dabei nutzen wir Inhalte aus dem Kinderyoga, der Kunsttherapie, Theaterpädagogik und vielen mehr…</p>\n          </div>\n          <div class=\"method__visualization-wrapper\">\n            <ul class=\"method__visualization-list\">\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-nature@1x.webp 1x, img/concept-logo-nature@2x.webp 2x\">\n                  <!-- 1х: 207px; 2x: 414px -->\n                  <img src=\"img/concept-logo-nature@1x.png\" srcset=\"img/concept-logo-nature@2x.png 2x\" width=\"94\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-act@1x.webp 1x, img/concept-logo-act@2x.webp 2x\">\n                  <!-- 1х: 176px; 2x: 352px -->\n                  <img src=\"img/concept-logo-act@1x.png\" srcset=\"img/concept-logo-act@2x.png 2x\" width=\"81\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-yoga@1x.webp 1x, img/concept-logo-yoga@2x.webp 2x\">\n                  <!-- 1х: 193px; 2x: 386px -->\n                  <img src=\"img/concept-logo-yoga@1x.png\" srcset=\"img/concept-logo-yoga@2x.png 2x\" width=\"88\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-art@1x.webp 1x, img/concept-logo-art@2x.webp 2x\">\n                  <!-- 1х: 178px; 2x: 356px -->\n                  <img src=\"img/concept-logo-art@1x.png\" srcset=\"img/concept-logo-art@2x.png 2x\" width=\"81\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-dance@1x.webp 1x, img/concept-logo-dance@2x.webp 2x\">\n                  <!-- 1х: 207px; 2x: 414px -->\n                  <img src=\"img/concept-logo-dance@1x.png\" srcset=\"img/concept-logo-dance@2x.png 2x\" width=\"92\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n              <li class=\"method__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/concept-logo-music@1x.webp 1x, img/concept-logo-music@2x.webp 2x\">\n                  <!-- 1х: 198px; 2x: 396px -->\n                  <img src=\"img/concept-logo-music@1x.png\" srcset=\"img/concept-logo-music@2x.png 2x\" width=\"90\" height=\"90\" alt=\"Logo der psychologischen Methode\">\n                </picture>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"concept section\">\n      <div class=\"container\">\n        <div class=\"concept__content-wrapper\">\n          <h2 class=\"visually-hidden\">Konzept von YIN YOUNG YOU</h2>\n          <div class=\"concept__content\">\n            <h3>Wissenschaftlich Basiert</h3>\n            <p>YIN YOUNG & YOU besteht aus einer Kombination von wissenschaftlich belegten Therapieformen, bei denen die Wirksamkeit zu spezifischen Problematiken vielfältig bewiesen wurde. Beispielsweise konnte gezeigt werden, dass Methoden der Musiktherapie unterstützend bei Einschlafproblematiken wirken können (Wang, Sun & Zang, 2014). Die Basis der Kurse bilden spielerische und hilfreiche Übungen, welche bei den individuellen Bedürfnissen ansetzt und zugeschnitten auf den individuellen Lebensalltag des Kindes ist: mit dessen Problemen, Freuden und Interessen. Wir, Susanne und Stella, haben mithilfe unserer Erfahrungen aus dem Psychologiestudium, dem praktischen Wissen aus der Arbeit mit Kindern und Jugendlichen und unseren bisherigen Forschungsarbeiten ein einzigartiges Modell entwickelt, die Methoden verschiedener Therapieformen kombiniert, sinnvoll und kindgerecht zu nutzen. Damit wird das große Ziel verfolgt, die Kenntnisse aus der Wissenschaft anzuwenden, um dein Kind in der Gesundheit präventiv zu fördern und ihr/ihm einen Werkzeugkoffer für eine nachhaltige glückliche Zukunft zu geben.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"prevention section\">\n      <div class=\"container\">\n      <h2 class=\"visually-hidden\">Prävention</h2>\n        <div class=\"prevention__content\">\n          <h3>Prävention und warum es für alle wichtig ist.</h3>\n          <p>Prävention = “Oberbegriff für <span>zielgerichtete</span> Maßnahmen und Aktivitäten, um Krankheiten oder gesundheitliche Schädigungen zu vermeiden, [oder] das Risiko der Erkrankung zu verringern” (Bundesministerium für Gesundheit, 2021). <br>\n          Prävention ist also für die Gesundheit aller Menschen wichtig. Und je früher man damit beginnt, desto wirkungsvoller. Unser Fokus liegt daher auf Kindern und Jugendlichen. Viele Kinder haben das Glück, gesund und ohne Sorgen aufwachsen zu können. Es gibt aber auch Kinder und Jugendliche die neben alterstypischen Schwierigkeiten zusätzlich noch andere Sorgen als ständige Begleiter haben. Durch Mehrfachbelastungen sind diese einem besonders hohen Risiko ausgesetzt, psychisch zu erkranken. <br>\n          Welche Mehrfachbelastungen sind gemeint? Schambesetzte Themen wie die eigene Sexualität, ein für sie empfundenes “unnormales” Familienleben, Rassismus- oder Mobbingerfahrungen, … möchten wir durch unsere Präventions-App erreichen. Ohne Angst vor Bewertung, flexibel von Zuhause, wann immer sie wollen, erhalten sie durch YIN YOUNG & YOU eine helfende Hand. Denn jedes Kinderherz hat es verdient glücklich zu sein und zu verstehen: <span>Ich bin gut so wie ich bin!</span> <br>\n          Wie sollte diese Hilfe aussehen? <br>\n          Örtlich und zeitlich flexibel, anonym und ohne Hemmungen: <span>Die YIN YOUNG & YOU App.</span>\n          </p>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"app section\">\n      <h2 class=\"visually-hidden\">Yin Young and You App</h2>\n      <div class=\"app__title-wrapper\">\n        <div class=\"container\">\n          <h3>Die YIN YOUNG & YOU App. <br> <span>Eine helfende Hand, jederzeit und überall.</span></h3>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"app__content\">\n          <p>Die YIN YOUNG & YOU App für ein nachhaltiges psychisches Wohlbefinden für Kinder und Jugendliche. Als Psychologinnen legen wir einen großen Wert auf Wirksamkeit. Deshalb besteht unsere App aus zwei Elementen, um dein Kind bestmöglich zu unterstützen.</p>\n          <ul class=\"app__list-elements\">\n            <li class=\"app__item-element\">\n              <div class=\"app__picture\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/app-anamnese@1x.webp 1x, img/app-anamnese@2x.webp 2x\">\n                  <!-- 1х: 152px; 2x: 304px -->\n                  <img src=\"img/app-anamnese@1x.png\" srcset=\"img/app-anamnese@2x.png 2x\" width=\"114\" height=\"95\" alt=\"Bild vom Element\">\n                </picture>\n              </div>\n              <div class=\"app__item-content\">\n                <b>1. Anamnese</b>\n                <p>Welche Bedürfnisse und Interessen hat dein Kind?</p>\n              </div>\n            </li>\n            <li class=\"app__item-element\">\n              <div class=\"app__picture\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/app-praeventions@1x.webp 1x, img/app-praeventions@2x.webp 2x\">\n                  <!-- 1х: 161px; 2x: 322px -->\n                  <img src=\"img/app-praeventions@1x.png\" srcset=\"img/app-praeventions@2x.png 2x\" width=\"121\" height=\"107\" alt=\"Bild vom Element\">\n                </picture>\n              </div>\n              <div class=\"app__item-content\">\n                <b>2. Präventionsprogramm</b>\n                <p>Verschiedene Module, individuell angepasst auf dein Kind.</p>\n              </div>\n            </li>\n          </ul>\n          <h4>Für Wen ist die Yin Young & you App</h4>\n          <div class=\"app__visualization-wrapper\">\n            <ul class=\"app__visualization-list\">\n              <li class=\"app__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/app-farbkleks-gelb@1x.webp 1x, img/app-farbkleks-gelb@2x.webp 2x\">\n                  <!-- 1х: 620px; 2x: 1240px -->\n                  <img src=\"img/app-farbkleks-gelb@1x.png\" srcset=\"img/app-farbkleks-gelb@2x.png 2x\" width=\"306\" height=\"306\" alt=\"Bild vom Präventionsprogramm\">\n                </picture>\n                <div class=\"app__visualization-text\">\n                  <p class=\"app__hover-above\">Kinder und Jugendliche, <br> <span>ohne erhöhtes Risiko psychisch <br> zu erkranken</span></p>\n                  <p class=\"app__hover-below\">Zur allgemeinen Prävention des psychischen Wohlbefindens und Stärkung des glücklichen Selbst</p>\n                </div>\n              </li>\n              <li class=\"app__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/app-farbkleks-tuerkis@1x.webp 1x, img/app-farbkleks-tuerkis@2x.webp 2x\">\n                  <!-- 1х: 600px; 2x: 1200px -->\n                  <img src=\"img/app-farbkleks-tuerkis@1x.png\" srcset=\"img/app-farbkleks-tuerkis@2x.png 2x\" width=\"306\" height=\"306\" alt=\"Bild vom Präventionsprogramm\">\n                </picture>\n                <div class=\"app__visualization-text\">\n                  <p class=\"app__hover-above\">Kinder und Jugendliche <br> <span>mit erhöhtem Risiko psychisch <br> zu erkranken</span><br>(z.B. Kinder psychisch <br> belasteter Eltern)</p>\n                  <p class=\"app__hover-below\">Zur Prävention des psychischen Wohlbefindens mit an die speziellen Lebenswelten der Kinder und Jugendlichen angepassten Inhalte </p>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"survey section\">\n      <div class=\"container\">\n      <h2 class=\"visually-hidden\">Umfrage</h2>\n        <div class=\"survey__content\">\n          <h3>Deine Meinung ist uns wichtig - Welchen Fokus wünschst du dir für dein Kind?</h3>\n          <form class=\"form\" method=\"post\" action=\"survey.php\">\n            <ul class=\"form__option-list\">\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_1\" id=\"option-1\">\n                <label for=\"option-1\">Allgemeine Prävention für das psychische Wohlbefinden</label>\n              </li>\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_2\" id=\"option-2\">\n                <label for=\"option-2\">Psychisch belastete Eltern</label>\n              </li>\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_3\" id=\"option-3\">\n                <label for=\"option-3\">Mobbing in der Schule</label>\n              </li>\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_4\" id=\"option-4\">\n                <label for=\"option-4\">Eigene Sexualität</label>\n              </li>\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_5\" id=\"option-5\">\n                <label for=\"option-5\">Rassismus-Erfahrung</label>\n              </li>\n              <li class=\"form__option-item\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_6\" id=\"option-6\">\n                <label for=\"option-6\">Scheidungskinder</label>\n              </li>\n              <li class=\"form__option-item form__option-item--option-list\">\n                <input class=\"visually-hidden form__option-input\" type=\"checkbox\" name=\"option_7\" id=\"option-7\">\n                <label for=\"option-7\">Eigene Angabe</label>\n              </li>\n            </ul>\n            <div class=\"form__option-self form__option-self--hidden\">\n              <div class=\"survey__form-input-wrapper\">\n                <label for=\"option-8\">Eigene Angabe (max. 80 Zeichen):</label>\n                <input class=\"form__option-input\" type=\"text\" name=\"option_8\" id=\"option-8\" maxlength=\"80\">\n              </div>\n              <div class=\"survey__form-button-wrapper\">\n                <button class=\"survey__form-button survey__form-button--cancel form__button\" type=\"button\">Verwerfen</button>\n                <button class=\"survey__form-button survey__form-button--send form__button\" type=\"submit\" disabled>Übernehmen</button>\n              </div>\n            </div>\n            <div class=\"survey__form-success survey__form-success--hidden\">Vielen Dank für deine Teilnahme!</div>\n            <button class=\"survey__form-button survey__form-button--submit form__button\" type=\"submit\" disabled>Antwort abschicken</button>\n            <div class=\"form__message form__message--error form__message--hidden\">\n              <p>Oops! Leider ist etwas Schiefgelaufen :/</p>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"team\">\n      <div class=\"container\">\n        <div class=\"team__content-wrapper\">\n          <h2 class=\"visually-hidden\">Unser Team</h2>\n          <div class=\"team__content\">\n            <h3>Ein Team mit Herz, Verstand und einem gemeinsamen Ziel:</h3>\n            <b>Die Gesundheit von Kindern und Jugendlichen nachhaltig fördern!</b>\n          </div>\n          <div class=\"team__visualization-wrapper\">\n            <ul class=\"team__visualization-list\">\n              <li class=\"team__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/team-foto-susanne@1x.webp 1x, img/team-foto-susanne@2x.webp 2x\">\n                  <!-- 1х: 400px; 2x: 800px -->\n                  <img src=\"img/team-foto-susanne@1x.png\" srcset=\"img/team-foto-susanne@2x.png 2x\" width=\"213\" height=\"213\" alt=\"Foto von Susanne\">\n                </picture>\n                <dl>\n                  <dt>Susanne</dt>\n                  <dd>Gründerin<br> M.Sc. Psychologin</dd>\n                </dl>\n              </li>\n              <li class=\"team__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/team-foto-stella@1x.webp 1x, img/team-foto-stella@2x.webp 2x\">\n                  <!-- 1х: 400px; 2x: 800px -->\n                  <img src=\"img/team-foto-stella@1x.png\" srcset=\"img/team-foto-stella@2x.png 2x\" width=\"213\" height=\"213\" alt=\"Foto von Stella\">\n                </picture>\n                <dl>\n                  <dt>Stella</dt>\n                  <dd>Gründerin<br> M.Sc. (cand.) Psychologin</dd>\n                </dl>\n              </li>\n              <li class=\"team__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/team-foto-philip@1x.webp 1x, img/team-foto-philip@2x.webp 2x\">\n                  <!-- 1х: 400px; 2x: 800px -->\n                  <img src=\"img/team-foto-philip@1x.png\" srcset=\"img/team-foto-philip@2x.png 2x\" width=\"213\" height=\"213\" alt=\"Foto von Philip\">\n                </picture>\n                <dl>\n                  <dt>Philip</dt>\n                  <dd>UX Designer</dd>\n                </dl>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"sponsors\">\n      <div class=\"container\">\n        <div class=\"sponsors__content-wrapper\">\n          <h2 class=\"visually-hidden\">Sponsoren</h2>\n          <div class=\"sponsors__content\">\n            <h3>Yin Young & You wird gefördert durch:</h3>\n          </div>\n          <div class=\"sponsors__visualization-wrapper\">\n            <ul class=\"sponsors__visualization-list\">\n              <li class=\"sponsors__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/sponsors-ESF@1x.webp 1x, img/sponsors-ESF@2x.webp 2x\">\n                  <!-- 1х: 250px; 2x: 500px -->\n                  <img src=\"img/sponsors-ESF@1x.png\" srcset=\"img/sponsors-ESF@2x.png 2x\" width=\"168\" height=\"121\" alt=\"Logo vom Sponsor\">\n                </picture>\n              </li>\n              <li class=\"sponsors__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/sponsors-berlin@1x.webp 1x, img/sponsors-berlin@2x.webp 2x\">\n                  <!-- 1х: 265px; 2x: 530px -->\n                  <img src=\"img/sponsors-berlin@1x.png\" srcset=\"img/sponsors-berlin@2x.png 2x\" width=\"170\" height=\"116\" alt=\"Logo vom Sponsor\">\n                </picture>\n              </li>\n              <li class=\"sponsors__visualization-item\">\n                <picture>\n                  <source type=\"image/webp\" srcset=\"img/sponsors-profund@1x.webp 1x, img/sponsors-profund@2x.webp 2x\">\n                  <!-- 1х: 320px; 2x: 640px -->\n                  <img src=\"img/sponsors-profund@1x.png\" srcset=\"img/sponsors-profund@2x.png 2x\" width=\"197\" height=\"73\" alt=\"Logo vom Sponsor\">\n                </picture>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"newsletter\">\n      <div class=\"newsletter__bg\"></div>\n      <div class=\"container\">\n        <div class=\"newsletter__content-wrapper\">\n          <div class=\"newsletter__content\">\n            <h3>Du möchtest auf dem Laufenden bleiben?</h3>\n            <div class=\"newsletter__subscribe subscribe\">\n              <p>Trage hier deine E-Mail-Adresse ein - wir informieren dich gerne, sobald wir starten können:</p>\n              <form action=\"subscribe.php\" method=\"POST\" class=\"form\">\n                <div class=\"subscribe__fields-wrapper\">\n                  <label class=\"visually-hidden\" for=\"email-2\">E-mail</label>\n                  <input\n                      class=\"subscribe__input form__input\"\n                      type=\"email\"\n                      name=\"email\"\n                      id=\"email-2\"\n                      data-type=\"email\"\n                      required\n                  />\n                  <span class=\"form__input-message\"></span>\n                  <button type=\"submit\" class=\"form__button\">Abonnieren</button>\n                </div>\n                <div class=\"form__message form__message--success form__message--hidden\">\n                  <p>Prüf bitte deinen Posteingang oder Spam-Ordner, um dein Abonnement zu bestätigen</p>\n                </div>\n                <div class=\"form__message form__message--error form__message--hidden\">\n                  <p>Oops! Leider ist etwas Schiefgelaufen :/</p>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"page-footer__content-wrapper\">\n        <a class=\"page-footer__logo logo\">\n          <picture>\n            <source type=\"image/webp\" srcset=\"img/logo-main@1x.webp 1x, img/logo-main@2x.webp 2x\">\n            <!-- 1х: 945px; 2x: 1890px -->\n            <img src=\"img/logo-main@1x.png\" srcset=\"img/logo-main@2x.png 2x\" width=\"54\" height=\"57\" alt=\"Logo von YIN YOUNG YOU\">\n          </picture>\n        </a>\n        <ul class=\"page-footer__info-list\">\n          <li class=\"page-footer__info-item\">\n            <a href=\"impressum.html\">Impressum</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Datenschutz</a>\n          </li>\n          <li class=\"page-footer__info-item\">\n            <a href=\"datenschutz.html\">Cookie-Richtlinien</a>\n          </li>\n        </ul>\n        <ul class=\"page-footer__social social\">\n          <li class=\"social__item\">\n            <a href=\"https://www.facebook.com/Yin-Young-You-110442964063523\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">facebook</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-facebook\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.linkedin.com/company/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">linkedin</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-linkedin\"></use>\n              </svg>\n            </a>\n          </li>\n          <li class=\"social__item\">\n            <a href=\"https://www.instagram.com/yin_young_you/?hl=en\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"visually-hidden\">instagram</span>\n              <svg width=\"50\" height=\"50\">\n                <use xlink:href=\"img/sprite/sprite.svg#sprite-icon-instagram\"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n\n  <section class=\"banner\">\n    <h2 class=\"visually-hidden\">Link für Startnext</h2>\n    <div class=\"container\">\n      <a href=\"https://www.startnext.com/yin-young-you\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"banner__content-wrapper\">\n          <div class=\"banner__content\">\n            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>\n            <div class=\"banner__logo\">\n              <picture>\n                <source type=\"image/webp\" srcset=\"img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x\">\n                <!-- 1х: 77px; 2x: 154px -->\n                <img src=\"img/logo_startnext@1x.png\" srcset=\"img/logo_startnext@2x.png 2x\" width=\"77\" height=\"77\" alt=\"Logo von Startnext\">\n              </picture>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <button class=\"banner__button\"></button>\n  </section>\n</body>\n</html>\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2dbf5922800c77f0f434")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors"],
/******/ 			["./index.js","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map