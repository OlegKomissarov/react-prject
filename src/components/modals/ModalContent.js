import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import api from '../../api/localStorage'

import Button from '../elements/Button'
import { setFavouriteMovie } from '../../actions/favouritesActions'
import { getPicture } from '../../utils'

class ModalContent extends Component {
  // TODO: use Redux.
  // TODO: set "overflow: hidden" to .layout when modal is active via Redux.
  changeFavourite = () => {
    // console.log(this.props.setFavouriteMovieAction)
    // this.props.setFavouriteMovieAction(this.props.movie)
    if (this.props.movie.favourite) {
      api.removeFavourite(this.props.movie.id)
    } else {
      api.setFavourite(this.props.movie)
    }
  }
  getChangeFavouriteButtonText() {
    if (window.innerWidth < 1024) {
      if (this.props.movie.favourite) {
        return <img src="star.png" alt="Not found" className="modal-content__star-icon"/>
      }
      return <img src="star-active.png" alt="Not found" className="modal-content__star-icon"/>
    }
    return this.props.movie.favourite ? 'Unfavourite' : 'Add to favourite'
  }
  render() {
    const { movie } = this.props
    return (
      <div className="movie-modal__container">
        <img className="movie-modal__image"
             src={getPicture(movie)}
             alt="Not found pic"
             title={movie.original_title}
        />
        <div className="modal-content">
          <Button onClick={this.changeFavourite}
                  text={this.getChangeFavouriteButtonText()}
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
      </div>
    )
  }
}

const mapStateToProps = store => ({
  favouriteMovie: store.favouriteMovie
})

const mapDispatchToProps = dispatch => ({
  setFavouriteMovieAction: movie => dispatch(setFavouriteMovie(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent)
