import React, { Component } from 'react'
import { XMLHttpRequest } from 'xmlhttprequest'
import ReactDOM from 'react-dom'

import MovieBrick from './MovieBrick'
import Pagination from './Pagination'

// TODO: Use .env, make it dynamic
const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c'
// const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.API_KEY
console.log(process)
console.log(process.env)
console.log(process.env.API_KEY)
class MovieTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  render() {
    return (
      <div className="movie-table">
        <div className="movie-table__grid" id="movie-table">{this.moviesComponent}</div>
        <Pagination></Pagination>
      </div>
    )
  }
  componentDidMount() {
    httpGet(url)
      .then(movies => {
        this.setState({ movies: movies.results })
        this.moviesComponent = this.state.movies.map(movie => <MovieBrick movie={movie} key={movie.id}></MovieBrick>)
        console.log(this.state.movies)
        ReactDOM.render(
          this.moviesComponent,
          document.getElementById('movie-table')
        )
      })
  }
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        let error = new Error(xhr.statusText || xhr.responseText)
        error.status = xhr.status
        reject(error)
      }
    }
    xhr.onerror = error => {
      reject(new Error(error))
    }
    xhr.send()
  })
}

export default MovieTable
