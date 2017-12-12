import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'
import { updateCurrent } from './reducers/todo'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

class App extends Component {
  render () {
    return (
      <div className="todo-app">
        <div className="header">
          <h1>Todo</h1>
        </div>
        <div>
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array,
  currentTodo: PropTypes.string,
  updateCurrent: PropTypes.func,
}

/**
 * TODO: Review the below connect()(MyMainJsxElement) and <Provider store={store} />
 * thing from 'react-redux'
 * https://egghead.io/lessons/react-handle-actions-in-redux-with-mapdispatchtoprops
 */

/**
 * My understanding of the below:
 * -- connect() creates a jsx element which surrounds my App (because I pass it App after calling it)
 * -- connect() takes the arguments of 1) a function accepting my entire state (from the Providers
 *      element where I pass store={store}) as an argument and returning whatever subset of that state
 *      I want to use in the props of my App element (the entire state, in this case)
 *      ...and 2) a function accepting all of my dispatch functions, which it will also map onto the
 *      props of the App element.
 * -- THE RESULT of this is that the App element has my dispatch functions and my state contained in its
 *    props.
 */
export default connect(
  (state) => state,
  {updateCurrent}
)(App)
