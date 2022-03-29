const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total,a)=>total + a,0);
};

const multiply = function(numbers) {
  return numbers.reduce((total,a)=>total * a,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	let result = 1;
  for(let i=1;i<=a;i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
