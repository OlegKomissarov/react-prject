import React, { Component } from 'react'
import moment from 'moment'

import Button from './Button'

class ModalContent extends Component {
  addFavourite = () => {
    let favouriteMovies = ModalContent.getFavourites()
    if (!favouriteMovies || !(favouriteMovies instanceof Array)) {
      favouriteMovies = []
    }
    favouriteMovies.push(this.props.movie)
    localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies))
  }
  // TODO: Make like api util
  static getFavourites() {
    return JSON.parse(localStorage.getItem('favouriteMovies'))
  }
  render() {
    const { movie } = this.props
    return (
      <div className="modal-content">
        <Button onClick={this.addFavourite}
                text="Add to favourite"
                white
                className="modal-content__button"
        />
        <div className="modal-content__container">
          <div className="modal-content__title">
            {`${movie.original_title} (${moment(movie.release_date).format('YYYY')})`}
          </div>
          <div className="modal-content__data">
            <div className="modal-content__data-elem">
              Score: {movie.vote_average}
            </div>
            <div className="modal-content__vertical-divider"/>
            <div className="modal-content__data-elem">
              Language: {movie.original_language}
            </div>
            <div className="modal-content__vertical-divider"/>
            <div className="modal-content__data-elem">
              Release Date: {moment(movie.release_date).format('MMMM DD, YYYY')}
            </div>
          </div>
          <div className="modal-content__divider"/>
          <div className="modal-content__description">
            {movie.overview}
          </div>
          <div className="modal-content__divider"/>
        </div>
      </div>
    )
  }
}

export default ModalContent
