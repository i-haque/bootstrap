const express = require('express');
const router = express.Router();
const Lodge = require('../models/lodge');
const { validateLodge } = require('../utils/validation');

router.get('/', async (req, res) => {
  try {
    const lodges = await Lodge.find().exec();
    res.json(lodges);
  } catch (e) {
    return res.json({ 'error message': e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const errorMsg = validateLodge(req.body);
    if (errorMsg) return res.json({ 'error message': errorMsg });
    const newRecord = await Lodge.create(req.body);
    res.json(newRecord);
  } catch (e) {
    return res.json({ 'error message': e.message });
  }
});

module.exports = router;
