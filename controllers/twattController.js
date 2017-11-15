const Twatt = require('../models/twattModel')

const getAllTweet = (req, res)=> {
	Twatt.getAllTweet()
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}

const postTweet = (req, res)=> {
	Twatt.postTweet(req.body.tweet)
	.then(data => {
		res.send(data)
	})
	.catch(err =>{
		res.send(err)
	})
}

const searchTweet = (req, res)=> {
	Twatt.searchTweet(req.body.query)
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports = {
	getAllTweet,
	postTweet,
	searchTweet
}