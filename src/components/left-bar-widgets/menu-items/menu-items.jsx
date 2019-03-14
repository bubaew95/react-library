import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = props => {
  const { categoryReducer, itemSelectedItem } = props

  const items = categoryReducer.items.map(item => {
    return (
      <li key={item.id}>
        <Link to={`/books/${item.title_url}/${item.id}`}>{item.title}</Link>
      </li>
    )
  })

  return (
    <div className="filter-widget">
      <h2 className="fw-title">Разделы</h2>
      <ul className="category-menu">{items}</ul>
    </div>
  )
}
export default MenuItems
