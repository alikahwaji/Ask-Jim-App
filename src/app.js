console.log('App js is the running')

// JSX - JavaScript XML

const app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker',
  options: []
}
const template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length ? <p>Here are you options: {app.options}</p> : <p>No options</p>}
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
)
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
const appRoot = document.getElementById('app')

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
