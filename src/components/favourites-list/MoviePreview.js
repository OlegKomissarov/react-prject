import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPicture } from '../../utils'
import api from '../../api/localStorage'

import Button from '../elements/Button'

class MoviePreview extends Component {
  state = {
    showPreview: true
  }
  removeFromFavourite = () => {
    this.setState({ showPreview: false })
    api.removeFavourite(this.props.movie.get('id'))
  }
  returnFavourite = () => {
    this.setState({ showPreview: true })
    api.setFavourite(this.props.movie)
  }
  render() {
    const { movie } = this.props
    return (
      this.state.showPreview
        ? <div className="movie-preview">
          <img src={getPicture(movie)}
               alt="Not found"
               className="movie-preview__image"
          />
          <div className="movie-preview__content">
            <div className="movie-preview__header">
              <div className="movie-preview__title">
                {movie.get('original_title')}
              </div>
              <div className="movie-preview__button-container">
                <Button onClick={this.removeFromFavourite}
                        text="Unfavourite"
                />
              </div>
            </div>
            <div className="movie-preview__description">
              {movie.get('overview')}
            </div>
          </div>
        </div>
        : <div className="movie-preview">
          <Button onClick={this.returnFavourite}
                  text="Return"
                  white
                  className="movie-preview__button"
          />
        </div>
    )
  }
}

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MoviePreview
