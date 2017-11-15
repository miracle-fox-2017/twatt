var express = require('express');
var router = express.Router();
const twitt = require('../controllers/twittControllers');

/* GET users listing. */
router.get('/', twitt.getTimeline);
router.get('/search', twitt.searchTwitt);
router.post('/post', twitt.addStatus);

module.exports = router;
