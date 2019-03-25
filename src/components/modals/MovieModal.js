import React, { Component } from 'react'

import { getPicture } from '../../utils'

import ModalButtons from './ModalButtons'
import ModalContent from './ModalContent'

class MovieModal extends Component {
  componentDidMount() {
    document.onkeydown = event => {
      event = event || window.event
      if (event.key === 'Escape' || event.code === 'Escape') {
        this.openModal(null)
      }
    }
  }
  openModal = value => {
    this.props.openModal(value)
  }
  componentWillUnmount() {
    document.onkeydown = null
  }
  render() {
    const { movie } = this.props
    return (
      <div className="movie-modal">
        <ModalButtons openModal={this.openModal} movie={movie}/>
        <div className="movie-modal__container">
          <img className="movie-modal__image"
               src={getPicture(movie)}
               alt="Not found pic"
               title={movie.original_title}
          />
          <ModalContent movie={movie} className="movie-modal__content"/>
        </div>
      </div>
    )
  }
}

export default MovieModal
