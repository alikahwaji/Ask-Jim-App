var nameVar = 'Ali'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jan'
nameLet = 'Jake'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName () {
  const petName = 'mimi'
  return petName
}

const petName = getPetName()
console.log(petName)

// block scoping 

const fullName = 'Ali Kahwaji'
let firstName 

if(fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)