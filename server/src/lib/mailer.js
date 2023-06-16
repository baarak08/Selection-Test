const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  auth: {
    user: process.env.nodemailer_email,
    pass: process.env.nodemailer_pass,
  },
  host: "smtp.gmail.com",
  tls: {
    rejectUnauthorized: false,
  },
});

const mailer = async ({ subject, html, to, text }) => {
  await transport.sendMail({
    subject: subject || "testing to send email",
    html: html || "",
    to: to || "ikhsanmubaarak@gamil.com",
    text: text || "hello this email from nodemailer",
  });
};

module.exports = mailer;
