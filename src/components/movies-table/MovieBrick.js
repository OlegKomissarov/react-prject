import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getPicture } from '../../utils'

class MovieBrick extends Component {
  openModal = () => {
    this.props.openModal(this.props.movie.get('id'))
  }
  render() {
    const { movie } = this.props
    return (
      <div className="movie-brick">
        <img onClick={this.openModal}
             className="movie-brick__image"
             src={getPicture(movie)}
             alt="Not found pic"
             title={movie.get('original_title')}
        />
      </div>
    )
  }
}

MovieBrick.propTypes = {
  movie: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
}

export default MovieBrick
