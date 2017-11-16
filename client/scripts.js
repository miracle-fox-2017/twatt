$(document).ready(function() {
	const contentArea = $('#content-area');
	const loadingArea = $('#loading');
	const searchQuery = $("#searchQuery");
	const status = $("#status");
	const homeMenu = $(".nav-icon.home");
	const userMenu = $(".nav-icon.user");
	const endpointRoot = 'http://localhost:3000/api/twitter';
	const btnLoadmore = $('#btnLoadmore');

	const loadInitTweet = () => {
		getHomeTimelines();
	}

	const getHomeTimelines = (maxId = null,  sinceId = null,  contentTobe = 'loaded') => {
		$.ajax({
			method:"POST",
			url: endpointRoot+'/timeline/home',
			data: {
				since_id: sinceId,
				max_id: maxId
			},
			beforeSend: function (xhr){
				loadingArea.show();
			},
			success : function(results) {
				let parsedResults = JSON.parse(results);
				btnLoadmore.attr('data-endpoint-url', this.url)
				btnLoadmore.attr('data-since-id', parsedResults[0].id)
				btnLoadmore.attr('data-max-id', parsedResults[parsedResults.length - 1].id)
				btnLoadmore.attr('data-current-endpoint', getCurrentEndpoint(this.url));

					if (contentTobe === 'loaded') {
						contentArea.html(crunchTweet(results));
					} else {
						contentArea.append(crunchTweet(results));
					}	

				loadingArea.hide();
			},
			error: function(err) {
				loadingArea.hide();
				alert("Error fetching data");
			}
		})
	}

	const getUserTimelines = (maxId = null,  sinceId = null, contentTobe = 'loaded') => {
		$.ajax({
			method:"POST",
			url: endpointRoot+'/timeline/user',
			data: {
				since_id: sinceId,
				max_id: maxId
			},
			beforeSend: function (xhr){
				loadingArea.show();
			},
			success : function(results) {
				if (results) {
					let parsedResults = JSON.parse(results);

					btnLoadmore.attr('data-endpoint-url', this.url)
					btnLoadmore.attr('data-since-id', parsedResults[0].id)
					btnLoadmore.attr('data-max-id', parsedResults[parsedResults.length - 1].id)
					btnLoadmore.attr('data-current-endpoint', (this.url[this.url.length - 1] !== '?' ? this.url : getCurrentEndpoint(this.url)));
					
					if (contentTobe === 'loaded') {
						contentArea.html(crunchTweet(results));
					} else {
						contentArea.append(crunchTweet(results));
					}	
				}

				loadingArea.hide();
				
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
					url: endpointRoot+"/search",
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

	const postTweet = () => {
		status.keypress(function(e) {
			if(e.which == 13){
				if (this.value.length > 1) {
					$.ajax({
						method:"POST",
						url: endpointRoot+"/new_tweet",
						data: {
							status: this.value
						},
						beforeSend: function (xhr){
							loadingArea.show();
						},
						success : function(result) {
							loadingArea.hide();
							status.val("");
							loadInitTweet();
						},
						error: function(err) {
							loadingArea.hide();
							alert("Error fetching data");
						}
					})
				} else {
					alert("Tweet need more character");
				}
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
						<p>#${tweet.id}</p>
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

	const menuClicked = () => {
		homeMenu.click((e) =>{
			e.preventDefault()
			contentArea.html("");
			getHomeTimelines();
		})

		userMenu.click((e) =>{
			e.preventDefault()		
			contentArea.html("");
			getUserTimelines(null, null, 'loaded');
		})

		btnLoadmore.click((e) => {
			e.preventDefault();
			let currentEndpoint = btnLoadmore.attr('data-current-endpoint');
			let endpointUrl = btnLoadmore.attr('data-current-url');
			let maxId = btnLoadmore.attr('data-max-id');	
			// Load More Timeline 
			
			if (getCurrentEndpoint(currentEndpoint) === 'home') {
				getHomeTimelines(maxId, null, 'appended');
			}

			if (getCurrentEndpoint(currentEndpoint) === 'user') {
				getUserTimelines(maxId, null, 'appended');
			}

		})
	}

	const getCurrentEndpoint = (url) => {
		console.log('get CUrrent END```')
		console.log(url.indexOf('?'));
		let arrEndpointGen = url.split('/');

		return arrEndpointGen[arrEndpointGen.length - 1];
	} 

	/*const getCurrentEndpoint = (url) => {
		let endpointGen = url.match(/\/api(.*)\?/).pop(); // /twitter/timeline/user
		let arrEndpointGen = endpointGen.split('/');			// ["twitter", "timeline", "user"]

		return arrEndpointGen[arrEndpointGen.length - 1];
	} */

	loadInitTweet();
	menuClicked();
	searchTweet();
	postTweet();
})