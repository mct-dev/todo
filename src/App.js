import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Message from './components/message'
import Filter from './components/filter'
import { clearCompletedAndFetch } from './reducers/todo'

class App extends Component {
  state = {
    hidden: true
  }
  toggleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }
  componentWillMount = () => {
    setTimeout(() => {
      this.toggleHidden()
    }, 
    this.props.wait
    )
  }
  clearCompleted = () => {

  }
  render() {
    return (
      <div>
        <div id="preloader" style={!this.state.hidden ? {visibility: 'hidden'} : {visibility:'visible'}}>
          <div id="loader">
          </div>
        </div>
        <div style={this.state.hidden ? {visibility: 'hidden'} : {visibility:'visible'}} className="todo-app">
          <div className="header">
            <h1>Todo</h1>
          </div>
          <Message />
          <Router>
            <div className="list-container">
              <Filter />
              <Route path='/:filter?' render={({ match }) => (
                <TodoList filter={match.params.filter} />
              )} />
              <TodoForm />
              <button onClick={this.clearCompleted}>Clear Completed</button>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  wait: PropTypes.number,
  clearCompletedAndFetch: PropTypes.func,
}

export default connect(
  (state) => ({}),
  {clearCompletedAndFetch}
)(App)
