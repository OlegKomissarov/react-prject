import React, { Component } from 'react'

import Button from '../elements/Button'

class ModalButtons extends Component {
  closeModal = () => {
    this.props.openModal(null)
  }
  nextModal = () => {
    this.props.openModal(this.props.movie.get('nextMovieId'))
  }
  render() {
    return (
      <div className="modal-buttons">
        <div>
          <Button onClick={this.closeModal} text="Back to List" white/>
        </div>
        <div>
          <Button onClick={this.nextModal} text="Next movie" white/>
        </div>
      </div>
    )
  }
}

export default ModalButtons
