// TA03 PLACEHOLDER
const express = require('express');
const { getTA03, getFilteredResults } = require('../controllers/ta03');
const router = express.Router();

router.get('/', getTA03);
router.get('/filter', getFilteredResults);

module.exports = router;
