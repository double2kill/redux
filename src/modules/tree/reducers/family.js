const person = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NODE': 
    case 'DELETE_NODE':
    return {}
    default:
    return {
        0: {
        id: 0,
        name: '姓氏',
        childIds: []
      }
    }
  }
}

const family = (state = {
  0: {
  id: 0,
  name: '姓氏',
  childIds: []
}
}, action) => {
  switch (action.type) {
  case 'ADD_NODE':
    return {...state, 
      [action.parentId]: {...state[action.parentId],
        childIds: [...state[action.parentId].childIds, action.id],
        fold: false
      },
      [action.id]: {
        id: action.id,
        name: action.name,
        childIds: []
      }
    }
  case 'DELETE_NODE':
    return {}
  case 'CHANGE_NAME':
    return {...state,
      [action.id]: {...state[action.id],
        name: action.name
      }
    }
  case 'CHANGE_FOLD':
    return {...state,
      [action.id]: {...state[action.id],
        fold: !state[action.id].fold
      }
    }
    return {}
  default:
    return state
  }
}

export default family
