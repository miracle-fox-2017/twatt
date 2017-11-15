var OAuth = require('oauth');
require('dotenv').config()
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.API_Key,
  process.env.API_Secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

let getTimeline = (req, res) =>{
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.Token, //test user token
      process.env.Token_Secret, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
}

let searchFeature = (req, res) =>{
  let cari = req.body.cari
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${cari}`,
      process.env.Token, //test user token
      process.env.Token_Secret, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
}

let createTweet = (req, res) =>{
  let status = req.body.status
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
      process.env.Token, //test user token
      process.env.Token_Secret, //test user secret
      {"status":status},
    function (e, data){
      if (e) res.status(500).send(e);
      res.send(data)
    });
}

let getPlaces = (req, res) =>{
  let tempat = req.body.tempat
  oauth.get(
    `https://api.twitter.com/1.1/trends/available.json`,
      process.env.Token, //test user token
      process.env.Token_Secret, //test user secret
    function (e, data){
      if (e) res.status(500).send(e);
      res.send(data)
    });
}

let getFollower = (req, res) =>{
  oauth.get(
    `https://api.twitter.com/1.1/followers/list.json`,
      process.env.Token, //test user token
      process.env.Token_Secret, //test user secret
    function (e, data){
      if (e) res.status(500).send(e);
      res.send(data)
    });
}

module.exports = {
  getTimeline,
  searchFeature,
  createTweet,
  getPlaces,
  getFollower
};
