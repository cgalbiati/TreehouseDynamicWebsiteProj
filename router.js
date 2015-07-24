var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var querystring = require('querystring');

var commonHeader = {'Content-Type': 'text/html'};

//handle http route (when you type a domain name) get/post 
function home(request, response) {
	// if url -- '/' && GET
	if (request.url === '/') {
		if(request.method.toLowerCase() === "get" ) {
			// show serach field
			response.writeHead(200, commonHeader);
			renderer.view('header', {}, response);
			renderer.view('search', {}, response);
			renderer.view('footer', {}, response);
			response.end();
		}
		else {
			// if url == '/' && POST
			if(request.method.toLowerCase() === "post" ) {
				//get post data from body
				request.on('data', function(postBody)  {
					//extract username
					var query = querystring.parse(postBody.toString())
					// redirect to /:username
					response.writeHead(303, {'Location': "/" + query.username});
					response.end();
				});
			}
		}
	}

}
// handle http route for get/username (ie url/username)
function user(request, response) {
	// if url == '/....'
	var username = request.url.replace('/', '');
	if (username.length > 0) {
		response.writeHead(200, commonHeader);
		renderer.view('header', {}, response);

		//get json from website
		var studentProfile = new Profile(username);

		//on('end')
		studentProfile.on('end', function(profileJSON) {
			//show profile 
			// strore values we need
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javascriptPoints: profileJSON.points.JavaScript
			}
			//sinple response
			renderer.view('profile', values, response);
			renderer.view('footer', {}, response);	
			response.end();	
		});

		//on('error')
		studentProfile.on('error', function(error) {
			//show error
			renderer.view('error', {errorMessage: error.message}, response);
			renderer.view('search', {}, response);
			renderer.view('footer', {}, response);	
			response.end();	
		});
	}
}
	module.exports.home = home;
	module.exports.user = user;