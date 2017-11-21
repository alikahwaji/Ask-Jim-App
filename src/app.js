import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption'
import Options from './components/Options'
import Header from './components/Header'
import Action from './components/Action'

class MainApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    console.log('Did Mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Update')
  }
  componentWillUnmount() {
    console.log('Component unmount')
  }
  handleDeleteOptions () {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
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
          handleDeleteOption = {this.handleDeleteOption}
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




ReactDOM.render(<MainApp />, document.getElementById('app'))
