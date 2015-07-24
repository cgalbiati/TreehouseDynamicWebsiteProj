
// function that handles reading of files and merge in values
//-populate it into html
	// read from file and get a string
	// merge values into string 
var fs = require('fs');

function mergeValues(values, content) {
	//cycle over keys of values
	for (var key in values) {
		// replace all {{key}} with values from values object
		content = content.replace('{{' + key + '}}', values[key]);
	}
	

	// return merged content
	return content;
}

function view(templateName, values, response) {
	//read from template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
	fileContents = mergeValues(values, fileContents);
	//insert values into content

	//write out to response
	response.write(fileContents);
}

module.exports.view = view;