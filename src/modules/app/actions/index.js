let nextTodoId = 1
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}

module.exports.addTodo = addTodo