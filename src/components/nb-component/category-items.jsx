import { withCategoryItems } from '../hoc-helpers'
import MenuItems from '../left-bar-widgets/menu-items'
import { connect } from 'react-redux'
import { loadCategories } from '../../actions'

const MenuList = withCategoryItems(MenuItems)
const mapsToState = state => {
  return state
}
export default connect(
  mapsToState,
  dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
  })
)(MenuList)
