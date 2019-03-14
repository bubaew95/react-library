import React, { Component } from 'react'
import './error-page.css'
import ErrorIndicator from '../../components/error-indicator/error-indicator'
export default class ErrorPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <ErrorIndicator />
        </div>
      </div>
    )
  }
}
