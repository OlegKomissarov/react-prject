export function getPicture(movie) {
  if (movie.poster_path && movie.poster_path.length) {
    return 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
  }
  if (movie.backdrop_path && movie.backdrop_path.length) {
    return 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path
  }
  return 'no-pic.png'
}