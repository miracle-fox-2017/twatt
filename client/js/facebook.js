$(document).ready(function(){
	const contentArea = $('#content-area');

	const checkAuthFBUser = () => {
		let fbAccessToken = localStorage.getItem("fb_access_token");

		$(".fblogin-area").show();
		$('.app-container').hide();

		if (typeof fbAccessToken === 'undefined' ||  fbAccessToken === null || fbAccessToken === "") {
			console.log('~~~~~~~~~ Please login First');
			alert("Please Login First!");
		} else {
			$(".fblogin-area").hide();
			$('.app-container').show();
		}
	}

	const refreshPage = () => {
		$("#refreshPage").click(function() {
			window.location.reload(true);
		})
	}

	const getFeedTimelines = () => {
		console.log('~~~~~~~~~~~~~Getting User Feed')
		checkAuthFBUser();

		console.log('~~ Load Timeline User')
		FB.api('/me',  {fields: 'id,name,posts,picture'}, function(response) {
			console.log(response)
			$("#loading").hide();
			contentArea.html(crunchPost(response));
		});
	}

	const crunchPost = (response) => {
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

	const printData = (response) => {
		console.log('~~~PRINT DATA');
		console.log(printData);
	}

	$(".nav-icon.home").click(function(){
		console.log('~~~~ GET FEEED HOME');
		getFeedTimelines();
	})

	// getFeedTimelines();
});