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

var fullName = 'Mike Tom';

var firstName = function firstName() {
  return fullName.split(' ')[0];
};

var lastName = function lastName() {
  return fullName.split(' ')[1];
};

console.log('First Name :', firstName());
console.log('Last Name :', lastName());
