var OAuth = require('oauth');
require('dotenv').config()

let userToken = process.env.ACCESS_TOKEN
let userSecret =  process.env.ACCESS_TOKEN_SECRET

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_API_KEY,
      process.env.CONSUMER_SECRET_KEY,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


const getTimeline = (req, res) => {
  
  oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      userToken, //test user token
      userSecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(data);
        res.send(data)
      });
      
}

const getUserTimeline = (req, res) => {
  
  oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.screen_name}`,
      userToken, //test user token
      userSecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(data);
        res.send(data)
      });
      
}

const searchTweet = (req, res) => {
  
  oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.tweet}`,
      userToken, //test user token
      userSecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(data);
        res.send(data)
      });
      
}

const postTweet = (req, res) => {
  
  oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      userToken, //test user token
      userSecret, //test user secret
      {status : req.params.tweet},
      function (e, data){
        if (e) console.error(e);
        // console.log(data);
        res.send(data)
      });
      
}


module.exports = {
  getTimeline,
  getUserTimeline,
  searchTweet,
  postTweet
};