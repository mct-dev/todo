import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo'

class TodoItem extends Component {
  render () {
    return (
      <li>
        <input type='checkbox' 
          className='checkbox'
          onChange={() => this.props.toggleTodo(this.props.id)}
          defaultChecked={this.props.completed} 
        />
        <input type="text" className="content" defaultValue={this.props.name} />
        <span className="delete-item" onClick={() => this.props.deleteTodo(this.props.id)}><button>x</button></span>
      </li>

    )
  }
}
TodoItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
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
            <TodoItem key={todo.id} deleteTodo={this.props.deleteTodo}
              toggleTodo={this.props.toggleTodo} {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  fetchTodos: PropTypes.func,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}

// connect our redux state and dispatch functions to this component
export default connect(
  // maps state.todos to our props for this component (as props.todos)
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  {toggleTodo, fetchTodos, deleteTodo}
)(TodoList)
