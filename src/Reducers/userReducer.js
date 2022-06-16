import { TYPES } from '../Actions/types'

export const initialState = {
  logged: true,
  user: {}
}

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { logged: true, user: action.payload }

    default:
      return initialState
  }
}
