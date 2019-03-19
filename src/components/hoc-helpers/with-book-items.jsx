import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorBoundry from '../error-boundry'
import Pagination from 'react-js-pagination'
import NotItems from '../not-items'
import ErrorIndicator from '../error-indicator/error-indicator'

const withBookItems = View => {
  return class extends Component {
    state = {
      activePage: 1,
    }

    componentDidMount() {
      console.log('params', this.props)
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

    onItemClick = id => {}

    handlePageChange = pageNumber => {
      console.log(`active page is ${pageNumber}`)
      //this.setState({ activePage: pageNumber })
    }

    pagination = countItems => {
      return (
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={countItems}
          pageRangeDisplayed={10}
          itemClass="page-item"
          linkClass="page-link"
          onChange={this.handlePageChange}
        />
      )
    }

    render() {
      const { isLoad, items } = this.props
      let countItems = items.length
      if (isLoad) {
        return <Spinner />
      }
      return (
        <ErrorBoundry>
          {items.length > 0 ? (
            <View
              {...this.props}
              items={items}
              onItemClick={this.onItemClick}
            />
          ) : (
            <ErrorIndicator
              grid="col-md-12"
              message="В этом разделе нет книг"
            />
          )}

          {countItems > 5 && this.pagination(countItems)}
        </ErrorBoundry>
      )
    }
  }
}
export default withBookItems
