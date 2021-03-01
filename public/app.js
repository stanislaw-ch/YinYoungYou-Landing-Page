const express = require(`express`);
const request = require(`request`);
const bodyParser = require(`body-parser`);
const path = require(`path`);

const nodemailer = require(`nodemailer`);
let smtpTransport = require(`nodemailer-smtp-transport`);

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, `public`)));

smtpTransport = nodemailer.createTransport(smtpTransport({
  service: `Gmail`,
  auth: {
    user: `server.yin.young.you@gmail.com`,
    pass: `BERlinyin13125`
  }
}));

// Subscribe

app.post(`/subscribe`, (req, res) => {
  const {email, js} = req.body; // eslint-disable-line

  const mcData = {
    members: [
      {
        email_address: email, // eslint-disable-line
        status: `pending`
      }
    ]
  };

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: `https://us1.api.mailchimp.com/3.0/lists/3cffd71e2e`,
    method: `POST`,
    headers: {
      Authorization: `auth 74b7876b8f52833c5e36bd878105ca54-us1`
    },
    body: mcDataPost
  };

  if (email) {
    request(options, (err, response, body) => { // eslint-disable-line
      if (err) {
        res.json({error: err});
      } else {
        // if (js) {
        res.sendStatus(200);
        // } else {
        //   res.redirect(`/index.html`);
        // }
      }
    });
  } else {
    res.status(404).send({message: `failed`});
  }
});

// Contact form

app.post(`/send-form`, function (req, res) { // eslint-disable-line
  const {message, email, user_name} = req.body; // eslint-disable-line

  const mailOptions = {
    from: `${user_name} ${email}`, // eslint-disable-line
    to: `post@centreokey.ru`,
    subject: `Kontakt: Neue Nachricht`,
    text: `Name: ${user_name}\r\nE-mail: ${email}\r\nNachricht:\r\n${message}` // eslint-disable-line
  };

  smtpTransport.sendMail(mailOptions, function (error, info) { // eslint-disable-line
    if (error) {
      res.status(404).send({message: `failed`});
    } else {
      res.sendStatus(200);
    }
  });
});

// Survey form

app.post(`/send-survey`, function (req, res) { // eslint-disable-line
  const {option_1, option_2, option_3, option_4, option_5, option_6, option_8} = req.body; // eslint-disable-line

  const isChecked = (option) => option === undefined ? `-` : `+`;
  const mailOptions = {
    from: ``,
    to: `post@centreokey.ru`,
    subject: `Umfrage: Neue Nachricht`,
    text: `Allgemeine Prävention für das psychische Wohlbefinden: ${isChecked(option_1)}\r\nPsychisch belastete Eltern: ${isChecked(option_2)}\r\nMobbing in der Schule: ${isChecked(option_3)}\r\nEigene Sexualität: ${isChecked(option_4)}\r\nRassismus-Erfahrung: ${isChecked(option_5)}\r\nScheidungskinder: ${isChecked(option_6)}\r\nEigene Angabe: ${option_8}\r\n` // eslint-disable-line
  };

  smtpTransport.sendMail(mailOptions, function (error, info) { // eslint-disable-line
    if (error) {
      res.status(404).send({message: `failed`});
    } else {
      res.sendStatus(200);
      // console.log(`Email sent: ` + info.response);
    }
  });
});

// ------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started!`));
