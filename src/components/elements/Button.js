import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  text: PropTypes.string,
  white: PropTypes.bool,
  className: PropTypes.string
}

export default Button
