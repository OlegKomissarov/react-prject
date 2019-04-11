import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContentHeader extends Component {
  render() {
    const { text } = this.props
    return (
      <div className="content-header">
        {text}
      </div>
    )
  }
}

ContentHeader.propTypes = {
  text: PropTypes.string
}

export default ContentHeader
