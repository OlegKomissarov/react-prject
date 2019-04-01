import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List, fromJS } from 'immutable'
import { setModalMovie } from '../../actions/modalMovieActions'
import { setModalId } from '../../actions/modalMovieActions'
import config from '../../config'

import MovieBrick from './MovieBrick'
import Pagination from './Pagination'
import MovieModal from '../modals/MovieModal'
import api from '../../api/localStorage'

class MovieTable extends Component {
  state = {
    movies: List(),
    page: 1,
    modalId: null,
    isLoading: false
  }
  componentDidMount() {
    this.changePage(this.state.page)
  }
  changePage = page => {
    this.setState({ page, isLoading: true })
    axios.get(config.moviesUrl + '&page=' + page)
      .then(movies => {
        this.setState({ movies: fromJS(movies.data.results), isLoading: false })
      })
  }
  openModal = modalId => {
    this.setState({ modalId })
    this.props.setModalIdAction(modalId)
    if (modalId) {
      this.getMovieForModal(modalId)
    }
  }
  getMovieForModal(modalId) {
    let nextMovieId = null
    let movie = this.state.movies.find((movie, index) => {
      if (movie.get('id') === modalId) {
        if (this.state.movies.get(index + 1)) {
          nextMovieId = this.state.movies.get(index + 1).get('id')
        } else {
          nextMovieId = this.state.movies.get(0).get('id')
        }
        return true
      }
      return false
    })
    const movieWithNextMovieId = movie.set('nextMovieId', nextMovieId)
    const favourite = !!api.getFavourite(movie.get('id'))
    const movieWithFavourite = movieWithNextMovieId.set('favourite', favourite)
    this.props.setModalMovieAction(movieWithFavourite)
  }
  getMovieBricks() {
    return this.state.movies.size
      ? this.state.movies.map(movie => <MovieBrick openModal={this.openModal} movie={movie} key={movie.get('id')}/>)
      : <div className="content-not-found">Movies not found</div>
  }
  render() {
    return (
      <div className="movie-table">
        {
          this.state.isLoading ? 'Loading...' :
          <div>
            <div className="movie-table__grid">
              {this.getMovieBricks()}
            </div>
            <Pagination changePage={this.changePage} page={this.state.page}/>
          </div>
        }
        {
          this.props.modalId &&
          <MovieModal openModal={this.openModal}/>
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  modalId: store.modalId
})

const mapDispatchToProps = dispatch => ({
  setModalMovieAction: bindActionCreators(setModalMovie, dispatch),
  setModalIdAction: bindActionCreators(setModalId, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable)
