const request = require('request');

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });


// Request to Github to my username

// const options = {
// 	url: 'https://api.github.com/users/Kevinclap',
// 	headers: {
// 		"Accept": "application/vnd.github.v3+json",
// 		"User-Agent": "request"
// 	}
// }

// request(options, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });


// Request to Github to "expressjs" repos









// // Request to Github to create a Gist

// const form = JSON.stringify({
// 	"files": {
// 		"kevin_gist.txt": {
// 			"content": "Testing objectception"
// 		}
// 	},
// 	"description": "This is  a text file creatted using Github API",
// 	"public": false
	
// });


// const options = {
// 	url: "https://api.github.com/gists",
// 	headers: {
// 		"User-Agent": "request"
// 	},
// 	form,
// }



// request.post(options, form, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:',JSON.parse(body)); // Print the HTML for the Google homepage. 
// });


// // tercera opcion de la documentacion
// // intente la primera





var arr = [5, 6, 7, "lalaa", true,]


console.log(arr.push(10));
console.log(arr)
















