import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

import MovieBrick from './MovieBrick'
import Pagination from './Pagination'
import MovieModal from './MovieModal'

const url = config.moviesUrl

class MovieTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      page: 1,
      modalId: null
    }
    this.changePage = this.changePage.bind(this)
    this.openModal = this.openModal.bind(this)
  }
  changePage(page) {
    this.setState({page})
    // TODO: Add isLoading
    axios.get(url + '&page=' + page)
      .then(movies => {
        this.setState({ movies: movies.data.results })
      })
  }
  openModal(modalId) {
    this.setState({modalId})
  }
  componentDidMount() {
    this.changePage(this.state.page)
  }
  // TODO do like here
  getMovieForModal() {
    return this.state.movies.find(movie => movie.id === this.state.modalId)
  }
  render() {
    return (
      <div className="movie-table">
        <div className="movie-table__grid">
          {
            this.state.movies.length
              ? this.state.movies.map(movie => <MovieBrick openModal={this.openModal} movie={movie} key={movie.id}/>)
              : <div className="movie-table__not-found">Movies not found</div>
          }
        </div>
        <Pagination changePage={this.changePage} page={this.state.page}/>
        {
          this.state.modalId &&
          // TODO do like here
          <MovieModal openModal={this.openModal} movie={this.getMovieForModal()}/>
        }
      </div>
    )
  }
}

export default MovieTable
