const { getDb } = require('../database/mongoDB');

async function postOneFile(file) {
  const uploadedFile = await getDb().collection('uploads').insertOne(file);
  const results = {
    result: uploadedFile.result,
    ops: uploadedFile.ops,
  };
  // console.log(results);
  return results;
}

module.exports = {
  postOneFile,
};
