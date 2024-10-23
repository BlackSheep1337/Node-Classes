const num1 = 19;
const num2 = 39;

const sumTwoNumbers = () => {
  console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}

sumTwoNumbers();

//Modules
const { peter, john } = require('./4-names');
const { sayHi } = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-granade');

//sayHi('susan');
//sayHi(peter);
//sayHi(john);