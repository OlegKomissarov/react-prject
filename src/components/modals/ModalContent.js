import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import api from '../../api/localStorage'
import { getPicture } from '../../utils'
import { setModalMovie } from '../../actions/modalMovieActions'

import Button from '../elements/Button'
import PropTypes from 'prop-types'

const SMALL_SCREEN_WIDTH = 1024

class ModalContent extends Component {
  changeFavourite = () => {
    if (this.props.movie.get('favourite')) {
      api.removeFavourite(this.props.movie.get('id'))
    } else {
      api.setFavourite(this.props.movie)
    }
    const movieWithChangedFavourite = this.props.movie.set('favourite', !this.props.movie.get('favourite'))
    this.props.setModalMovieAction(movieWithChangedFavourite)
  }
  static getUnfavouriteButtonContent() {
    if (window.innerWidth <= SMALL_SCREEN_WIDTH) {
      return <img src="star-active.png" alt="Not found" className="modal-content__star-icon"/>
    }
    return 'Unfavourite'
  }
  static getAddFavouriteButtonContent() {
    if (window.innerWidth <= SMALL_SCREEN_WIDTH) {
      return <img src="star.png" alt="Not found" className="modal-content__star-icon"/>
    }
    return 'Add to favourite'
  }
  getMovieTitleWithYear() {
    return `${this.props.movie.get('original_title')} (${moment(this.props.movie.get('release_date')).format('YYYY')})`
  }
  getReleaseDate() {
    return moment(this.props.movie.get('release_date')).format('MMMM DD, YYYY')
  }
  render() {
    const { movie } = this.props
    return (
      <div className="modal-content">
        <div className="modal-content__top-block">
          <img className="modal-content__image"
               src={getPicture(movie)}
               alt="Not found pic"
               title={movie.get('original_title')}
          />
          <div className="modal-content__top-right-block">
            <Button onClick={this.changeFavourite}
                    text={
                      movie.get('favourite')
                        ? ModalContent.getUnfavouriteButtonContent()
                        : ModalContent.getAddFavouriteButtonContent()
                    }
                    white
                    className="modal-content__button"
            />
            <div className="modal-content__title modal-content__title--desktop">
              {this.getMovieTitleWithYear()}
            </div>
            <div className="modal-content__movie-info">
              <div className="modal-content__movie-info-elem">
                <div className="modal-content__movie-info-elem-label">
                  Score:
                </div>
                <div className="modal-content__movie-info-elem-text">
                  {' ' + movie.get('vote_average')}
                </div>
              </div>
              <div className="modal-content__vertical-divider"/>
              <div className="modal-content__movie-info-elem">
                <div className="modal-content__movie-info-elem-label">
                  Language:
                </div>
                <div className="modal-content__movie-info-elem-text">
                  {' ' + movie.get('original_language')}
                </div>
              </div>
              <div className="modal-content__vertical-divider"/>
              <div className="modal-content__movie-info-elem">
                <div className="modal-content__movie-info-elem-label">
                  Release Date:
                </div>
                <div className="modal-content__movie-info-elem-text">
                  {' ' + this.getReleaseDate()}
                </div>
              </div>
            </div>
            <div className="modal-content__divider modal-content__divider--desktop"/>
            <div className="modal-content__description modal-content__description--desktop">
              {movie.get('overview')}
            </div>
            <div className="modal-content__divider modal-content__divider--desktop"/>
          </div>
        </div>
        <div className="modal-content__bottom-block">
          <div className="modal-content__title">
            {this.getMovieTitleWithYear()}
          </div>
          <div className="modal-content__divider"/>
          <div className="modal-content__description">
            {movie.get('overview')}
          </div>
          <div className="modal-content__divider"/>
        </div>
      </div>
    )
  }
}

ModalContent.propTypes = {
  movie: PropTypes.object.isRequired,
  setModalMovieAction: PropTypes.func.isRequired
}

const mapStateToProps = store => ({
  movie: store.modalMovie
})

const mapDispatchToProps = dispatch => ({
  setModalMovieAction: bindActionCreators(setModalMovie, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent)
