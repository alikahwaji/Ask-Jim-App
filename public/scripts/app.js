'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is a test of JSX'
  ),
  React.createElement(
    'p',
    null,
    'This is some text'
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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
