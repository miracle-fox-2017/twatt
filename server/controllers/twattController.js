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
	console.log(req);
	Twatt.postTweet(req.body.tweet)
	.then(data => {
		res.send(data)
	})
	.catch(err =>{
		res.send(err)
	})
}

const searchTweet = (req, res)=> {
	Twatt.searchTweet(req.body.inputSearch)
	.then(data => {
		console.log(data);
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