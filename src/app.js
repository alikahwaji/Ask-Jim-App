
class MainApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleDeleteOptions () {
    this.setState(() => ({ options: [] }))
  }
  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return ('This option already exists')
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  render () {
    const subtitle = 'Confused what to do? let me help you'

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick ={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
      </div>
    )
  }
}

MainApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: 'ASK JIM'
}
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled= {!props.hasOptions}
      >
        Hi Jim, what are we doing for today?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }
    </div>
  )
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({error: error}))
  }
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}

ReactDOM.render(<MainApp />, document.getElementById('app'))
