import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './left-slidebar.css'
import MenuList from '../nb-component/category-items'
export default class LeftSliderbar extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuList />

        <div className="filter-widget mb-0">
          <h2 className="fw-title">refine by</h2>
          <div className="price-range-wrap">
            <h4>Price</h4>
            <div
              className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              data-min="10"
              data-max="270"
            >
              <div
                className="ui-slider-range ui-corner-all ui-widget-header"
                style={{ left: '0%', width: '100%' }}
              />
              <span
                tabIndex="0"
                className="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: '0%' }}
              />
              <span
                tabIndex="0"
                className="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: '100%' }}
              />
            </div>
            <div className="range-slider">
              <div className="price-input">
                <input type="text" id="minamount" />
                <input type="text" id="maxamount" />
              </div>
            </div>
          </div>
        </div>
        <div className="filter-widget mb-0">
          <h2 className="fw-title">color by</h2>
          <div className="fw-color-choose">
            <div className="cs-item">
              <input type="radio" name="cs" id="gray-color" />
              <label className="cs-gray" htmlFor="gray-color">
                <span>(3)</span>
              </label>
            </div>
            <div className="cs-item">
              <input type="radio" name="cs" id="orange-color" />
              <label className="cs-orange" htmlFor="orange-color">
                <span>(25)</span>
              </label>
            </div>
            <div className="cs-item">
              <input type="radio" name="cs" id="yollow-color" />
              <label className="cs-yollow" htmlFor="yollow-color">
                <span>(112)</span>
              </label>
            </div>
            <div className="cs-item">
              <input type="radio" name="cs" id="green-color" />
              <label className="cs-green" htmlFor="green-color">
                <span>(75)</span>
              </label>
            </div>
            <div className="cs-item">
              <input type="radio" name="cs" id="purple-color" />
              <label className="cs-purple" htmlFor="purple-color">
                <span>(9)</span>
              </label>
            </div>
            <div className="cs-item">
              <input type="radio" name="cs" id="blue-color" defaultChecked="" />
              <label className="cs-blue" htmlFor="blue-color">
                <span>(29)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="filter-widget mb-0">
          <h2 className="fw-title">Size</h2>
          <div className="fw-size-choose">
            <div className="sc-item">
              <input type="radio" name="sc" id="xs-size" />
              <label htmlFor="xs-size">XS</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="s-size" />
              <label htmlFor="s-size">S</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="m-size" defaultChecked="" />
              <label htmlFor="m-size">M</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="l-size" />
              <label htmlFor="l-size">L</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="xl-size" />
              <label htmlFor="xl-size">XL</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="xxl-size" />
              <label htmlFor="xxl-size">XXL</label>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h2 className="fw-title">Brand</h2>
          <ul className="category-menu">
            <li>
              <Link to="#">
                Abercrombie & Fitch <span>(2)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Asos<span>(56)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Bershka<span>(36)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Missguided<span>(27)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Zara<span>(19)</span>
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
