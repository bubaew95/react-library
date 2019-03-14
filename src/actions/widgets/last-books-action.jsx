import {
  DISPATCH_LASTBOOKS_LOAD,
  DISPATCH_LASTBOOKS_ITEM,
  DISPATCH_LASTBOOKS_ERROR,
} from '../../extends/constants'
import { isLoad, fetchItems, error } from '../general-methods'
import WebService from '../../services'

const { getLastBooks } = new WebService()

export const fetchLastBooks = () => {
  return dispatch => {
    return getLastBooks()
      .then(data => {
        dispatch(isLoad(DISPATCH_LASTBOOKS_LOAD, false))
        dispatch(fetchItems(DISPATCH_LASTBOOKS_ITEM, data))
      })
      .catch(err => {
        dispatch(error(DISPATCH_LASTBOOKS_ERROR, err))
      })
  }
}
