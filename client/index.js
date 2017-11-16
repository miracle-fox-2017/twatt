  $(document).ready(function(){
    // $("button").click(function(){
      $.ajax({
        url: "http://localhost:3001/twitt/timeline",
        method : "GET"  , success: function(result){
          result = JSON.parse(result);
          $('#timeline').html('')
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
    $("#post-tweet").click(function(){
      $.ajax({
        url: "http://localhost:3001/twitt/postStatus",
        method : "POST",
        dataType : "json",
        data:{status:$("#create-tweet").val()}, 
        success: function(result){
          console.log("success", result)
          const newStatus = `
          <h3> ${result.user.screen_name} </h3>
          <img src="${result.user.profile_image_url}">
          <p> ${result.text} </p>`; 
          $('timeline').show();
           $('#searchresult').hide()
          $('#timeline').prepend(newStatus)
        },
        fail: function(){
          console.log("ERROR")
        },      
      });
    }); 
  });  


  $(document).ready(function(){

    $("#button-search").click(function(){
      $.ajax({
        url: "http://localhost:3001/twitt/search",
        method : "POST",
        dataType : "json",
        data:{search:$("#search-tweet").val()}, 
        success: function(result){
          $('#searchresult').html('')
          result.statuses.forEach(searchresult => {
            console.log(searchresult)
            const row =`
            <h3> ${searchresult.user.screen_name} </h3>
            <img src="${searchresult.user.profile_image_url}">
            <p> ${searchresult.text} </p>
            `;
            $('#timeline').html('') 
            $('#timeline').hide() 
            $('#searchresult').show()
            $('#searchresult').append(row)
          })        
        },
        fail: function(){
          console.log("ERROR")
        },      
      });
    }); 
  });  

   $(document).ready(function(){
    $("#show-timeline").click(function(){
      $.ajax({
        url: "http://localhost:3001/twitt/timeline",
        method : "GET",
        dataType : "json",
        success: function(result){
          $('#timeline').html('')
          result.forEach(twitter => {
            const row =`
            <h3> ${twitter.user.screen_name} </h3>
            <img src="${twitter.user.profile_image_url}">
            <p> ${twitter.text} </p>
            `;
            $('#timeline').show()
            $('#searchresult').hide() 
            $('#timeline').append(row)
          })        
        },
        fail: function(){
          console.log("ERROR")
        },      
      });
    }); 
  });  