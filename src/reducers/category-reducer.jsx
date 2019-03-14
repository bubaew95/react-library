import {
  DISPATCH_CATEGORY_LOAD,
  DISPATCH_CATEGORY_ITEM,
  DISPATCH_CATEGORY_ERROR,
} from '../extends/constants'

const initialState = {
  isLoad: true,
  items: [],
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_CATEGORY_LOAD:
      return { ...state, isLoad: action.isload }
    case DISPATCH_CATEGORY_ITEM:
      return { ...state, items: action.items }
    case DISPATCH_CATEGORY_ERROR:
    //return [ action.payload.response, ...state ]
  }
  return state
}
