import React, { Component } from 'react'
import Spinner from '../spinner'

const withLastProductItems = View => {
  return class extends Component {
    componentDidMount() {
      this.props.loadLastBooks()
    }

    onItemClick = id => {
      alert(id)
    }

    render() {
      const {
        lastBooksReducer: { isLoad, items },
      } = this.props
      if (isLoad) {
        return <Spinner />
      }
      return <View {...this.props} items={items} />
    }
  }
}
export default withLastProductItems
