const router = require('express').Router()
const Multer = require('multer');

//require controller
const tweetController = require('../controllers/twitter')

//midleware
let multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
  // dest: '../images'
})

router.get('/', tweetController.getTimelineTweet)

router.post('/', tweetController.postNewTweet)

router.post('/search/', tweetController.searchTweet)

router.post('/image', multer.single('image'), tweetController.postImage)


module.exports = router;