import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BookList from '../../components/nb-component/item-lists'

const BooksCategory = ({ history, match }) => {
  const { id } = match.params
  return (
    <BookList
      onItemClick={id => {
        history.push(`/books/${id}`)
      }}
    />
  )
}
export default withRouter(BooksCategory)
