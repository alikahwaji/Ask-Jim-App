'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var template = React.createElement(
  'h1',
  null,
  'This is a test of JSX'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
