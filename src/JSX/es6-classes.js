class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting () {
    return `Hi. I am ${this.name}!`
  }
  getDescription () {
    return ` This is ${this.name} and his is ${this.age}.`
  }
}

const myName = new Person('Ali Kahwaji', 37)
console.log(myName.getDescription())

const myLastName = new Person()
console.log(myLastName.getDescription())
