let nextTodoId = 1
export const addNode = (name, parentId) => {
  return {
    type: 'ADD_NODE',
    id: nextTodoId++,
    name,
    parentId
  }
}