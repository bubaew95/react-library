import { withBookItems, withChildFunction } from '../hoc-helpers'
import ItemList from '../item-list'
import { connect } from 'react-redux'
import { fetchAllItems, fetchBooksForCategory } from '../../actions'

const BookList = withBookItems(ItemList)
const mapsToState = state => {
  return state.booksReducer
}
export default connect(
  mapsToState,
  dispatch => ({
    loadItems: () => dispatch(fetchAllItems()),
    loadCatBooks: catId => dispatch(fetchBooksForCategory(catId)),
  })
)(BookList)
