$(document).ready(function(){
  // $("button").click(function(){
    $.ajax({
      url: "http://localhost:3000/twitt/timeline",
      method : "GET"  , success: function(result){
        result = JSON.parse(result);  
        result.forEach(twitter => {
          const row = `
          <h3> ${twitter.user.screen_name} </h3>
          <img src="${twitter.user.profile_image_url}">
          <p> ${twitter.text} </p>`;   
          $("#timeline").append(row)  
        }) 
      }});
  }); 

$(document).ready(function(){
  $("button").click(function(){
    $.ajax({
      url: "http://localhost:3000/twitt/postStatus",
      method : "POST",
      dataType : "json",
      data:{status:$("#create-tweet").val()}, 
      success: function(result){
        console.log("success", result)
      },
      fail: function(){
        console.log("ERROR")
      },      
    });
  }); 
});  