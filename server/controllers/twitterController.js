const TwitterClient = require('../helpers/twitterClient');
const urlencode = require('urlencode');

const getRecentTimelines = (req, res) => {
	 TwitterClient.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=fujianto")
	  .then((tweet) => {
	  	res.status(200).send(tweet);
	  }).catch(err => {
	  	res.status(500).send({message: err});
	  })
}

const searchTweet = (req, res) => {
	TwitterClient.get(`https://api.twitter.com/1.1/search/tweets.json?q=${urlencode(req.body.query)}`)
		.then((tweet) => {
			res.status(200).send(tweet);
		}).catch(err => {
			res.status(500).send({message: err});
		})
}

const postNewTweet = (req, res) => {
	TwitterClient.post('https://api.twitter.com/1.1/statuses/update.json', req.body.status)
		.then((datas) => {
			res.status(200).send({data: datas});
		}).catch(err => {
			res.status(500).send({message: err});
		})
}

module.exports = {
	getRecentTimelines,
	searchTweet,
	postNewTweet
}