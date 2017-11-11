class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>ASK JIM</h1>
        <h2>Confused what to do? let me help you</h2>
      </div>
    )
  }
}
class Action extends React.Component {
  render () {
    return (
      <div>
        <button>Hi Jim, what are we doing for today?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p> Some options will be add here</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <p> An adding button will be build here to add options</p>
      </div>
    )
  }
}
const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
