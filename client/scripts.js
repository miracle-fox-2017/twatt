$(document).ready(function() {
	const contentArea = $('#content-area');
	const loadingArea = $('#loading');
	const searchQuery = $("#searchQuery");

	const loadInitTweet = () => {
		$.ajax({
			method:"GET",
			url: 'http://localhost:3000/twitter/timeline',
			beforeSend: function (xhr){
				loadingArea.show();
			},
			success : function(result) {
				loadingArea.hide();
				contentArea.append(crunchTweet(result));
			},
			error: function(err) {
				loadingArea.hide();
				alert("Error fetching data");
			}
		})
	}

	const searchTweet = () => {
		searchQuery.keypress(function(e) {
			if(e.which == 13){
				$.ajax({
					method:"POST",
					url: "http://localhost:3000/twitter/search",
					data: {
						query: this.value
					},
					beforeSend: function (xhr){
						loadingArea.show();
					},
					success : function(result) {
						loadingArea.hide();
						contentArea.html(crunchTweet(result, 'search'));
					},
					error: function(err) {
						loadingArea.hide();
						alert("Error fetching data");
					}
				})
			}
		});
	}

	const crunchTweet = (tweets, area = '') => {
		let content = '';
		let allTweet = area === 'search' ? JSON.parse(tweets).statuses : JSON.parse(tweets);

		allTweet.forEach( function(tweet, index) {
			content += `
				<div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="${tweet.user.profile_image_url}" alt="" class="circle responsive-img avatar-pic"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
            	<h5 class="card-title">@${tweet.user.screen_name}</h5>
              <span class="black-text">
                ${tweet.text}
              </span>
            </div>
          </div>
        </div>
			`;
		});

		return content;
	}



	
	loadInitTweet();
	searchTweet();
})