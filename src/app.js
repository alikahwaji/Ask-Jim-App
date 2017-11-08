console.log('App js is the running')

// JSX - JavaScript XML

var app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker'
}
var template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
)

var user = {
  name: 'Mike',
  age: 37,
  location: 'NZ'
}
function getLocation(location) {
  if (location) {
    return <p>Loction: {location} </p>
  } else {
    return 'Unknow'
  }
}
var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>{`Age: ${user.age}.`}</p>
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
