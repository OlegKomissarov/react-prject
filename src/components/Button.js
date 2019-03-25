import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { text, white, className } = this.props
    return (
      <div onClick={this.props.onClick}
           className={`button ${white && 'button--white'} ${className}`}
      >
        {text}
      </div>
    )
  }
}

export default Button
