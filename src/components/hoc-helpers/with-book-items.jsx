import React, { Component } from 'react'
import Spinner from '../spinner'

const withBookItems = View => {
  return class extends Component {
    componentDidMount() {
      if (this.props.catId != null) {
        this.props.loadCatBooks(this.props.catId)
      } else {
        this.props.loadItems()
      }
    }

    componentDidUpdate(prevProps) {
      const { catId, loadCatBooks } = this.props
      if (catId != prevProps.catId) {
        loadCatBooks(catId)
      }
    }

    onItemClick = id => {
      console.log('id_book', id)
    }

    render() {
      const { isLoad, items } = this.props
      if (isLoad) {
        return <Spinner />
      }
      return (
        <View {...this.props} items={items} onItemClick={this.onItemClick} />
      )
    }
  }
}
export default withBookItems
