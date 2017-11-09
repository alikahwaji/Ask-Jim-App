let count = 0
const addOne = () => {
  count++
  renderCounterApp()
}
const minusOne = () => {
  count--
  renderCounterApp()
}
const rest = () => {
  count = 0
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={rest}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
