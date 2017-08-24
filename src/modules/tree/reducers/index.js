import { combineReducers } from 'redux'
import family from './family'
import selectId from './selectId'

export default combineReducers({
  family,
  selectId
})