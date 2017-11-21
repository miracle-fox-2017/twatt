const OAuth = require('oauth');
require('dotenv').config()

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.request_token,
  process.env.access_token,
  '1.0A',
  null,
  'HMAC-SHA1'
);

class Twatt {

  static getAllTweet(){
    return new Promise((resolve, reject) => {
      oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.user_token, //test user token 
      process.env.user_secret, //test user secret             
      function (err, data, response){
        if(err){
            reject(err)
        }else{
          resolve(data)
        }
      })      
    })
  }

  static postTweet(tweet){
    return new Promise((resolve, reject) => {
      oauth.post(
        "https://api.twitter.com/1.1/statuses/update.json",
        process.env.user_token, //test user token 
        process.env.user_secret,
        {"status":tweet},
        function(error, data) {
          if(error){
            console.log('masuk sini');
            reject(error)
          }else{
          console.log('masuk sini'); 
            resolve(data)
          }
      })  
    })
  }

  static searchTweet(strInput){
    return new Promise((resolve, reject) => {
      oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q="${strInput}"`,
      process.env.user_token, //test user token 
      process.env.user_secret,             
      function (err, data){
        if(err){
            reject(err)
        }else{
          resolve(data)
        }
      })
    });
  }
}

module.exports = Twatt