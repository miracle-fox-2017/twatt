const router = require('express').Router()

//require controller
const tweetController = require('../controllers/twitter')

router.get('/', tweetController.getTimelineTweet)

router.post('/', tweetController.postNewTweet)

router.post('/search/', tweetController.searchTweet)

module.exports = router;