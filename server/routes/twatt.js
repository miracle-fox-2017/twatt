const express = require('express');
const router = express.Router();
const twatt = require('../controllers/twatt')

/* GET home page. */
router.get('/', twatt.timelineFeature);
router.post('/', twatt.postFeature);
router.get('/search', twatt.searchFeature);

module.exports = router;
