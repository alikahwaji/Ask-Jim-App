'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var template = React.createElement(
  'p',
  null,
  'This is a test of JSX , dose it change'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
