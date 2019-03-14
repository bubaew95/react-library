import { withChildFunction, withBookItem } from '../hoc-helpers'
import ItemInfo from '../item-info'
import { connect } from 'react-redux'
import { fetchAllItems } from '../../actions'

const BookList = withBookItem(withChildFunction(ItemInfo, {}))
const mapsToState = state => {
  return state.booksReducer
}
export default connect(
  mapsToState,
  dispatch => ({
    loadItem: () => dispatch(fetchAllItems()),
  })
)(BookList)
