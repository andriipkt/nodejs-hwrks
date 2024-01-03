const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "user11100121@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "user11100121@gmail.com",
  };

  transporter
    .sendMail(email)
    .then(() => console.log("Email sent successfully"))
    .catch((error) => console.log(error.message));
};

module.exports = {
  sendEmail,
};
