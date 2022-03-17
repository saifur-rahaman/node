const names = require ('./4-name');
const greet = require ('./5-utils');
const data = require ('./6-alt-flavor');
require('./7-mind-grenade');
//console.log(names);
console.log(data);
greet(names.john);
greet(data.singlePerson.name);
//
//sayHi('Forhad');
//sayHi(john);
//sayHi(peter);