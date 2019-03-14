import React, { Component } from 'react'

export default class ProductFilterSection extends Component {
  render() {
    return (
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>BROWSE TOP SELLING PRODUCTS</h2>
          </div>
          <div className="row">{this.props.children}</div>
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
          </div>
        </div>
      </section>
    )
  }
}
