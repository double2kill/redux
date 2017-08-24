const selectId = (state = -1, action) => {
  switch (action.type) {
    case 'SET_SELECT':
      return action.id
    case 'CLEAR_SELECT':
      return -1
    default:
      return state
  }
}

export default selectId
