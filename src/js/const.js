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

export const Contacts = {
  TEL: `+491702816458`,
  EMAIL: `info`,
  DOMAIN: `yin-young-you.com`
};

export const Cookies = {
  TRUE: `true`,
  FALSE: `false`
};

export const Banners = {
  START_NEXT: `<h2 class="visually-hidden">Link für Startnext</h2>
    <div class="container">
      <a href="https://www.startnext.com/yin-young-you" target="_blank" rel="noopener">
        <div class="banner__content-wrapper">
          <div class="banner__content">
            <p>Dir gefällt unser Projekt? Unterstütze uns auf</p>
            <div class="banner__logo">
              <picture>
                <source type="image/webp" srcset="img/logo_startnext@1x.webp 1x, img/logo_startnext@2x.webp 2x">
                <!-- 1х: 77px; 2x: 154px -->
                <img src="img/logo_startnext@1x.png" srcset="img/logo_startnext@2x.png 2x" width="77" height="77" alt="Logo von Startnext">
              </picture>
            </div>
          </div>
        </div>
      </a>
    </div>
    <button class="banner__close-button" aria-label="Schließen"></button>`,
  GOOGLE: `<h2 class="visually-hidden">Google-analytics</h2>
    <div class="container">
      <div class="banner__content-wrapper">
        <div class="banner__content">
          <h3>Mhhh… lecker cookies!</h3>
          <p>Wir verwenden Cookies um die Zugriffe auf unsere Webseite zu analysieren und somit unsere Webseite für Sie zu optimieren. Durch Auswahl “Cookies ablehnen“ können Sie alle nicht notwendigen Cookies blockieren. Technisch notwendige Cookies werden auch bei der Auswahl von „Cookies ablehnen“ gesetzt. Weitere Informationen zum Thema Datenschutz finden Sie <a href="datenschutz.html">hier.</a></p>
        </div>
        <div class="banner__button-wrapper">
          <button class="banner__button banner__button--opt-out" type="button">Cookies ablehnen</button>
          <button class="banner__button banner__button--opt-in" type="button">Cookies zulassen</button>
        </div>
      </div>
    </div>`
};
