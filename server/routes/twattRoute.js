const router = require('express').Router()
const Twatt   = require('../controllers/twattController')

router.get('/', Twatt.getAllTweet)
router.post('/', Twatt.postTweet)
router.post('/search', Twatt.searchTweet)
// router.delete('/:id', Book.deleteOne)

module.exports = router