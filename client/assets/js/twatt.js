$(document).ready(function(){
  getTimeline()
});

$('#timeline').click(() => {
  getTimeline()
})

let getTimeline = () => {
  $.ajax({
    url: 'http://localhost:3000/twatt/',
    method: 'GET',
    dataType: 'JSON',
    success: function(result){
      console.log(result);
      if(result.error){
        $("#div-content").html(result.console.error());
      }else{
        $("#div-content").html(timeline(result));
      }
    },
    error: function(err){
      console.log(err);
      $("#div-content").html(err);
    }
  });
}

$('#post-tweet').click(() => {
  var data = {};
  data.status = $('input#tweet').val()

  $.ajax({
    url: 'http://localhost:3000/twatt/',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function(data) {
      console.log('success');
      console.log(JSON.stringify(data));
      getTimeline()
    }
  })
})

$('#search-tweet').click(() => {
  var data = $('input#search').val()

  $.ajax({
    url: `http://localhost:3000/twatt/search?q=${data}`,
    type: 'GET',
    dataType: 'JSON',
    success: function(result){
      console.log(result);
      if(result.error){
        $("#div-content").html(result.console.error());
      }else{
        if(result.statuses.length == 0){
          $("#div-content").html(`keyword '${data.search}' not found.`);
        }else{
          $("#div-content").html(timeline(result.statuses));
        }
      }
    },
    error: function(err){
      console.log('error');
      console.log(err);
      $("#div-content").html(err);
    }
  });
})

let timeline = (input) => {
  let dataTweet = ``
  input.forEach(tweet => {
    let date = new Date(tweet.created_at)
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    dataTweet += `
    <div class="item">
      <div class="ui small image">
        <img class="profile" src="${tweet.user.profile_image_url}">
      </div>
      <div class="content">
        <a class="header">@${tweet.user.screen_name}</a>
        <div class="meta">
          <a>${dd}/${mm}/${yyyy}</a>
        </div>
        <div class="description">
          ${tweet.text}
        </div>
      </div>
    </div>
    `
  })
  return dataTweet
}
