const todos = (state = [1,2], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, {
      id: action.id,
      text: action.text
    }]
  case 'DELETE_TODO':
    return state - 1
  default:
    return []
  }
}

module.exports = todos
