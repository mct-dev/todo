import React, { Component } from 'react'
import './App.css'
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
          <TodoForm />
          <TodoList />
        </div>
      </div>
    )
  }
}

App.propTypes = {
}

export default App
