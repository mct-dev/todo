const initialState = {
  todos: [],
}
const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state, todos: [ ...state.todos, action.payload]
      }
    default:
      return state
  }
}

module.exports = todoReducer
