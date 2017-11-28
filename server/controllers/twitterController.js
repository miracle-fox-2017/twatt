const TwitterClient = require('../helpers/twitterClient');
const urlencode = require('urlencode');
const twitterEndpoint = "https://api.twitter.com/1.1";
const screen_name = `fujianto`;

const getHomeTimelines = (req, res) => {
	let homeTimelineEndpoint = `${twitterEndpoint}/statuses/home_timeline.json`;

	if (req.body.max_id !== null && req.body.max_id !== '' && typeof req.body.max_id !== 'undefined') {
		homeTimelineEndpoint = `${twitterEndpoint}/statuses/home_timeline.json?max_id=${req.body.max_id}`;
	} else if (req.body.since_id !== null && req.body.since_id !== '' && typeof req.body.since_id !== 'undefined') {
		homeTimelineEndpoint = `${twitterEndpoint}/statuses/home_timeline.json?since_id=${req.body.since_id}`;
	}	else {
		homeTimelineEndpoint = `${twitterEndpoint}/statuses/home_timeline.json`;
	}

	TwitterClient.get(homeTimelineEndpoint)
	.then((tweet) => {
		res.status(200).send(tweet);
	}).catch(err => {
		res.status(500).send({message: err});
	})
}

const getUserTimelines = (req, res) => {
	 let userTimelineEndpoint = `${twitterEndpoint}/statuses/user_timeline.json?screen_name=${screen_name}`;

	 if (req.body.max_id !== null && req.body.max_id !== '' && typeof req.body.max_id !== 'undefined') {
	 	userTimelineEndpoint = `${twitterEndpoint}/statuses/user_timeline.json?screen_name=${screen_name}&max_id=${req.body.max_id}`;
	 	
	 } else if (req.body.since_id !== null && req.body.since_id !== '' && typeof req.body.since_id !== 'undefined') {
	 	userTimelineEndpoint = `${twitterEndpoint}/statuses/user_timeline.json?screen_name=${screen_name}&since_id=${req.body.since_id}`;

	 } else {
	 	userTimelineEndpoint = `${twitterEndpoint}/statuses/user_timeline.json?screen_name=${screen_name}`;
	 }	

	 TwitterClient.get(userTimelineEndpoint)
	  .then((tweet) => {
	  	res.status(200).send(tweet);
	  }).catch(err => {
	  	res.status(500).send({message: err});
	  })
}

const searchTweet = (req, res) => {
	TwitterClient.get(`${twitterEndpoint}/search/tweets.json?q=${urlencode(req.body.query)}`)
		.then((tweet) => {
			res.status(200).send(tweet);
		}).catch(err => {
			res.status(500).send({message: err});
		})
}

const postNewTweet = (req, res) => {
	TwitterClient.post(`${twitterEndpoint}/statuses/update.json`, req.body.status)
		.then((datas) => {
			res.status(200).send({data: datas});
		}).catch(err => {
			res.status(500).send({message: err});
		})
}

module.exports = {
	getHomeTimelines,
	getUserTimelines,
	searchTweet,
	postNewTweet
}