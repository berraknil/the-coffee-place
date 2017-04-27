import { combineReducers } from 'redux'
import posts from './posts'
import page from './page'

const rootReducer = combineReducers({
  posts,
  page,
})

export default rootReducer
