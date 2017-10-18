const chalk = require('chalk');
const Human = require('./human');
const prompt = require('prompt-sync')();




var attrs = {};
attrs.name = prompt('name = ');
attrs.age = Number(prompt('age = '));
attrs.sex = prompt('sex = ');

var totalSkills = prompt('number of skills = ');

var human = new Human(attrs);



for (var i = 0; i < totalSkills; i++) {
  var skill = prompt((i + 1) + '. skill = ');
  var level = prompt((i + 1) + '. level = ');
  human.learnSkill(skill, level);
}


console.log(human);
// human.toJSON();

human.toColoredString();







// const kevin = new Human({
// // 	name: "Kevin Castro"
// // 	age: 23
// // 	gender: "M"
// // 	income: 5
// // 	skills: {

// // 	}
	

// // })





// IFE

// Inmediatly 

// Funciones anonimas

// Para no contaminar el global scope

// 












