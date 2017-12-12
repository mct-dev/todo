import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({name, completed}) => (
  <li>
    <input type='checkbox' defaultChecked={completed} />
    {name}
  </li>
)
TodoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  completed: PropTypes.boolean,
}

class TodoList extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}
TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList
