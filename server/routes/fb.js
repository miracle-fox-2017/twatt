const express = require('express');
const router = express.Router();
const fb = require('../controllers/fb')

/* GET home page. */
router.get('/me', fb.setAccessToken, fb.getTimeline);
router.post('/me', fb.setAccessToken, fb.postStatus);
router.get('/profile', fb.setAccessToken, fb.getUserData);

module.exports = router;
