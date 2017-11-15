const router = require('express').Router()
const Tweet = require('../controllers/tweetController');

router.get('/', Tweet.getTimeline)
router.get('/:screen_name', Tweet.getUserTimeline)
router.get('/search/:tweet', Tweet.searchTweet)
router.post('/tweets/:tweet', Tweet.postTweet)

module.exports = router;