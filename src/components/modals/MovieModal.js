import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        <ModalContent movie={movie}/>
      </div>
    )
  }
}

const mapStateToProps = store => store.modalMovie

export default connect(mapStateToProps)(MovieModal)
