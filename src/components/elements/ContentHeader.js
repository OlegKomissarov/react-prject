import React, { Component } from 'react'

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

export default ContentHeader
