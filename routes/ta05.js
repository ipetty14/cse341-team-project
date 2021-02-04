const express = require('express');
const router = express.Router();

const {
  getIndex,
  postChangeStyle,
  postCounter,
  postDestroySession,
} = require('../controllers/ta05');

router.get('/', getIndex);
router.post('/change-style', postChangeStyle);
router.post('/counter', postCounter);
router.post('/destroy-session', postDestroySession);

module.exports = router;
