const fs = require('fs');
const { pipeline } = require('stream');
const { getOneFile } = require('../services/download');

async function downloadFile(req, res, next) {
  const { code } = req.body;

  let file;

  try {
    file = await getOneFile(code);
  } catch (error) {
    return next(error);
  }

  if (!file) {
    return next(new Error('Unable to find file'));
  }
  res.attachment(file.path);
  res.set('Content-Length', file.size);
  const readFile = fs.createReadStream(file.path);

  pipeline(readFile, res, err => {
    if (err) {
      return next(err);
    }
    console.log('Successfully downloaded file');
  });

  // res.download(file.path, file.filename, err => {
  //   if (err) {
  //     console.log('Error downolading file', err);
  //     return next(err);
  //   }
  // });
}

module.exports = { downloadFile };
