const square = function (x) {
  return x * x
}

// const squareArrow = (x) => {
//   return x * x
// }

const squareArrow = (x) => x * x

console.log('square =', square(4))
console.log('squareArrow =', squareArrow(6))

const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}

const getLastName = (fullName) => fullName.split(' ')[1]

console.log('First Name :', getFirstName('Suhair Chalabi'))
console.log('Last Name :', getLastName('Ali Kahwaji'))
