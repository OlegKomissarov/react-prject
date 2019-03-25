export function getPicture(movie) {
  const imageLink = 'https://image.tmdb.org/t/p/w500/'
  const noImagePicture = 'no-pic.png'
  if (movie.poster_path && movie.poster_path.length) {
    return imageLink + movie.poster_path
  }
  if (movie.backdrop_path && movie.backdrop_path.length) {
    return imageLink + movie.backdrop_path
  }
  return noImagePicture
}
