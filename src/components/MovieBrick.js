import React, { Component } from 'react'

import { getPicture } from '../utils'

class MovieBrick extends Component {
  openModal = () => {
    this.props.openModal(this.props.movie.id)
  }
  render() {
    return (
      <div onClick={this.openModal} className="movie-brick">
        <img className="movie-brick__image"
             src={getPicture(this.props.movie)}
             alt="Not found pic"
             title={this.props.movie.original_title}
        />
      </div>
    )
  }
}

export default MovieBrick
