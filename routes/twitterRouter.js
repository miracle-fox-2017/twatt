let express = require('express')
let router = express.Router()
let twitterController = require('../controllers/twitterController.js')

// Get user timeline
router.get('/',twitterController.getUserTimeline)

// Post to timeline
router.post('/',twitterController.postToTimeline)

// Search tweets
router.get('/search',twitterController.searchTweets)

// Get other users timeline
router.get('/username',twitterController.searchOthersTimeline)

module.exports = router
