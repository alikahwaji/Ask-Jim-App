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

const appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length ? <p>Here are you options: {app.options}</p> : <p>No options</p>}
      <p>{app.options.length}</p>
      <ol>
        <li>item one</li>
        <li>item two</li>
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
