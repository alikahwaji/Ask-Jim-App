class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleAddOne () {
    console.log('Adding One')
  }

  handleMinusOne () {
    console.log('Minus One')
  }

  handleReset () {
    console.log('Reset')
  }

  render() {
    return (
      <div>
        <h1>Count :</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />,document.getElementById('app'))
// let count = 0
// const addOne = () => {
//   count++
//   renderCounterApp()
// }
// const minusOne = () => {
//   count--
//   renderCounterApp()
// }
// const rest = () => {
//   count = 0
//   renderCounterApp()
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={rest}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
