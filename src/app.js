class MainApp extends React.Component {
  render () {
    const title = 'ASK JIM'
    const subtitle = 'Confused what to do? let me help you'
    const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four']

    return (
      <div>
        <Header title ={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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
  handlePick () {
    alert('HAndlePick')
  }
  render () {
    return (
      <div>
        <button onClick={this.handlePick}>Hi Jim, what are we doing for today?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll () {
    alert('Remov All')
  }
  render () {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
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
