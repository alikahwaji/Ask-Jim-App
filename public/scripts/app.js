'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item two'
    )
  )
);

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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
