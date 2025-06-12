const express = require('express');
const { verifyToken } = require('../middleware/verifyToken');
const { allowRoles } = require('../middleware/checkRole');
const User = require('../models/user.model');
const router = express.Router();

router.get('/users-all', verifyToken, allowRoles('admin'), async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

router.get('/loggedin-user', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

router.get('/admin-data', verifyToken, allowRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome admin' });
});

module.exports = router;
