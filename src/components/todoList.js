import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTodos } from '../reducers/todo'

const TodoItem = ({name, completed}) => (
  <li>
    <input type='checkbox' defaultChecked={completed} />
    {name}
  </li>
)
TodoItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  completed: PropTypes.bool,
}

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

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
  fetchTodos: PropTypes.func,
}

// connect our redux state and dispatch functions to this component
export default connect(
  // maps state.todos to our props for this component (as props.todos)
  (state) => ({todos: state.todos}),
  {fetchTodos}
)(TodoList)
