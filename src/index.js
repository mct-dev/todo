import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '../node_modules/normalize.css/normalize.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const todoChangeHandler = (val) => {
  store.dispatch({
    type: 'UPDATE_CURRENT_TODO',
    payload: val
  })
}

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App
    todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={todoChangeHandler}
  />, document.getElementById('root'))
}

// render your app for the first time
render()

// re-render the app when the state changes.
// store will call render when it changes the state
store.subscribe(render)

registerServiceWorker()
