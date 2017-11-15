const express = require('express')
const router = express.Router()
const Twitter =  require('../controllers/twitterControllers')

/* GET Twitters listing. */
router.get('/',  Twitter.getTimeline);
router.post('/tweet', Twitter.createTweet);
router.post('/search', Twitter.searchFeature);
router.get('/places', Twitter.getPlaces);
router.get('/followers', Twitter.getFollower);

module.exports = router
