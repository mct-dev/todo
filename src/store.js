import { createStore } from 'redux'
import reducer from './reducers/todo'

export default createStore(reducer,
  // this line activates the Redux chrome web extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
