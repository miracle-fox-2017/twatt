const router = require('express').Router();
const Controller = require('../controller/twittController');

router.get('/timeline', Controller.timeline); 
router.post('/search', Controller.search);
router.post('/poststatus', Controller.postStatus);  

module.exports = router;