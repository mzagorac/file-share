require('dotenv').config();

module.exports = {
  dev: {
    port: process.env.PORT,
    db_uri: process.env.DB_URI,
    email: process.env.EMAIL,
    emailPass: process.env.EMAIL_PASS,
  },
};
