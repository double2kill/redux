module.exports = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_NODE':
    return {...state, 
      [action.parentId]: {...state[action.parentId],
        childIds: [...state[action.parentId].childIds, action.id]
      },
      [action.id]: {
        id: action.id,
        name: action.name,
        childIds: []
      }
    }
  case 'DELETE_NODE':
    return {}
  default:
    return {
        0: {
        id: 0,
        name: 'inital',
        childIds: []
      }
    }
  }
}
