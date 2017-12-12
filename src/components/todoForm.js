import React from 'react'
import PropTypes from 'prop-types'

const TodoForm = (props) => {

  const { currentTodo, changeCurrent } = props

  const handleInputChange = (e) => {
    let val = e.target.value
    // we pass in the store dispatch function to props instead of writing it here
    // because it helps containerize the todoform component.  There should be
    // no business logic written in any react components
    changeCurrent(val)
  }

  return (
    <form>
      <input type="text" onChange={handleInputChange} value={currentTodo}/>
    </form>
  )
}

TodoForm.propTypes = {
  currentTodo: PropTypes.string,
  changeCurrent: PropTypes.func,
}

export default TodoForm
