const multer = require('multer');
const { postOneFile } = require('../services/uploads');
const { generateCode } = require('../libs/libs');
const { emailTo } = require('../services/email');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const postFile = async (req, res, next) => {
  if (!req.file) {
    return next(new Error('Plesae upload a file'));
  }
  if (!req.body['email-to'] /* || !req.body['email-from'] */) {
    return next(new Error('Please provide sender and receiver emails'));
  }

  req.body.createdAt = Date.now();
  req.body.code = generateCode();

  const results = await postOneFile(Object.assign(req.file, req.body));

  // TODO better check
  if (results) {
    const code = results.ops[0].code;

    emailTo(
      `${results.ops[0]['email-to']}`,
      'http://127.0.0.1:3000/download',
      code
    ).catch(console.error);

    res.json({ uploadedFile: results });
  }
};

module.exports = {
  postFile,
  upload,
};
