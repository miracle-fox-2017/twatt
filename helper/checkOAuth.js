const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	'EZvsHwi2ifXQvpr9bZu5JC5PG',
	'IAdLiedBBOQBWA5offDmGXJMBspd4ild1IhLXnlokgVHqz10mO',
	'1.0A',
	null,
	'HMAC-SHA1'
);

module.exports = oauth