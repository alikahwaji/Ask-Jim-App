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
  console.log('Add one')
}
const minusOne = () => {
  console.log('Minus one')
}
const rest = () => {
  console.log('Reset')
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={rest}>Reset</button>
  </div>
)
console.log(templateTwo)
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
