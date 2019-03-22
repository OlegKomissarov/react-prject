import React, { Component } from 'react'

import { getPicture } from '../utils'

class MovieBrick extends Component {
  openModal() {
    this.props.openModal(null)
  }
  componentDidMount() {
    document.onkeydown = event => {
      event = event || window.event
      if (event.key === 'Escape' || event.code === 'Escape') {
        this.openModal()
      }
    }
  }
  componentWillUnmount() {
    document.onkeydown = null
  }
  render() {
    const { movie } = this.props
    return (
      <div className="movie-modal">
        <img className="movie-modal__image"
             src={getPicture(movie)}
             alt="Not found pic"
             title={movie.original_title}
        />
      </div>
    )
  }
}

export default MovieBrick
