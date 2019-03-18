import React from 'react'
import ItemList from '../item-list'

const LetestProductSection = ({ items }) => {
  return (
    <section className="related-product-section">
      <div className="container">
        <div className="section-title">
          <h2>Популярные книги</h2>
        </div>
        <div className="row">
          <ItemList
            items={items}
            col="col-lg-3 col-sm-3"
            onItemClick={() => {}}
          />
        </div>
      </div>
    </section>
  )
}

export default LetestProductSection
