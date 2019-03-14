import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import booksReducer from './books-reducer'
import categoryReducer from './category-reducer'
import lastBooksReducer from './last-books-reducer'

export const reducers = combineReducers({
  routing: routerReducer,
  booksReducer,
  categoryReducer,
  lastBooksReducer,
})
