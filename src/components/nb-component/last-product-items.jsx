import { withLastProductItems } from '../hoc-helpers'
import { connect } from 'react-redux'
import { fetchLastBooks } from '../../actions'
import LetestProductSection from '../letest-product-section'

const LetestBooksSection = withLastProductItems(LetestProductSection)
const mapsToState = state => {
  return state
}
export default connect(
  mapsToState,
  dispatch => ({
    loadLastBooks: () => dispatch(fetchLastBooks()),
  })
)(LetestBooksSection)
