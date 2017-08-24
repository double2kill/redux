let nextTodoId = 1

export const addNode = (parentId, name) => {
  return {
    type: 'ADD_NODE',
    id: nextTodoId++,
    name,
    parentId
  }
}

export const changeFold = (id) => {
  return {
    type: 'CHANGE_FOLD',
    id: id,
  }
}

export const setSelect = (id) => {
  return {
    type: 'SET_SELECT',
    id: id
  }
}

export const clearSelect = () => {
  return {
    type: 'CLEAR_SELECT'
  }
}

export const changeName = (id, name) => {
  return {
    type: 'CHANGE_NAME',
    id: id,
    name
  }
}