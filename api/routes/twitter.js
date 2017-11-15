var express = require('express');
var router = express.Router();
var Twitters = require('../controllers/controllerTwitter')

/* GET users listing. */
router.get('/', Twitters.findAll);
// router.get('/timeline', Twitters.getTimeline);
// router.get('/search/:tweet', Twitters.searchingTweet);
// router.post('/create', Twitters.newTweet);

module.exports = router;
