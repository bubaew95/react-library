import {
  DISPATCH_CATEGORY_LOAD,
  DISPATCH_CATEGORY_ITEM,
  DISPATCH_CATEGORY_ERROR,
} from '../../extends/constants'
import { isLoad, fetchItems, error } from '../general-methods'
import WebService from '../../services'

const { getAllCategories } = new WebService()

export const loadCategories = () => {
  return dispatch => {
    return getAllCategories()
      .then(data => {
        dispatch(isLoad(DISPATCH_CATEGORY_LOAD, false))
        dispatch(fetchItems(DISPATCH_CATEGORY_ITEM, data))
      })
      .catch(err => {
        dispatch(error(DISPATCH_CATEGORY_ERROR, err))
      })
  }
}
