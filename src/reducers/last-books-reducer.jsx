import {
  DISPATCH_LASTBOOKS_LOAD,
  DISPATCH_LASTBOOKS_ITEM,
  DISPATCH_LASTBOOKS_ERROR,
} from '../extends/constants'

const initialState = {
  isLoad: true,
  items: [],
}

export default function lastBooksReducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_LASTBOOKS_LOAD:
      return { ...state, isLoad: action.isload }
    case DISPATCH_LASTBOOKS_ITEM:
      return { ...state, items: action.items }
    case DISPATCH_LASTBOOKS_ERROR:
    //return [ action.payload.response, ...state ]
  }
  return state
}
