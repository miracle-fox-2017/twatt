 // This is called with the results from from FB.getLoginStatus().
 function statusChangeCallback(response) {

   if (response.status === 'connected') {
     // Logged into your app and Facebook.
     // console.log("Access Token ", response.authResponse.accessToken);

     $(".fblogin-area").hide();
     $('.app-container').show();


     setAuthLocalStorage(response);
     getUserFeed(response);
     createUserPost(response);
     loadMoreFeed();
   } else {
    $(".fblogin-area").show();
    $('.app-container').hide();

     // The person is not logged into your app or we are unable to tell.
     document.getElementById('status').innerHTML = 'Please log ' +
       'into this app.';
   }
 }

 function checkLoginState() {
   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });
 }

 window.fbAsyncInit = function() {
   FB.init({
     appId: '735451779974093',
     cookie: true,
     xfbml: true, // parse social plugins on this page
     version: 'v2.8' // use graph api version 2.8
   });


   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });

 };

 // Load the SDK asynchronously
 (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s);
   js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 function setAuthLocalStorage(response) {
  localStorage.setItem("fb_access_token", response.authResponse.accessToken);
  localStorage.setItem("fb_user_id", response.authResponse.userID);
  localStorage.setItem("fb_signed_request", response.authResponse.signedRequest);
}


 function loadFacebookData(response) {
   console.log('Welcome!  Fetching your information.... ');
   console.log(response);
 }

function getUserFeed() {
  console.log('~~~~~~~~~~~~~Getting User Feed')

  FB.api('/me',  {fields: 'id,name,posts,picture'}, function(response) {
    console.log('~~~~~ALl post ', response);
    $("#btnLoadmore").attr('data-prev', response.posts.paging.prev);
    $("#btnLoadmore").attr('data-next', response.posts.paging.next);
    $("#loading").hide();
    $('#content-area').html(crunchPost(response));
  });
}

function createUserPost(response) {
  console.log('~~~~~~~~~~~~~Posting User Feed')

  $("#fbstatus").keypress(function(e) {
    if(e.which == 13){
      if (this.value.length > 1) {
          $("#loading").show();
          $('#content-area').html("");

          FB.api('/me/feed', 'post', { message: this.value }, function(resp) {
            if (!resp || resp.error) {
              console.log('Error occured', resp.error);
            } else {
              console.log('Post ID: ' + resp.id);
              getUserFeed(response);
            }
          });
      } else {
        alert("Status need more character");
      }
    }
  });
}

function loadMoreFeed() {
  var $loadMore =  $("#btnLoadmore");

  if ($loadMore.attr('data-next') !== '') {
    $("#btnLoadmore").click(function(e) {
      e.preventDefault();

      $.ajax({
        url: $loadMore.attr('data-next'),
        success: function(response) {
          console.log('~~SUCCES LOADMORE: ', response)
          $('#content-area').append(crunchMorePost(response));
        },
        error: function() {
          alert("Error load more");
        }
      })
    })

  }
}

function crunchPost (response) {
  let content = '';
  response.posts.data.forEach( function(post, index) {
    content += `
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <div class="col s2">
          <img src="${response.picture.data.url}" alt="" class="circle responsive-img avatar-pic"> <!-- notice the "circle" class -->
        </div>
        <div class="col s10">
          <p>#${post.id}</p>
          <h5 class="card-title">@${response.name}</h5>
          <span class="black-text">
            ${post.message}
          </span>
        </div>
      </div>
    </div>
    `;
  });

  return content;
}

function crunchMorePost (response) {
  let content = '';
  console.log('~~~CRUNCHMORE', response.data);
  response.data.forEach( function(post, index) {
    content += `
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <div class="col s2">
          <img src="" alt="" class="circle responsive-img avatar-pic"> <!-- notice the "circle" class -->
        </div>
        <div class="col s10">
          <p>#${post.id}</p>
          <h5 class="card-title">@</h5>
          <span class="black-text">
            ${post.message}
          </span>
        </div>
      </div>
    </div>
    `;
  });

  return content;
}