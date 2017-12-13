
export const getTodos = () => {

  // db.json -- json-server package
  let devServer = 'http://localhost:8080/todos'

  return (
    fetch(devServer)
      .then(res => res.json())
  )
}
