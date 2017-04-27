import { FETCH_POSTS } from '../actions/index'

const INITIAL_STATE = { data: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, data: action.payload.data }

    default:
      return state
  }
}
