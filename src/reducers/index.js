import { combineReducers } from 'redux'
import posts from './posts'
import aboutPage from './aboutPage'
import contactPage from './contactPage'

const rootReducer = combineReducers({
  posts,
  aboutPage,
  contactPage,
})

export default rootReducer
