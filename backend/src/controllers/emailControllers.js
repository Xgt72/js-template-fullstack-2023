require("dotenv").config();
const nodemailer = require("nodemailer");

const {
  SMTP_SENDIN,
  SMTP_PORT_SENDIN,
  SMTP_SENDIN_USER,
  SMTP_SENDIN_PASSWORD,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_SENDIN,
  port: SMTP_PORT_SENDIN,
  secure: false,
  auth: {
    user: SMTP_SENDIN_USER,
    pass: SMTP_SENDIN_PASSWORD,
  },
});

const sendEmailAndChangePasswordUser = (req, res) => {
  const { mail, firstname } = req.body;

  const options = {
    from: SMTP_SENDIN_USER,
    to: mail,
    subject: "Première connexion à votre espace Praticien",
    html: `<h2 style="font-size: 32px">Bonjour ${firstname}</h2><p>Votre espace utilisateur a bien été crée au sein de notre structure.</p><p>Votre identifiant : ${mail}</p><p>Votre mot de passe provisoire est votre prénom (sans majuscule)</p><p>Pour modifier votre mot de passe et sécuriser votre compte, cliquez sur le lien suivant : </p> <a href=${process.env.FRONTEND_URL}/changer-mon-mot-de-passe>Cliquez ici</a>`,
  };

  transporter
    .sendMail(options)
    .then(() => {
      res.status(201).send("Email sent with success!!!");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  sendEmailAndChangePasswordUser,
};
