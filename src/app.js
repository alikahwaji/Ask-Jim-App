console.log('App js is the running')

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

var templateTwo = (
  <div>
    <h1>Ali Kahwaji</h1>
    <p>Age: 37</p>
    <p>Location: Auckland</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
