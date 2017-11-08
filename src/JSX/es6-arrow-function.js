const square = function (x) {
  return x * x
}

// const squareArrow = (x) => {
//   return x * x
// }

const squareArrow = (x) => x * x

console.log('square =', square(4))
console.log('squareArrow =', squareArrow(6))

const fullName = 'Mike Tom'

const firstName = () => {
  return fullName.split(' ')[0]
}

const lastName = () => fullName.split(' ')[1]

console.log('First Name :', firstName())
console.log('Last Name :', lastName())
