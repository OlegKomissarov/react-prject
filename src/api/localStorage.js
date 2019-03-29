function indexFavourites() {
  let favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies'))
  return favouriteMovies ? favouriteMovies : []
}

function getFavourite(id) {
  let favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies'))
  if (favouriteMovies && favouriteMovies instanceof Array) {
    return favouriteMovies.find(movie => movie.id === id)
  }
}

function setFavourite(movie) {
  let favouriteMovies = indexFavourites()
  if (!favouriteMovies || !(favouriteMovies instanceof Array)) {
    favouriteMovies = []
  }
  favouriteMovies.push(movie)
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies))
}

function removeFavourite(id) {
  let favouriteMovies = indexFavourites()
  favouriteMovies = favouriteMovies.filter(movie => movie.id !== id)
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies))
}

export default {
  indexFavourites,
  getFavourite,
  setFavourite,
  removeFavourite
}