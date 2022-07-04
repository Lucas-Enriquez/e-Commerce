import { TYPES } from '../Actions/types'

export const initialState = {
  items: []
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.UPDATE: {
      return { items: action.payload }
    }

    default:
      return state
  }
}
