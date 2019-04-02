import React, { Component } from 'react'
import { List } from 'immutable'
import api from '../../api/localStorage'

import MoviePreview from './MoviePreview'

class FavouritesList extends Component {
  state = {
    movies: List(),
    isLoading: true
  }
  componentDidMount() {
    let movies = api.indexFavourites()
    this.setState({ movies, isLoading: false })
  }
  getMoviesList() {
    return this.state.movies.size
      ? this.state.movies.map(movie => <MoviePreview movie={movie} key={movie.get('id')}/>).reverse()
      : <div>No favourite movies</div>
  }
  render() {
    return (
      <div className="favourites-list">
        {this.state.isLoading ? 'Loading...' : this.getMoviesList()}
      </div>
    )
  }
}

export default FavouritesList
