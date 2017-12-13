import { getTodos, createTodo, destroyTodo } from '../lib/todoServices'
import { showMessage } from './message'

/**
 * INITIAL STATE
 */
export const initialState = {
  todos: [],
  currentTodo: '',
}

/**
 * ACTION TYPES
 */
export const TYPES = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  UPDATE_CURRENT_TODO: 'UPDATE_CURRENT_TODO',
  LOAD_TODOS: 'LOAD_TODOS',
}

/**
 * ACTION CREATORS
 */
export const updateCurrent = (val) => (
  {
    type: TYPES.UPDATE_CURRENT_TODO,
    payload: val
  }
)
export const addTodo = (todo) => (
  {
    type: TYPES.ADD_TODO,
    payload: todo
  }
)
export const removeTodo= (todo) => (
  {
    type: TYPES.REMOVE_TODO,
    payload: todo
  }
)
const loadTodos = (todos) => (
  {
    type: TYPES.LOAD_TODOS,
    payload: todos
  }
)

/**
 * DISPATCH FUNCTIONS (dispatching actions)
 */
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading todos...'))
    getTodos()
      .then(jsonResponse => dispatch(loadTodos(jsonResponse)))
  }
}
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo...'))
    createTodo(name)
      .then(jsonResponse => dispatch(addTodo(jsonResponse)))
  }
}
export const deleteTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Deleting Todo...'))
    destroyTodo(name)
      .then(jsonResponse => dispatch(removeTodo(jsonResponse)))
  }
}

/**
 * ROOT REDUCER
 */
export default (state=initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return {
        ...state,
        currentTodo: '',
        todos: [ ...state.todos, action.payload]
      }
    case TYPES.REMOVE_TODO:

      return {
        ...state,
        todos: [ ...state.todos, action.payload]
      }
    case TYPES.UPDATE_CURRENT_TODO:
      return {
        ...state,
        currentTodo: action.payload
      }
    case TYPES.LOAD_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}
