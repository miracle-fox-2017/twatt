const router = require('express').Router()
const FB   = require('../controllers/fbController')

router.get('/', FB.getFBUserData)
router.get('/getTimeLine', FB.getTimeLine)
router.post('/', FB.postStatus)
// router.post('/search', Twatt.searchTweet)
// router.delete('/:id', Book.deleteOne)

module.exports = router