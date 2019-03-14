import React from 'react'
import { Link } from 'react-router-dom'
import './item-list.css'

const ItemList = ({ items, col, onItemClick }) => {
  const rendItem = items.map(item => {
    return (
      <div key={item.id} onClick={() => onItemClick(item.id)} className={col}>
        <div className="product-item">
          <div className="pi-pic">
            <img
              src={`http://neb-chr.ru${item.image}`}
              alt=""
              width="264"
              height="370"
            />
            <div className="pi-links">
              <Link to="#" className="add-card">
                <i className="flaticon-bag" />
                <span> Читать</span>
              </Link>
              <a href="#" className="wishlist-btn">
                <i className="flaticon-favorite" title="Добавить в избранное" />
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
    )
  })

  return rendItem
}

export default ItemList
