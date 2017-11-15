const express = require('express');
const router = express.Router();
const OAuth = require('oauth');
const twittController = require('../controllers/twitterController')

router.get('/', twittController.getDataTimelineFeature)
router.post('/', twittController.postNewStatus)
router.get('/user', twittController.getDataUserTimeline)
router.post('/search', twittController.getDataByKataKunci)
module.exports = router;
