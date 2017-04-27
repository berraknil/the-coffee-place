import { FETCH_PAGE } from '../actions/index'

const INITIAL_STATE = { page: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return { ...state, page: action.page }

    default:
      return state
  }
}
