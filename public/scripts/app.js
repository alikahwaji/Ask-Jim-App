'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = function addArrow(a, b) {
  // console.log(arguments)
  return a + b;
};
console.log('add =', add(5, 6));
console.log('Add =', addArrow(4, 2));

var user = {
  name: 'Mike',
  cities: ['Dubai', 'KL', 'Auckland'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city + '!';
    });
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3, 4, 5, 6],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
