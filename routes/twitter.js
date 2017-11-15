const express = require('express')
const router  = express.Router()
const twitter = require('../controllers/twitterControllers')

router.get('/home_timeline', twitter.getHomeTimeline)
router.get('/user_timeline', twitter.getUserTimeline)


module.exports = router