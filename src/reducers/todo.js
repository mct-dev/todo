const initialState = {
  todos: [],
  currentTodo: 'temp',
}
const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state, todos: [ ...state.todos, action.payload]
      }
    case 'UPDATE_CURRENT_TODO':
      return {
        ...state, currentTodo: action.payload
      }
    default:
      return state
  }
}

module.exports = todoReducer
