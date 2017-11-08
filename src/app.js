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

// var user = {
//   name: 'Mike',
//   age: 37,
//   location: 'NZ'
// }
// var userName = 'ali'
// var userAge = 30
// var userLocation = 'Auckland'

// var templateTwo = (
//   <div>
//     <h1>{user.name.toUpperCase()}</h1>
//     <p>{`Age: ${user.age}.`}</p>
//     <p>{`Location: ${user.location}.`}</p>
//   </div>
// )

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
