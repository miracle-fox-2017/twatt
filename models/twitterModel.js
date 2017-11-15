const OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

function getTwitterByKataKunci(katakunci) {
    return new Promise((resolve, reject) => {

        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${katakunci}`,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret             
            function (e, data, response) {
                if (e) reject(e);
                resolve(data);
            });
    })

}

function getDataTimelineFeature() {
    return new Promise((resolve, reject) => {
        oauth.get(
            `https://api.twitter.com/1.1/statuses/home_timeline.json`,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret                
            function (e, data, response) {
                if (e) reject(e);
                resolve(data);
            });
    })
}

function postNewStatus(status) {
    return new Promise((resolve, reject) => {
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            process.env.USER_TOKEN, //test user token 
            process.env.USER_SECRET, //test user secret    
            { "status": status },
            function (e, data, response) {
                if (e) {
                    console.log(e)
                    reject(e)
                } else {
                    resolve(data);
                }

            });
    })
}


module.exports = {
    getTwitterByKataKunci,
    getDataTimelineFeature,
    postNewStatus
}