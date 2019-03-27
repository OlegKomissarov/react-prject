import React, { Component } from 'react'
import api from '../../api/localStorage'
import MoviePreview from './MoviePreview'

class FavouritesList extends Component {
  state = {
    movies: [],
    isLoading: false
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    let movies = api.indexFavourites()
    this.setState({ movies, isLoading: false })
  }
  getMoviesList() {
    return this.state.movies.length
      ? this.state.movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)
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
