const expect = require('chai').expect
import reducer from './todo'

describe('Todo Reducer', () => {

  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).to.be.an('object')
  })

  it('adds a todo', () => {
    const startState = {
      todos: []
    }
    const endState = {
      todos: [
        { id: 3, name: 'new todo', completed: false }
      ]
    }
    const action = {
      type: 'TODO_ADD',
      payload: { id: 3, name: 'new todo', completed: false }
    }
    const result = reducer(startState, action)
    // to.deep.equal is needed for objects. Won't pass otherwise.
    expect(result).to.deep.equal(endState)
  })

  it('updates currentTodo', () => {
    const startState = {
      todos: [],
      currentTodo: ''
    }
    const endState = {
      todos: [],
      currentTodo: 'updated'
    }
    const action = {
      type: 'UPDATE_CURRENT_TODO',
      payload: 'updated'
    }
    const result = reducer(startState, action)
    expect(result).to.deep.equal(endState)
  })
})
