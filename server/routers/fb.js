const router = require('express').Router()

//require controller
const fbController = require('../controllers/fb')

router.get('/', fbController.getTimeLine, fbController.me)
router.get('/tl', fbController.getTimeLine, fbController.meFeed)

// router.post('/', tweetController.postNewTweet)

// router.post('/search/', tweetController.searchTweet)

module.exports = router;