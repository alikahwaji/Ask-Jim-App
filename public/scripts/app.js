console.log('App js is the running')

// JSX - JavaScript XML

// var template = <p>This is a test of JSX</p>
var template = React.createElement(
  'p',
  { id: 'btn' },
  'This is a test'
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
