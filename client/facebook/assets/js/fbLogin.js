//init fbjssdk
window.fbAsyncInit = function() {
  FB.init({
    appId      : '352796951848044',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  })

  FB.getLoginStatus(function(response) {
    statusChangeCallback (response)
  });
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response)
  if (response.status === 'connected') {
    localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
    window.location.assign("timeline.html")
  }
}

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function FBLogin () {
  FB.login(function(response) {
    
    if (response.authResponse) {
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      window.location.assign("timeline.html")
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: 'public_profile,email,publish_actions,user_posts'});
}