import { FETCH_PAGE } from '../actions/index'

const INITIAL_STATE = { data: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return { ...state, data: action.payload.data.content }

    default:
      return state
  }
}
