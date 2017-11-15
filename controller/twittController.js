const OAuth = require('oauth');
require('dotenv').config()

const oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	process.env.twitterConsumerKey,
	process.env.twitterConsumerSecret,
	'1.0A',
	null,
	'HMAC-SHA1'
	);


function timeline(req,res){
	oauth.get(
	  'https://api.twitter.com/1.1/statuses/user_timeline.json?name=Ahmad_Hacktiv8',
      process.env.twitterAccessToken, //test user token 
      process.env.twitterAccessTokenSecret, //test user secret             
      function (e, data, response){
      	if (e) console.error(e);    

		res.send(data);    
      });   
}

function search(req,res){
	oauth.get(
	  `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
      process.env.twitterAccessToken, //test user token 
      process.env.twitterAccessTokenSecret, //test user secret              
      function (e, data, response){
      	if (e) console.error(e);    

		res.send(data);    
      });   
}

function postStatus(req,res){
	oauth.post(
	  `https://api.twitter.com/1.1/statuses/update.json?`,
      process.env.twitterAccessToken, //test user token 
      process.env.twitterAccessTokenSecret, //test user secret    
      {"status" : req.body.status },          
      function (e, data, response){
      	if (e) console.error(e);    

		res.send(data);    
      });   
}

module.exports = {
	timeline,
	search,
	postStatus
}