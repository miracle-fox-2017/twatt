const router = require('express').Router();
const twitterController = require('../controllers/twitterController')

router.post('/', twitterController.getHomeTimelines);
router.post('/timeline/home', twitterController.getHomeTimelines);
router.post('/timeline/user', twitterController.getUserTimelines);
router.post('/search', twitterController.searchTweet);
router.post('/new_tweet', twitterController.postNewTweet);

module.exports = router;