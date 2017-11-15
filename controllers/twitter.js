const OAuth = require('oauth');
require('dotenv').config()


const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.SECRET_KEY,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


let getTimelineTweet = (req, res) =>{
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (error, data){
      if (error) res.status(500).send(error)
      else {
        res.send(data)
      }
    });
}

let postNewTweet = (req, res) =>{
  oauth.post(
    "https://api.twitter.com/1.1/statuses/update.json",
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret        
    {"status": req.body.status},
    function(error, data) {
      if(error) res.status(500).send(error)
      else {
        res.send(data)
      }
    }
  );
}

let searchTweet = (req, res) =>{
  let q = `?q=${req.body.keyword}`
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json${q}`,
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret             
    function (error, data){
      if (error) res.status(500).send(error)
      else {
        res.send(data)
      }
    });
}

module.exports = {
  getTimelineTweet,
  postNewTweet,
  searchTweet
};