'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

// var template = (
//   <div>
//     <h1>This is a test of JSX</h1>
//     <p>This is some text</p>
//     <ol>
//       <li>item one</li>
//       <li>item two</li>
//     </ol>
//   </div>
// )

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ali Kahwaji'
  ),
  React.createElement(
    'p',
    null,
    'Age: 37'
  ),
  React.createElement(
    'p',
    null,
    'Location: Auckland'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
