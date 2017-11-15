const Api = require('../models/Api')
require('dotenv').config()

let searchTweet = (req, res) => {
  Api.get(
    "https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8",
    process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
    function(err, data, respond) {
      if(err) {
        console.log(require('sys').inspect(err))
        res.send(err)
      } else {
        console.log(data)
        res.send(data)
      }
    }
  );
}

let timelineTweet = (req, res) => {
  Api.get(
    "https://api.twitter.com/1.1/statuses/home_timeline.json",
    process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET,
    function(err, data, respond) {
      if(err) {
        console.log(require('sys').inspect(err))
        res.send(err)
      } else {
        console.log(data)
        res.send(data)
      }
    }
  );
}



module.exports = {
  searchTweet,
  timelineTweet,

};
