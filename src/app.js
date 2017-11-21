import validator from 'validator'
import isSenior, {square, add} from './utilis.js'

console.log('app.js is running!')

console.log(square(4))
console.log(add(100, 23))
console.log(isSenior(65))
// console.log(subtract(100, 81))
// console.log(isAdult(19))
// console.log(canDrink(18))

console.log(validator.isEmail('test@gmail.com'))