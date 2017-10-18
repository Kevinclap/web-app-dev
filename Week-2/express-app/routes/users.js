var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const generateUserArray = (userQuantity) => {
	let arr = [];
	for (var i = 0; i < userQuantity; i++) {
		arr.push(userInfo)
	}
	return arr;
};





var userInfo = {
	name: "Kevin",
	lastname: "Castro",
	username: "Kevinclap",
	email: "Kevin@gmail.com"
};


router.get('/', function(req, res, next) {
  const users = generateUserArray(15);

  res.render("users", userInfo);
});







module.exports = {
	router,
	generateUserArray,
};





