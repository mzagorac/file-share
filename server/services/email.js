const nodemailer = require('nodemailer');
const {
  dev: { email, emailPass },
} = require('../config');

async function emailTo(addr, link, code) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: emailPass,
    },
  });

  const html = `
    <a href=${link}>${link}</a>
    <br>
    <p>Check code: <b>${code}</b></p>
  `;

  let info = await transporter.sendMail({
    from: `Zagorac Milan ${email}`,
    to: `${addr}`,
    subject: 'File transfer',
    text: 'Transfer file',
    html,
  });

  console.log(`Message sent: ${info.messageId}`);

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}

// main().catch(console.error);

module.exports = {
  emailTo,
};
