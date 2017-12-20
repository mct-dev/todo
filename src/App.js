import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Message from './components/message'
import Filter from './components/filter'

class App extends Component {
  render () {
    return (
      <div className="todo-app">
        <div className="header">
          <h1>Todo</h1>
        </div>
        <Message />
        <Router>
          <div className="list-container">
            <Filter />
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter} />
            )} />
            <TodoForm />
          </div>
        </Router>
      </div>
    )
  }
}

App.propTypes = {
}

export default App
