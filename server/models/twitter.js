const OAuth = require('oauth').OAuth
require('dotenv').config()

const oaut = new OAuth(
  'http://twitter.com/oauth/request_token',
  'http://twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

class Twitter {
  static search(query) {
    return new Promise((resolve, reject) => {
      oaut.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function(err, data) {
          if(err) {
            reject(err)
          } else {
            resolve(data)
          }
        }
      )
    })
  }

  static timeline() {
    return new Promise((resolve, reject) => {
      console.log(process.env.ACCESS_TOKEN);
      oaut.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function(err, data) {
          if(err) {
            reject(err)
          } else {
            resolve(data)
          }
        }
      )
    })
  }

  static post(tweet) {
    return new Promise((resolve, reject) => {
      oaut.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        {status: tweet},
        function(err, data) {
          if(err) {
            reject(err)
          } else {
            resolve(data)
          }
        }
      )
    })
  }
}

module.exports = Twitter
