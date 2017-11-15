const OAuth = require('oauth')
require('dotenv').config()
const consumerKey = process.env.applicationConsumerKey
const appSecret = process.env.applicationSecret
const accessUserToken = process.env.accessUserToken
const accessUserSecret = process.env.accessUserSecret

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  consumerKey,
  appSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const getHomeTimeline = function(req,res){
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    accessUserToken, //test user token 
    accessUserSecret, //test user secret             
    function (e, data, response){
      if (e) console.error(e);        
      res.status(201).send(data)
  })
}

const getUserTimeline = function(req,res){
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    accessUserToken, //test user token 
    accessUserSecret, //test user secret             
    function (e, data, response){
      if (e) console.error(e);        
      res.status(201).send(data)
  })
}

module.exports = {
  getHomeTimeline,
  getUserTimeline
}