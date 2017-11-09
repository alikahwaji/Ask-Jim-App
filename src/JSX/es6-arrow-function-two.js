const add = function (a, b) {
  console.log(arguments)
  return a + b
}

const addArrow = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log('add =', add(5, 6))
console.log('Add =', addArrow(4, 2))

const user = {
  name: 'Mike',
  cities: ['Dubai', 'KL', 'Auckland'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!')
  }
}
console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
