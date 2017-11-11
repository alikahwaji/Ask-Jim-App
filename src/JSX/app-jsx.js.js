console.log('App js is the running')

// JSX - JavaScript XML

const app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker',
  options: []
}
const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ' '
    renderApp()
  }
}

const remove = () => {
  app.options.length = []
  renderApp()
}

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length ? <p>Here are you options: </p> : <p>No options</p>}
      <button disabled={app.options.length === 0} onClick={makeDecision}>Hi Jim, what are we doing today?</button>
      <button onClick={remove}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderApp()
