import React, { Component } from 'react'

export default class BannerSection extends Component {
  render() {
    return (
      <section className="banner-section">
        <div className="container">
          <div className="banner set-bg" data-setbg="/img/banner-bg.jpg">
            <div className="tag-new">NEW</div>
            <span>New Arrivals</span>
            <h2>STRIPED SHIRTS</h2>
            <a href="#" className="site-btn">
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
    )
  }
}
