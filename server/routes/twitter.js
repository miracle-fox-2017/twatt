const express = require('express');
const router = express.Router();
const OAuth = require('oauth');
const twittController = require('../controllers/twitterController')

router.get('/:katakunci', twittController.getDataByKataKunci)
router.get('/timeline', twittController.getDataTimelineFeature)
router.post('/', twittController.postNewStatus)
router.get('/user', twittController.getDataUserTimeline)
module.exports = router;
