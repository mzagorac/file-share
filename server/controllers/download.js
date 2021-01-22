const { getOneFile } = require('../services/download');

async function downloadFile(req, res, next) {
  const { code } = req.body;

  const file = await getOneFile(code);

  if (!file) {
    next(new Error('Unable to find file'));
  }

  res.download(file.path, err => {
    if (err) {
      return console.log('Error downolading file', err);
    }
  });
}

module.exports = { downloadFile };
