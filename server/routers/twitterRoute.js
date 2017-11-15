const router = require('express').Router();
const twitterController = require('../controllers/twitterController')

router.get('/', twitterController.getRecentTimelines);
router.get('/timeline', twitterController.getRecentTimelines);
router.post('/search', twitterController.searchTweet);
router.post('/new_tweet', twitterController.postNewTweet);

module.exports = router;