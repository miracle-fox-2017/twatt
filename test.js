let endpoint = 'http://localhost:3000/api/twitter/timeline/home?since_id=&max_id=';

const getCurrentEndpoint = (url) => {
		let endpointGen = url.match(/\/api(.*)\?/).pop(); // /twitter/timeline/user
		let arrEndpointGen = endpointGen.split('/');			// ["twitter", "timeline", "user"]

		return arrEndpointGen[arrEndpointGen.length - 1];
	} 


console.log(getCurrentEndpoint(endpoint))