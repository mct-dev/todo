const expect = require('chai').expect
import { reducer, TYPES, initialState } from './todo'

describe('Todo Reducer', () => {

  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).to.be.an('object')
  })

  it('adds a todo', () => {
    const endState = {
      ...initialState,
      todos: [
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
})
