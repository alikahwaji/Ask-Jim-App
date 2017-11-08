'use strict';

var square = function square(x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x
// }

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log('square =', square(4));
console.log('squareArrow =', squareArrow(6));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

var getLastName = function getLastName(fullName) {
  return fullName.split(' ')[1];
};

console.log('First Name :', getFirstName('Suhair Chalabi'));
console.log('Last Name :', getLastName('Ali Kahwaji'));
