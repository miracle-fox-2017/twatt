const OAuth = require('oauth').OAuth;
require('dotenv').config()

module.exports = new OAuth(
  "http://twitter.com/oauth/request_token",
  "http://twitter.com/oauth/access_token",
  process.env.CONSUMER_KEY, process.env.CONSUMER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);
