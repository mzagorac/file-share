const { ObjectID } = require('mongodb');
const { getDb } = require('../database/mongoDB');

async function creteOneUser(user) {
  await getDb().collection('users').insertOne(user);
}

function getUsers(cb) {
  getDb()
    .collection('users')
    .find({})
    .toArray(function (err, items) {
      // console.log(items);
      cb(items);
    });
}

async function getOneUser(id, cb) {
  const findById = ObjectID.createFromHexString(id);
  const user = await getDb().collection('users').find({ _id: findById });

  user
    .on('data', data => {
      cb(null, data);
    })
    .on('error', error => {
      cb(error);
    });
}

async function deleteOneUser(id, cb) {
  const idForRemoval = ObjectID.createFromHexString(id);
  const user = await getDb()
    .collection('users')
    .findOneAndDelete({ _id: idForRemoval });

  return user;
}

async function updateOneUser(id, data) {
  const idForUpdate = ObjectID.createFromHexString(id);
  const user = await getDb()
    .collection('users')
    .updateOne({ _id: idForUpdate }, { $set: data });

  return user;
}

module.exports = {
  creteOneUser,
  getUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
};
