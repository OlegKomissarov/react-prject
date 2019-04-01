import { List, fromJS } from 'immutable'

function indexFavourites() {
  let favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies'))
  return fromJS(favouriteMovies ? favouriteMovies : List())
}

function getFavourite(id) {
  return indexFavourites().find(movie => movie.get('id') === id)
}

function setFavourite(movie) {
  localStorage.setItem('favouriteMovies', JSON.stringify(indexFavourites().push(movie)))
}

function removeFavourite(id) {
  localStorage.setItem('favouriteMovies', JSON.stringify(indexFavourites().filter(movie => movie.get('id') !== id)))
}

export default {
  indexFavourites,
  getFavourite,
  setFavourite,
  removeFavourite
}