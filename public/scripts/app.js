'use strict';

var nameVar = 'Ali';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jan';
nameLet = 'Jake';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'mimi';
  return petName;
}

var petName = getPetName();
console.log(petName);

// block scoping 

var fullName = 'Ali Kahwaji';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
