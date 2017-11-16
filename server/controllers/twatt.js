const OAuth = require('oauth');
const dotenv = require('dotenv').config()

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'i7RvpRBceNYswZSzZh3XJyiyn',
  'gHymeQGHJWjYc9lukuOqlHkGb5us9TbGOxpC8IefG4zEMEGR25',
  '1.0A',
  null,
  'HMAC-SHA1'
);

let timelineFeature = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET, //test user secret
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

let searchFeature = (req, res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET, //test user secret
    function (e, data, response){
      if (e) res.status(500).send(e);
      res.send(data)
    }
  );
}

let postFeature = (req, res) => {
  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET,
    {'status':req.body.status},
    function(e, data) {
      if(e) res.status(500).send(e)
      else res.send(data)
    }
  );
}

module.exports = {
  timelineFeature,
  searchFeature,
  postFeature
}
