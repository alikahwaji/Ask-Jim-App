console.log('App js is the running')

// JSX - JavaScript XML

var template = (
  <div>
    <h1>This is a test of JSX</h1>
    <p>This is some text</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
