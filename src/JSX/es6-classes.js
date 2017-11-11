class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting () {
    return `Hi. I am ${this.name}.`
  }
  getDescription () {
    return `Hi. I am ${this.name},I'm ${this.age} years old.`
  }
}

// const myInfo = new Person('Ali', 37)
// console.log(myInfo.getDescription())

class Student extends Person {
  constructor (name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor () {
    return this.major
  }
  getDescription () {
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` I have ${this.major} major.`
    }
    return description
  }
}

const myFullInfo = new Student('Ali', 37, 'Information Technology')
console.log(myFullInfo.getDescription())

class Traveler extends Person {
  constructor (name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting () {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += `I'm visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const myHomeLoction = new Traveler('Ali', 37, 'Auckland')
console.log(myHomeLoction.getGreeting())
