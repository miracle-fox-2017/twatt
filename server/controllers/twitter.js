const OAuth = require('oauth');
const fs = require('fs');
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
    {
      "status": req.body.status,
      "media_ids": req.body.mediaid
    },
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

let postImage = (req, res) => {
  var base64Image = new Buffer(req.file.buffer, 'binary').toString('base64');
  oauth.post(
    "https://upload.twitter.com/1.1/media/upload.json",
    process.env.USER_TOKEN, //test user token 
    process.env.USER_SECRET, //test user secret        
    {
      "media": base64Image
    },
    function(error, data) {
      if(error) res.status(500).send(error)
      else {
        var jsons = JSON.parse(data)
        // res.send(data)
        oauth.post(
          "https://api.twitter.com/1.1/statuses/update.json",
          process.env.USER_TOKEN, //test user token 
          process.env.USER_SECRET, //test user secret        
          {
            "status": req.body.status,
            "media_ids": jsons.media_id_string
          },
          function(error, data) {
            if(error) res.status(500).send(error)
            else {
              res.send(data)
            }
          }
        );
      }
    }
  );
}


module.exports = {
  getTimelineTweet,
  postNewTweet,
  searchTweet,
  postImage
};