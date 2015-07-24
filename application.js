//prob - need a simple way to look up info from a web browser
//use node to look up info and server template via http
var router = require('./router.js');

//create web serveer
var http = require('http');
http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(8080);
console.log('Server running at localhost:8080');





	







// Profile_ex.js




// 1. create web server
// 2. //2. handle http route (when you type a domain name) get/post 
// function homeRoute() {
// if (url === '/') {
// // show serach field
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
// 	response.write('Header\n');
// //get json from website


// 		//on('end')
// 		studentProfile.on('end', function(profileJSON) {
// 			//show profile 
// 		});
		

// 		//on('error')
// 		studentProfile.on('error', function(error) {
// 				//show error	
// 		})


// if url '/' && post
	// redirect to /:username

//3. handle http route for get/username (ie url/username)
	// if url == '/....'


//4 function that handles reading of files and merge in values
//-populate it into html
	// read from file and get a string
	// merge values into string 

//


