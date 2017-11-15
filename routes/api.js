const express = require('express');
const router = express.Router();
const apiesController = require('../controllers/api')

/* GET apies listing. */
router.get('/search', apiesController.searchTweet)
router.get('/timeline', apiesController.timelineTweet)

module.exports = router;
