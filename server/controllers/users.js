const { ObjectID } = require('mongodb');
const {
  creteOneUser,
  getUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} = require('../services/users');

const getAllUsers = (req, res) => {
  getUsers(users => {
    res.json(users);
  });
};

const getUser = (req, res) => {
  const id = req.params.id;

  getOneUser(id, (err, user) => {
    if (!err) return res.json(user);
    return res.json({ err });
  });
};

const postUser = (req, res) => {
  const user = req.body;
  creteOneUser(user);
  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await deleteOneUser(id);

  if (!user.value) {
    return res.json({ message: 'Unable to find user for deletion' });
  }

  res.json(user.value);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const user = await updateOneUser(id, data);
  console.log(user);

  res.json({
    result: user.result,
  });
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
};
