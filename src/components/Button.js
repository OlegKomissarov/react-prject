import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { text, white } = this.props
    return (
      <div className={`button ${white && 'button--white'}`}>
        {text}
      </div>
    )
  }
}

export default Button
