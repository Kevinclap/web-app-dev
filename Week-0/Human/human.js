// ES6

// Leer sobre Map en ES6
// Let en vez de Var
// Sistema de modulos de Node NPM
// Modulo Chalk
// Express modulo para servers API HTTP
// 

// developer paquetes por ejemplo mocha --save-dev


// npm init para comenzar proyecto
// npm install para installar paquetes
// npm install --save-dev para developer packages
// 
const chalk = require ('chalk');




function Human(attrs) {
  attrs = attrs || {};
  this.name = attrs.name;
  this.age = attrs.age;
  this.sex = attrs.sex;
  this.skills = attrs.skills || {};

  return this;
}

Human.prototype.learnSkill = function(skill, level) {
  this.skills[skill] = level;
  return this;
}

Human.prototype.checkSkill = function(skill) {
  return this.skills[skill];
}

Human.prototype.toJSON = function() {
  console.log(this);
};

Human.prototype.toColoredString = function() {
  console.log(chalk.blue(this.name));
  console.log(chalk.red(this.age));
  console.log(chalk.green(this.sex));
  
  var colorArr = ["blue","red","green","yellow","orange","purple","white"]
  
  console.log(chalk.yellow(JSON.stringify(this.skills)));
  
  

};





module.exports = Human;

// hacer loop con skill.length

// buble sort

// math random


// Asignacion

// Skills Random con chalk

// Prox clase ejercicio 8

// Unit Testing

// Mocha
// Chai





// const chalk = require('chalk');

// const log = console.log;

// log(`${chalk.blue('Hello ')} ${chalk.red('World!')}`);








