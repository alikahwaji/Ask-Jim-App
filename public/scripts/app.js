'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker',
  options: []
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title.toUpperCase()
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length ? React.createElement(
    'p',
    null,
    'Here are you options: ',
    app.options
  ) : React.createElement(
    'p',
    null,
    'No options'
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
var count = 0;
var addOne = function addOne() {
  console.log('Add one');
};
var minusOne = function minusOne() {
  console.log('Minus one');
};
var rest = function rest() {
  console.log('Reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: rest },
    'Reset'
  )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
