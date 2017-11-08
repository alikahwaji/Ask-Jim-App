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

var user = {
  name: 'Mike',
  age: 37
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Loction: ',
      location,
      ' '
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    'p',
    null,
    'Age: ' + user.age + '.'
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
