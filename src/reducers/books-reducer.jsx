import {
  DISPATCH_LOAD,
  DISPATCH_BOOK_ITEMS,
  DISPATCH_ERROR,
} from '../extends/constants'

const initialState = {
  isLoad: true,
  items: [],
}

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_LOAD:
      return { ...state, isLoad: action.isload }
    case DISPATCH_BOOK_ITEMS:
      return { ...state, items: action.items }
    case DISPATCH_ERROR:
    //return [ action.payload.response, ...state ]
  }
  return state
}
