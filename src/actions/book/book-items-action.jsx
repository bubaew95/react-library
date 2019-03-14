import {
  DISPATCH_LOAD,
  DISPATCH_BOOK_ITEMS,
  DISPATCH_ERROR,
} from '../../extends/constants'
import { isLoad, fetchItems, error } from '../general-methods'
import WebService from '../../services'

const { getBooks } = new WebService()

export const fetchAllItems = () => {
  return dispatch => {
    return getBooks()
      .then(data => {
        dispatch(isLoad(DISPATCH_LOAD, false))
        dispatch(fetchItems(DISPATCH_BOOK_ITEMS, data))
      })
      .catch(err => {
        dispatch(error(DISPATCH_ERROR, err))
      })
  }
}
