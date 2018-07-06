$(document).ready(function () {
    // $('button').click(function () {
    $.ajax({
        url: "http://localhost:3000/twitters/",
        method: 'GET',
        dataType: 'JSON',
        success: function (dataTweets) {
            dataTweets.forEach(function (tweet) {
                console.log(tweet)
                $('#timeline').append(
                    `<h4>${tweet.user.screen_name} </h4>
                     <img src="${tweet.user.profile_image_url}">
                     <p>${tweet.text} </p>`
                )
            });
        }
    })
})

$('.searching').click(function () {
    let kataKunci = $('#twit-input').val()
    console.log(kataKunci)
    $.ajax({
        url: "http://localhost:3000/twitters/search",
        method: 'POST',
        data: {
            katakunci: kataKunci
        },
        dataType: 'JSON',
        success: function (dataTweets) {
            console.log(dataTweets.statuses)
            $('#search').append(
                // `<p>${dataTweets.statuses.text} </p>
                // <p>${dataTweets.statuses.user.name} </p>`
            )
            // });
        }
    })
})
$(document).ready(function () {
    // $('button').click(function () {
    $.ajax({
        url: "http://localhost:3000/twitters/user",
        method: 'GET',
        dataType: 'JSON',
        success: function (dataTweets) {
            dataTweets.forEach(function (tweet) {
                //console.log(tweet)
                $('#user-timeline').append(
                    `<p>${tweet.user.screen_name} </p>
                        <img src="${tweet.user.profile_image_url}">
                        <p>${tweet.text} </p>`
                )
            });
        }
    })
})

$(".posting").click(function () {
    let newStatus = $('textarea').val()
    $.post(
        "http://localhost:3000/twitters/",
        {
            status: newStatus
        },
        function (data, status) {
            location.reload()
        }
    )
})