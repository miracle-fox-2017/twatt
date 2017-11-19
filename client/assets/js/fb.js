function statusChangeCallback(response) {
  if (response.status === 'connected') {
    $( "#fb-login" ).last().addClass( "hide" );
    $( "#fb-logout" ).last().removeClass( "hide" );
    $('#div-content').html(loading())
    getTimeline();
  } else {
    $( "#fb-login" ).last().removeClass( "hide" );
    $( "#fb-logout" ).last().addClass( "hide" );
    // The person is not logged into your app or we are unable to tell.
    $('#div-content').html('Please log into this app.')
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '767185866797863',
    cookie     : true,  // enable cookies to allow the server to access
    // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11' // use graph api version 2.8
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

// Load the SDK asynchronously
(function(d, s, id) {
  $( "#fb-logout" ).last().addClass( "logout" );
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// login button handle
function loginButton() {
  FB.login(function(response) {
    if (response.authResponse) {
      window.fbAsyncInit()
      localStorage.setItem("access_token", response.authResponse.accessToken);
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  },{scope: 'email,user_likes,user_posts,publish_actions'});
}

$('#fb-login').click(function() {
  loginButton()
})

// logout button handle
function logoutButton() {
  FB.logout(function(response) {
    window.fbAsyncInit()
  });
}

$('#fb-logout').click(function() {
  logoutButton()
})

// post status handle
$('#post-status').click(function() {
  axios.post('http://localhost:3000/fb/me/', {
    status: $('input#post').val()
  },{
    headers: {
      accesstoken: localStorage.getItem('access_token')
    }
  })
  .then(function (response) {
    $('input#post').val('')
    getTimeline()
  })
  .catch(function (error) {
    console.log(error);
  });
})

// get timeline handle
function getTimeline() {
  axios.get('http://localhost:3000/fb/profile/', {
    headers: {
      accesstoken: localStorage.getItem('access_token')
    }
  }).then(responseProfile => {
    console.log(responseProfile);
    axios.get('http://localhost:3000/fb/me/', {
      headers: {
        accesstoken: localStorage.getItem('access_token')
      }
    })
    .then(response => {
      if(response.data){
        $('#div-content').html(handleTimeline(response, responseProfile))
      }
    })
  })
  .catch(err => console.log(err))
}

function handleTimeline(response) {
  let timeline = ''
  response.data.data.forEach((data) => {
    var d = new Date(data.created_time);
    var n = d.toDateString();
    timeline += `
    <div class="event">
        <div class="label">
           <img src="${data.icon || '/../assets/img/post.png'}">
        </div>
        <div class="content">
           <div class="date">
              ${n}
           </div>
           <div class="summary">
              <a href="https://www.facebook.com/${data.from.id}">${data.from.name}</a> ${handleStatusType(data.status_type)}
           </div>
           <div class="extra text">
              ${data.message || data.description || ''}
              <p><i style="color:#90949c">${data.story || ''}</i></p>
           </div>
           <div class="extra images">
              <a href="${data.link}"><img src="${data.picture || ''}"></a>
           </div>
       </div>
    </div>
    <div style="margin-top:-5px;" class="ui dividing header"></div>
    `
  })
  return timeline
}

// loading html
function loading() {
  return `<div class="ui event">
            <div class="ui active centered inline loader">
              <div class="ui large text loader">Loading</div>
            </div>
          </div>`
}

// status type handle
function handleStatusType(statusType) {
  switch(statusType) {
    case 'mobile_status_update':
        return 'post status';
    case 'shared_story':
        return 'shared link';
    case 'wall_post':
        return 'post on your page';
    case 'added_photos':
        return 'add new photo'
    default:
        return statusType;
  }
}
