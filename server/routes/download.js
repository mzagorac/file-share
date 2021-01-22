const router = require('express').Router();
const { downloadFile } = require('../controllers/download');

router.post('/download', downloadFile);

module.exports = router;
