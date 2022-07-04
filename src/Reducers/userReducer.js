import { TYPES } from '../Actions/types'

export const initialState = {
  logged: false,
  user: {}
}

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { logged: true, user: action.payload }
    case TYPES.LOGOUT:
      return state

    default:
      return initialState
  }
}
