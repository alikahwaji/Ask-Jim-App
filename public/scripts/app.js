'use strict';

console.log('App js is the running');

// JSX - JavaScript XML

var app = {
  title: 'Ask Jim',
  subtitle: 'A friendly decision maker',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderApp();
  }
};

var remove = function remove() {
  app.options.length = [];
  renderApp();
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
      'Here are you options: '
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      'Hi Jim, what are we doing today?'
    ),
    React.createElement(
      'button',
      { onClick: remove },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
