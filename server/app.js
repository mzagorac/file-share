const express = require('express');

const uploadRouter = require('./routes/uploads.js');
const userRouter = require('./routes/users.js');
const downloadRouter = require('./routes/download');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/v1', [userRouter, downloadRouter, uploadRouter]);

// Error handling middleware, IMPLEMENT!!!
app.use((err, req, res, next) => {
  console.log('Catch all errors');
});

module.exports = app;
