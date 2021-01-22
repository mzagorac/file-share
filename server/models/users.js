// const { getDb } = require('../database/mongoDB');

const usersModel = {
      validator: {
        $jsonSchema: {
          // bsonType: 'object',
          required: ['username', 'email', 'password'],
          properties: {
            username: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            email: {
              bsonType: 'string',
              // pattern: '/\S+@\S+\.\S+/',
              description: 'must be an a string and is required',
            },
            password: {
              bsonType: 'string',
              description: 'must be an a string and is required',
            },
          },
        },
      },
    }

// async function userValidationDb() {
//   // console.log(getDb());
//   try {
//     await getDb().createCollection('users', {
//       validator: {
//         $jsonSchema: {
//           // bsonType: 'object',
//           required: ['username', 'email', 'password'],
//           properties: {
//             username: {
//               bsonType: 'string',
//               description: 'must be a string and is required',
//             },
//             email: {
//               bsonType: 'string',
//               // pattern: '/\S+@\S+\.\S+/',
//               description: 'must be an a string and is required',
//             },
//             password: {
//               bsonType: 'string',
//               description: 'must be an a string and is required',
//             },
//           },
//         },
//       },
//     });
//   } catch (error) {
//     console.log('Creating database failed', error);
//   }
// }

// async function creteOneUser(user) {
//   await getDb().collection('users').insertOne(user);
// }

module.exports = {
  usersModel
  // userValidationDb,
  // creteOneUser,
};
