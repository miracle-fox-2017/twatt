$(document).ready(function(){
    // $.ajax({
    //     url:"http://localhost:3000/api/twitter",
    //     method:"GET",
    //     dataType:"json",
    //     success:function(result){
    //         console.log(result);
    //         result.map((value)=>{
    //             const row=`
    //                 <li>
    //                     <h3>${value.user.name}</h3>
    //                     <img src="${value.user.profile_image_url}" alt="">
    //                     <span>${value.text}</span>
    //                 </li>
    //             `;
    //             $("#tweet").find(".list").append(row);
    //         });
    //     }
    // });
    $("#post-tweet").on("click",(e)=>{
        if($("#insert-tweet").val() !== ""){
            $.ajax({
                url:"http://localhost:3000/api/twitter/post",
                method:"POST",
                dataType:"json",
                data:{tweet:$("#insert-tweet").val()},
                success:function(result){
                    console.log(result);
                    $("#insert-tweet").val("");
                },
                error:function(err){
                    console.log(err);
                }
            });
        }
    });
    $("#search-button").on("click",(e)=>{
        if($("#search-value").val() !== ""){
            $.ajax({
                url:"http://localhost:3000/api/twitter/search",
                method:"POST",
                dataType:"json",
                data:{search:$("#search-value").val()},
                success:function(result){
                    const searchResult=result.statuses; // Length 15
                    searchResult.map((value)=>{
                        const row=`
                            <li>
                                <h3>${value.user.name}</h3>
                                <img src="${value.user.profile_image_url}" alt="">
                                <span>${value.text}</span>
                            </li>
                        `;
                        $("#search-result").append(row);
                    });
                },
                error:function(err){
                    console.log(err);
                }
            });
        }
    });
});
