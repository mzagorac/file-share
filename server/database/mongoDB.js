const { MongoClient } = require('mongodb');
const { usersModel } = require('../models/users');
const url = require('../config').dev.db_uri;
const client = new MongoClient(url, { useUnifiedTopology: true });
let db;

async function dbRun() {
  try {
    await client.connect();
    db = client.db('files');
    const dbs = await db.admin().listDatabases();
    const files = dbs.databases.filter(db => db.name === 'files');
    if (!files || files.length === 0) {
      await db.createCollection('users', usersModel);
      await db.createCollection('uploads');
    }

    console.log('MongoDB connected');
    return client;
  } catch (error) {
    console.error(error);
  } finally {
    // await client.close();
  }
}

function getDb() {
  return db;
}

module.exports = { dbRun, getDb };

// dbRun().catch(console.error);

// console.log(db);

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log('Databases');
//   databasesList.databases.forEach(db => console.log(` -${db.name}`));
// }

// const url = 'mongodb://localhost:27017';

// const dbName = 'fileStore';

// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
//   if (err) {
//     console.log('Connectin database error occured');
//   }

//   const db = client.db(dbName);

//   console.log('Database successfully connected');

//   client.close();
// });

// const mongoose = require('mongoose');

// mongoose.connect(
//   'mongodb://localhost:27017/test',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (error, client) => {
//     if (!error) console.log('Database connected');
//     // console.log(client);
//   }
// );
