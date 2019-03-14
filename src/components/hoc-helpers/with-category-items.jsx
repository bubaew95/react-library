import React, { Component } from 'react'
import Spinner from '../spinner'

const withCategoryItems = View => {
  return class extends Component {
    componentDidMount() {
      this.props.loadCategories()
    }

    onItemClick = id => {
      alert(id)
    }

    render() {
      const {
        categoryReducer: { isLoad, items },
      } = this.props
      if (isLoad) {
        return <Spinner />
      }
      return <View {...this.props} items={items} />
    }
  }
}
export default withCategoryItems
