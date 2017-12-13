import { getTodos } from '../lib/todoServices'

export const initialState = {
  todos: [],
  currentTodo: '',
}

/**
 * separate types into their own object for easy tracking and
 * to avoid code repitition.
 */
export const TYPES = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_CURRENT_TODO: 'UPDATE_CURRENT_TODO',
  LOAD_TODOS: 'LOAD_TODOS',
}

/**
 * "Dispatch" functions, which you can use in
 * store.dispatch() for redux.
 */
export const updateCurrent = (val) => (
  {
    type: TYPES.UPDATE_CURRENT_TODO,
    payload: val
  }
)
const loadTodos = (todos) => (
  {
    type: TYPES.LOAD_TODOS,
    payload: todos
  }
)

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(jsonResponse => dispatch(loadTodos(jsonResponse)))
  }
}

/**
 * There should only be ONE reducer in Redux.  This is a
 * core concept of Redux - the root reducer.  This reducer will
 * always return the entire state, which is why store.getState()
 * work - it just gets the result of the reducer function.
 */
export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
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
