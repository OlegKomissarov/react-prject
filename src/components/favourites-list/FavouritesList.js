import React, { Component } from 'react'
import api from '../../api/localStorage'
import MoviePreview from './MoviePreview'

class FavouritesList extends Component {
  state = {
    movies: []
  }
  // TODO: Add isLoading
  componentDidMount() {
    let movies = api.indexFavourites()
    this.setState({ movies })
  }
  getMoviesList() {
    return this.state.movies.length
      ? this.state.movies.map(movie => <MoviePreview movie={movie} key={movie.id}/>)
      : <div className="content-not-found">No favourite movies</div>
  }
  render() {
    return (
      <div className="favourites-list">
        {this.getMoviesList()}
      </div>
    )
  }
}

export default FavouritesList
