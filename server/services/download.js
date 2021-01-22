const { getDb } = require('../database/mongoDB');

async function getOneFile(code) {
  return await getDb().collection('uploads').find({ code }).next();
}

module.exports = {
  getOneFile,
};
