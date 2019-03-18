import React from 'react'
import { Link } from 'react-router-dom'
import './item-list.css'
import ErrorButton from '../error-button'
import ErrorBoundry from '../error-boundry'

const ItemList = ({ items, col, onItemClick }) => {
  const rendItem = items.map(item => {
    return (
      <ErrorBoundry key={item.id} grid={`${col} col-sm-2`}>
        <div className={col}>
          <div className="product-item">
            <div className="pi-pic">
              <img src={`http://neb-chr.ru${item.image}`} alt="" />
              <div className="pi-links">
                <ErrorButton />
                <Link
                  to="#"
                  onClick={() => onItemClick(item.id)}
                  className="add-card"
                >
                  <i className="flaticon-bag" />
                  <span> Читать</span>
                </Link>
                <a href="#" className="wishlist-btn">
                  <i
                    className="flaticon-favorite"
                    title="Добавить в избранное"
                  />
                </a>
              </div>
            </div>
            <div className="pi-text">
              <Link to={`/books/view/${item.id}`}>
                {item.title.split(':')[0]}
              </Link>
            </div>
          </div>
        </div>
      </ErrorBoundry>
    )
  })

  return rendItem
}

export default ItemList
