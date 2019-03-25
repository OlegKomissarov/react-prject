import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

import MovieBrick from './MovieBrick'
import Pagination from './Pagination'
import MovieModal from '../modals/MovieModal'
import api from "../../api/localStorage"

class MovieTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      page: 1,
      modalId: null
    }
  }
  componentDidMount() {
    this.changePage(this.state.page)
  }
  changePage = page => {
    this.setState({page})
    // TODO: Add isLoading
    axios.get(config.moviesUrl + '&page=' + page)
      .then(movies => {
        this.setState({ movies: movies.data.results })
      })
  }
  openModal = modalId => {
    this.setState({modalId})
  }
  getMovieForModal() {
    let nextMovieId = null
    let movie = this.state.movies.find((movie, index) => {
      if (movie.id === this.state.modalId) {
        if (this.state.movies[index + 1]) {
          nextMovieId = this.state.movies[index + 1].id
        } else {
          nextMovieId = this.state.movies[0].id
        }
        return true
      }
      return false
    })
    movie.nextMovieId = nextMovieId
    movie.favourite = !!api.getFavourite(movie.id)
    return movie
  }
  getMovieBricks() {
    return this.state.movies.length
      ? this.state.movies.map(movie => <MovieBrick openModal={this.openModal} movie={movie} key={movie.id}/>)
      : <div className="movie-table__not-found">Movies not found</div>
  }
  render() {
    return (
      <div className="movie-table">
        <div className="movie-table__grid">
          {this.getMovieBricks()}
        </div>
        <Pagination changePage={this.changePage} page={this.state.page}/>
        {
          this.state.modalId &&
          <MovieModal openModal={this.openModal} movie={this.getMovieForModal()}/>
        }
      </div>
    )
  }
}

export default MovieTable
