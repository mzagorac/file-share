const Router = require('express').Router;
const { postFile, upload } = require('../controllers/uploads.js');

const router = Router();

router.post('/uploadfile', upload.single('my-file'), postFile);

module.exports = router;
