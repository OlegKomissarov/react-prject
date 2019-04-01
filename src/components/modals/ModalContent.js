import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import api from '../../api/localStorage'
import { getPicture } from '../../utils'
import { setModalMovie } from '../../actions/modalMovieActions'

import Button from '../elements/Button'

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
    if (window.innerWidth < 1024) {
      return <img src="star-active.png" alt="Not found" className="modal-content__star-icon"/>
    }
    return 'Unfavourite'
  }
  static getAddFavouriteButtonContent() {
    if (window.innerWidth < 1024) {
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
      <div className="movie-modal__container">
        <img className="movie-modal__image"
             src={getPicture(movie)}
             alt="Not found pic"
             title={movie.get('original_title')}
        />
        <div className="modal-content">
          <Button onClick={this.changeFavourite}
                  text={
                    this.props.movie.get('favourite')
                      ? ModalContent.getUnfavouriteButtonContent()
                      : ModalContent.getAddFavouriteButtonContent()
                  }
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
                  {' ' + movie.get('vote_average')}
                </div>
              </div>
              <div className="modal-content__vertical-divider"/>
              <div className="modal-content__data-elem">
                <div className="modal-content__data-elem-label">
                  Language:
                </div>
                <div className="modal-content__data-elem-text">
                  {' ' + movie.get('original_language')}
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
              {movie.get('overview')}
            </div>
            <div className="modal-content__divider"/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => store.modalMovie

const mapDispatchToProps = dispatch => ({
  setModalMovieAction: bindActionCreators(setModalMovie, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent)
