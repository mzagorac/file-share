const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
} = require('../controllers/users.js');

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;
