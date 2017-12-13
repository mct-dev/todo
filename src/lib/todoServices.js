
let devServer = 'http://localhost:8080/todos'

export const getTodos = () => {
  // db.json -- json-server package
  return (
    fetch(devServer)
      .then(res => res.json())
  )
}

export const createTodo = (name) => {
  // db.json -- json-server package
  return (
    fetch(devServer, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, completed: false})
    })
      .then(res => res.json())
  )
}
