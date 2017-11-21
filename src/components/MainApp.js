import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class MainApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
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

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
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
        <OptionModal
        selectedOption={this.state.selectedOption} 
        handleClearSelectedOption ={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

MainApp.defaultProps = {
  options: []
}
