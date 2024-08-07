const add = function(a, b) {
return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, num) => acc + num, 0);
};

const multiply = function(array) {
  return array.reduce((acc, num) => acc * num, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
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
