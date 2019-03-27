import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import api from '../../api/localStorage'

import Button from '../elements/Button'
import { setFavouriteMovie } from '../../actions/favouritesActions'
import { getPicture } from '../../utils'

class ModalContent extends Component {
  // TODO: use Redux.
  // TODO: set "overflow: hidden" to .layout to prevent scroll of back content when modal is active via Redux.
  // TODO: Close modal by clicking on logo if opened via Redux.
  changeFavourite = () => {

    // console.log(this.props.setFavouriteMovieAction)
    // this.props.setFavouriteMovieAction(this.props.movie)

    if (this.psrops.movie.favourite) {
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
  getMovieTitleWithYear() {
    return `${this.props.movie.original_title} (${moment(this.props.movie.release_date).format('YYYY')})`
  }
  getReleaseDate() {
    return moment(this.props.movie.release_date).format('MMMM DD, YYYY')
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
            <div className="modal-content__title modal-content__title--desktop">
              {this.getMovieTitleWithYear()}
            </div>
            <div className="modal-content__data">
              <div className="modal-content__data-elem">
                <div className="modal-content__data-elem-label">
                  Score:
                </div>
                <div className="modal-content__data-elem-text">
                  {' ' + movie.vote_average}
                </div>
              </div>
              <div className="modal-content__vertical-divider"/>
              <div className="modal-content__data-elem">
                <div className="modal-content__data-elem-label">
                  Language:
                </div>
                <div className="modal-content__data-elem-text">
                  {' ' + movie.original_language}
                </div>
              </div>
              <div className="modal-content__vertical-divider"/>
              <div className="modal-content__data-elem">
                <div className="modal-content__data-elem-label">
                  Release Date:
                </div>
                <div className="modal-content__data-elem-text">
                  {' ' + this.getReleaseDate()}
                </div>
              </div>
            </div>
            <div className="modal-content__title modal-content__title--mobile">
              {this.getMovieTitleWithYear()}
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
