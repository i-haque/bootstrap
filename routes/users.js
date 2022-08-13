const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { validateUser } = require('../utils/validation');

router.get('/', async (req, res) => {
  try {
    res.json(await User.find({}).exec());
  } catch (e) {
    res.json({ 'error message': e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const errorMsg = validateUser(req.body);
    if (errorMsg) return res.json({ 'error message': errorMsg });
    res.json(await User.create(req.body));
  } catch (e) {
    res.json({ 'error message': e.message });
  }
});

module.exports = router;
