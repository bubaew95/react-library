import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/error-indicator'

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      const { grid } = this.props
      return <ErrorIndicator grid={grid} />
    }
    return this.props.children
  }
}
