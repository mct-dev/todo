import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo'

class TodoForm extends Component {

  handleInputChange = (e) => {
    const val = e.target.value
    this.props.updateCurrent(val)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }

  render () {
    const { currentTodo } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={currentTodo}/>
      </form>
    )
  }
}

TodoForm.propTypes = {
  currentTodo: PropTypes.string,
  updateCurrent: PropTypes.func,
  saveTodo: PropTypes.func,
}

// connect our redux state and dispatch functions to this component
export default connect(
  // maps state.currentTodo to our props for this component (as props.currentTodo)
  (state) => ({currentTodo: state.todo.currentTodo}),
  {updateCurrent, saveTodo}
)(TodoForm)
