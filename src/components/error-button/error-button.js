import React, { Component } from 'react'

export default class ErrorButton extends Component {

    state = {
        hasError: false
    }

    click = () => {
        this.setState({hasError: true})
    }

  render() {

    if(this.state.hasError) {
        this.foo.bar = 0
    }

    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.click()}>
            Throw Error
        </button>
      </div>
    )
  }
}
