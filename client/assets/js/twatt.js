/**
* Get timeline
*/
$(document).ready(function(){
  $('#btn-timeline').click(function(){
    $.get('http://localhost:3000/api/twatt/timeline',
    function(data, status){
      let tweets = JSON.parse(data)
      // console.log(tweets);
      tweets.forEach(tweet => {
        $('#results').append(`<img src="${tweet.user.profile_image_url}" alt="">`)
        $('#results').append(`<h4>${tweet.user.name}</h4>`)
        $('#results').append(`<p>${tweet.text}</p>`)
      })
    });
  });
})

/**
* Get tweet by query
*/
$(document).ready(function(){
  $('#btn-search').click(function(){
    let query = $('#search').val()
    console.log(query);
    $.get(`http://localhost:3000/api/twatt/search?q=${query}`,
    function(data, status){
      let tweets = JSON.parse(data)
      console.log(tweets);
      // console.log(status);
      tweets.statuses.forEach(tweet => {
        $('#results').append(`<img src="${tweet.user.profile_image_url}" alt="">`)
        $('#results').append(`<h4>${tweet.user.name}</h4>`)
        $('#results').append(`<p>${tweet.text}</p>`)
      })
    });
  });
})

/**
* Post tweet
*/
$('#btn-tweet').click(function(){
  let tweet = $('#tweet').val()
  $.post('http://localhost:3000/api/twatt/tweet', {tweet},
  // console.log(tweet);
  function(data, status){
    console.log(data);
    console.log(status);
  });
});
