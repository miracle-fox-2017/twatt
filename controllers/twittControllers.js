var OAuth = require('oauth');
require('dotenv').config();
var urlencode = require('urlencode');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.SECRET_KEY1,
  process.env.SECRET_KEY2,
  '1.0A',
  null,
  'HMAC-SHA1'
);

let getTimeline = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    '930640953257246721-C9NNa0csBqzsm0Te3liiXYJpps39Sc8', //test user token
    process.env.TOKEN_SECRET, //test user secret
    function (e, data, response){
      if (e) console.error(e);
      res.send(data);
    });
  }

  let searchTwitt = (req, res) => {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${urlencode(req.body.search)}`,
      '930640953257246721-C9NNa0csBqzsm0Te3liiXYJpps39Sc8', //test user token
      process.env.TOKEN_SECRET, //test user secret
      function (e, data, response) {
        if (e) console.error(e);
        res.send(data);
      });
    }

    let addStatus = (req, res) => {
      oauth.post(
        "https://api.twitter.com/1.1/statuses/update.json",
        '930640953257246721-C9NNa0csBqzsm0Te3liiXYJpps39Sc8', //test user token
        process.env.TOKEN_SECRET, //test user secret
        { "status": req.body.status },
        function (error, data) {
          if (error) console.log(error)
          else res.send(data);
        }
      );
    }

    module.exports = {
      getTimeline,
      searchTwitt,
      addStatus,
    };
