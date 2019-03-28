import React, { Component } from 'react'

import Logo from './Logo'
import Button from './Button'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { setModalId } from '../../actions/modalMovieActions'
import { connect } from 'react-redux'

class AppHeader extends Component {
  closeModal = () => {
    if (this.props.modalId) {
      this.props.setModalMovieAction(null)
    }
  }
  render() {
    return (
      <div onClick={this.closeModal} className="app-header">
        <Logo/>
        <Link to="/favourites">
          <Button text="My account" white/>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  modalId: store.modalId
})

const mapDispatchToProps = dispatch => ({
  setModalMovieAction: bindActionCreators(setModalId, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
