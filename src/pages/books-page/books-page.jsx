import React, { Component } from 'react'
import './books-page.css'
import BookList from '../../components/nb-component/item-lists'
import LeftSliderbar from '../../components/left-slidebar'
import { PageRow } from '../../components/html-components'
import { withRouter } from 'react-router-dom'
const BooksPage = ({ match }) => {
  document.title = 'Книги'

  const { id } = match.params
  return (
    <PageRow
      left={<LeftSliderbar />}
      right={<BookList catId={id} col="col-md-4 col-sm-8" />}
    />
  )
}

export default withRouter(BooksPage)
