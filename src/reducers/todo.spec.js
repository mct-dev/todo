const expect = require('chai').expect
import reducer, { TYPES, initialState, clearAllTodos } from './todo'

describe('Todo Reducer', () => {

  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).to.be.an('object')
  })

  it('adds a todo', () => {
    const endState = {
      ...initialState,
      todos: [
        ...initialState.todos,
        { id: 3, name: 'new todo', completed: false }
      ]
    }
    const action = {
      type: TYPES.ADD_TODO,
      payload: { id: 3, name: 'new todo', completed: false }
    }
    const result = reducer(initialState, action)
    // to.deep.equal is needed for objects. Won't pass otherwise.
    expect(result).to.deep.equal(endState)
  })

  it('updates currentTodo', () => {
    const endState = {
      ...initialState,
      currentTodo: 'updated'
    }
    const action = {
      type: TYPES.UPDATE_CURRENT_TODO,
      payload: 'updated'
    }
    const result = reducer(initialState, action)
    expect(result).to.deep.equal(endState)
  })

  it('loads todos into state from payload', () => {
    const endState = {
      ...initialState,
      todos: [
        ...initialState.todos,
        {id:0, name: 'loaded todos', completed: false}
      ]
    }
    const action = {
      type: TYPES.LOAD_TODOS,
      payload: [
        {id:0, name: 'loaded todos', completed: false}
      ]
    }
    const result = reducer(initialState, action)
    expect(result).to.deep.equal(endState)
  })
  it('updates the name of a todo (todo.name)', () => {
    const startState = {
      ...initialState,
      todos: [
        ...initialState.todos,
        {id:0, name:'START NAME', completed: false}
      ]
    }
    const endState = {
      ...startState,
      todos: [
        {id:0, name:'END NAME', completed: false}
      ]
    }
    const action = {
      type: TYPES.REPLACE_TODO,
      payload: {id:0, name: 'END NAME', completed: false}
    }
    const result = reducer(startState, action)
    expect(result).to.deep.equal(endState)
  })
})
// describe('TodoService', () => {
//   it('destroys all pre-existing todos', () => {
//     const startState = {
//       ...initialState,
//       todos: [
//         ...initialState.todos,
//         {id:0, name:'START NAME', completed: false},
//         {id:1, name:'START NAME2', completed: true}
//       ]
//     }
//     const endState = {
//       ...startState,
//       todos: []
//     }
//     const result = clearAllTodos() 
//     expect(result).to.deep.equal(endState)
//   })

// })