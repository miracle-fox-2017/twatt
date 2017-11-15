require('dotenv').config()
let urlencode = require('urlencode');

// Oauth
var OAuth = require('oauth');
let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'G6HQsF6pynMdqxC3EdIeqK8ZW',
  'ifiDqYQ2pFMcccCo6dof7TxWe5LCOkwiYYVoJhfUtuecAJk7iY',
  '1.0A',
  null,
  'HMAC-SHA1'
)

// Get user timeline
let getUserTimeline = function(req,res){
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    `${process.env.USER_TOKEN}`, //test user token
    `${process.env.USER_SECRET}`, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

// Post to user timeline
let postToTimeline = function(req,res){
  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    `${process.env.USER_TOKEN}`, //test user token
    `${process.env.USER_SECRET}`, //test user secret
    {"status":req.body.status},
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

// Search tweets
let searchTweets = function(req,res){
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${urlencode(req.body.search)}&include_entities=true`,
    `${process.env.USER_TOKEN}`, //test user token
    `${process.env.USER_SECRET}`, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

// Search other users timeline
let searchOthersTimeline = function(req,res){
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.body.username}`,
    `${process.env.USER_TOKEN}`, //test user token
    `${process.env.USER_SECRET}`, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

module.exports = {
  getUserTimeline,
  postToTimeline,
  searchTweets,
  searchOthersTimeline
}
