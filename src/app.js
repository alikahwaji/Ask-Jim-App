console.log('App js is the running')

// JSX - JavaScript XML

var app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker',
  options: []
}
var template = (
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

var user = {
  name: 'Mike',
  age: 37
}
function getLocation(location) {
  if (location) {
    return <p>Loction: {location} </p>
  } 
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>{`Age: ${user.age}.`}</p>}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
