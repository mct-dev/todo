import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCurrent } from '../reducers/todo'

const TodoForm = (props) => {

  const { currentTodo, updateCurrent } = props

  const handleInputChange = (e) => {
    let val = e.target.value
    updateCurrent(val)
  }

  return (
    <form>
      <input type="text" onChange={handleInputChange} value={currentTodo}/>
    </form>
  )
}

TodoForm.propTypes = {
  currentTodo: PropTypes.string,
  updateCurrent: PropTypes.func,
}

// connect our redux state and dispatch functions to this component
export default connect(
  // maps state.currentTodo to our props for this component (as props.currentTodo)
  (state) => ({currentTodo: state.currentTodo}),
  {updateCurrent}
)(TodoForm)
