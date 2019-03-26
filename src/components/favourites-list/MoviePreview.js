import React, { Component } from 'react'
import { getPicture } from '../../utils'
import Button from '../elements/Button'
import api from "../../api/localStorage"

class MoviePreview extends Component {
  // TODO: Use Redux to get movie & update it on unfavourite event reactive
  removeFromFavourite = () => {
    api.removeFavourite(this.props.movie.id)
  }
  render() {
    const { movie } = this.props
    return (
      <div className="movie-preview">
        <img src={getPicture(movie)}
             alt="Not found"
             className="movie-preview__image"
        />
        <div className="movie-preview__content">
          <div className="movie-preview__header">
            <div className="movie-preview__title">
              {movie.original_title}
            </div>
            <div className="movie-preview__button-container">
              <Button onClick={this.removeFromFavourite}
                      text="Unfavourite"
                      white
                      className="movie-preview__button"
              />
            </div>
          </div>
          <div className="movie-preview__description">
            {movie.overview}
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePreview
