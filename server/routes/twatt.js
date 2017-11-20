// const express = require('express');
const router = require('express').Router();
const twatt = require('../controllers/twitter')

/* GET apies listing. */
router.get('/search', twatt.search)
router.get('/timeline', twatt.timeline)
router.post('/tweet', twatt.post)

// router.get('/search', (req, res) => {
//   res.send('halooooooo')
// })

module.exports = router;
