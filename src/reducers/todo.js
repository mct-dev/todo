import { getTodos, createTodo, destroyTodo, updateTodo } from '../lib/todoServices'
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
  UPDATE_TODO: 'UPDATE_TODO',
  UPDATE_CURRENT_TODO: 'UPDATE_CURRENT_TODO',
  LOAD_TODOS: 'LOAD_TODOS',
  REPLACE_TODO: 'REPLACE_TODO',
}

/**
 * ACTION CREATORS
 */
export const updateCurrent = (val) => ({type: TYPES.UPDATE_CURRENT_TODO, payload: val})
export const addTodo = (todo) => ({type: TYPES.ADD_TODO, payload: todo})
export const removeTodo = (id) => ({type: TYPES.REMOVE_TODO, payload: id})
export const replaceTodo = (todo) => ({type: TYPES.REPLACE_TODO, payload: todo})
const loadTodos = (todos) => ({type: TYPES.LOAD_TODOS, payload: todos})

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
    dispatch(showMessage('Creating Todo...'))
    createTodo(name)
      .then(jsonResponse => dispatch(addTodo(jsonResponse)))
  }
}
export const updateTodoName = (name, id) => {
  return (dispatch, getState) => {
    const {todos} = getState().todo
    const matchingTodo = todos.find(t => t.id ===id)
    const revisedTodo = {...matchingTodo, name: name}
    updateTodo(revisedTodo)
      .then(res=>dispatch(replaceTodo(res)))
  }
}
export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Updating Todo Item...'))
    // get only todo portion of state
    const {todos} = getState().todo
    const todo = todos.find( t => t.id===id)
    const toggled = {...todo, completed: !todo.completed}
    // api call
    updateTodo(toggled)
    // update state by dispatching an action
      .then(res => dispatch(replaceTodo(res)))
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Deleting Todo...'))
    destroyTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}
/**
 * TODOS FILTER
 */
export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
      return todos.filter(t => t.completed)
    default:
      return todos
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
        todos: state.todos.filter(t => t.id !== action.payload)
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
    case TYPES.REPLACE_TODO:
      return {
        ...state,
        todos: state.todos.map( t => t.id === action.payload.id ? action.payload : t)
      }
    default:
      return state
  }
}
