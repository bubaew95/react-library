import React, { Component } from 'react'
import './header-section.css'
import HeaderNavigation from '../header-navigation'
import Autorization from '../header-autorization'
import HeaderSearch from '../header-search'

export default class HeaderSection extends Component {
  render() {
    return (
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                <a href="/" className="site-logo">
                  <img src="/img/logo.jpg" alt="" />
                </a>
              </div>
              
              <HeaderSearch />
              <Autorization />

            </div>
          </div>
        </div>

        <HeaderNavigation />
      </header>
    )
  }
}
