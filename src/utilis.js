console.log('utilis is running')

const square = (x) => {
  return x * x
}

const add = (a, b) => {
  return a + b
}

const isSenior = (age) => age > 64

// export const isAdult = (age) => age >= 18

// export const canDrink = (age) => age >= 21

// export default (a, b) => a - b 

export {square, add}
export default (isSenior)