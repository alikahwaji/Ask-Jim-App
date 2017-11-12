class MainApp extends React.Component {
  render () {
    const title = 'ASK JIM'
    const subtitle = 'Confused what to do? let me help you'
    const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four']

    return (
      <div>
        <Header title ={title} subtitle={subtitle}/>
        <Action />
        <Options  options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
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

class Option extends React.Component {
  render () {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}
ReactDOM.render(<MainApp />, document.getElementById('app'))
