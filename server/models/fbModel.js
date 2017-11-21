const FB = require('fb')
FB.options({version: 'v2.4'});
var fooApp = FB.extend({appId: process.env.fb_apps_id, appSecret: process.env.fb_apps_secret})

class Facebook {

	static getFBUserData(accesstoken, fbid) {
		return new Promise((resolve, reject) => {
			FB.setAccessToken(accesstoken);
			FB.api(fbid, function (response) {
				if(!response || response.error) {
					console.log(!response ? 'error occurred' : response.error);
					reject(response.error)
				}
					resolve(response)
			});
		})
	}

	static getTimeLine(accesstoken, fbid) {
		console.log('masuk sini')
		return new Promise((resolve, reject) => {
			FB.setAccessToken(accesstoken);
			FB.api('/me/feed', function(response) {
				resolve(response)
			})
		})
	}

	static postStatus(accesstoken, status) {
		return new Promise((resolve, reject) => {
			FB.setAccessToken(accesstoken);
			FB.api('/me/feed', 'post', {
				message: status
			}, function(response) {
				resolve(response)
			})
		})
	}
	
}

module.exports = Facebook