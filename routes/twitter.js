const express = require('express')
const router  = express.Router()
const twitter = require('../controllers/twitterControllers')

router.get('/home_timeline', twitter.getHomeTimeline)
router.get('/user_timeline', twitter.getUserTimeline)
router.post('/search', twitter.searchTweet)
router.post('/update_status', twitter.statusUpdateTweet)


module.exports = router