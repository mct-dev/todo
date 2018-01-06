let baseUrl = process.env.REACT_APP_TODOS_URL
var axios = require('axios')

export const getTodos = () => { 
  return (
    fetch(`${baseUrl}`, {mode: 'cors'})
      .then(res => res.json())
  )
}

export const createTodo = (name) => {
  // db.json -- json-server package
  return (
    fetch(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify({name: name, completed: false})
    })
      .then(res => res.json())
  )
}

export const updateTodo = (todo) => {
  return (
    fetch(`${baseUrl}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
  )
}

export const destroyTodo = (id) => {
  return (
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  )
}

export const completeTodo = (todo) => {
  return (
    fetch(`${baseUrl}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
  )
}