const dotenv = require('dotenv').config();
const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	process.env.CONSUMER_KEY,
	process.env.CONSUMER_SECRET,
	'1.0A',
	null,
	'HMAC-SHA1'
);

class TwitterClient {
	static get(endpointUrl) {
		return new Promise((resolve, reject) => {
			oauth.get(
			  endpointUrl,
			  process.env.ACCESS_TOKEN,  
			  process.env.ACCESS_SECRET,              
			  function (err, data, response){
			    if (err){
			    	reject(err);
			    } else {
			    	resolve(data)
			    }        
			  }
		  );
		});    
	}

	static post(endpointUrl, status) {
		return new Promise((resolve, reject) => {
			oauth.post(
			  endpointUrl,
			  process.env.ACCESS_TOKEN,  
			  process.env.ACCESS_SECRET, 
			  {"status": status},             
			  function (err, data, response){
			    if (err){
			    	reject(err);
			    } else {
			    	resolve(data)
			    }        
			  }
		  );
		});
	}
}

module.exports = TwitterClient;