import React from 'react'

const PageRow = ({ left, right }) => {
  return (
    <section className="category-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 order-2 order-lg-1">{left}</div>

          <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="row">{right}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageRow
