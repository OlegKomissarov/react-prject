import React, { Component } from 'react'

class MovieBrick extends Component {
  render() {
    return (
      <div className="movie-brick">
        <img className="movie-brick__image"
             src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path}
             alt="Not found pic"
        />
      </div>
    );
  }
}

export default MovieBrick
