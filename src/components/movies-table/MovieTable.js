import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalId, setModalMovie, setMoviesIsLoading, fetchMoviesFromApi } from '../../actions/modalMovieActions'

import MovieBrick from './MovieBrick'
import Pagination from './Pagination'
import MovieModal from '../modals/MovieModal'
import api from '../../api/localStorage'

class MovieTable extends Component {
  state = {
    page: 1
  }
  componentDidMount() {
    this.changePage(this.state.page)
  }
  changePage = page => {
    this.setState({ page })
    this.props.setMoviesIsLoadingAction(true)
    this.props.fetchMoviesFromApiAction(page)
  }
  openModal = modalId => {
    this.props.setModalIdAction(modalId)
    if (modalId) {
      this.getMovieForModal(modalId)
    }
  }
  getMovieForModal(modalId) {
    let nextMovieId = null
    let movie = this.props.movies.find((movie, index) => {
      if (movie.get('id') === modalId) {
        if (this.props.movies.get(index + 1)) {
          nextMovieId = this.props.movies.get(index + 1).get('id')
        } else {
          nextMovieId = this.props.movies.get(0).get('id')
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
    return this.props.movies.size
      ? this.props.movies.map(movie => <MovieBrick openModal={this.openModal} movie={movie} key={movie.get('id')}/>)
      : <div className="content-not-found">Movies not found</div>
  }
  render() {
    const { isLoading, modalId } = this.props
    return (
      <div className="movies-table">
        {
          isLoading ? 'Loading...' :
          <div>
            <div className="movies-table__grid">
              {this.getMovieBricks()}
            </div>
            <Pagination changePage={this.changePage} page={this.state.page}/>
          </div>
        }
        {
          modalId > 0 &&
          <MovieModal openModal={this.openModal}/>
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  modalId: store.modalId,
  isLoading: store.moviesIsLoading,
  movies: store.movies
})

// const mapStateToProps = store => {
//   console.log(store)
//   return {
//     modalId: store.modalId,
//     isLoading: store.moviesIsLoading,
//     movies: store.movies ? store.movies : []
//   }
// }

MovieTable.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.object.isRequired,
  modalId: PropTypes.number,
  setModalMovieAction: PropTypes.func.isRequired,
  setMoviesIsLoadingAction: PropTypes.func.isRequired,
  fetchMoviesFromApiAction: PropTypes.func.isRequired,
  setModalIdAction: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setModalMovieAction: bindActionCreators(setModalMovie, dispatch),
  setMoviesIsLoadingAction: bindActionCreators(setMoviesIsLoading, dispatch),
  fetchMoviesFromApiAction: bindActionCreators(fetchMoviesFromApi, dispatch),
  setModalIdAction: bindActionCreators(setModalId, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable)
