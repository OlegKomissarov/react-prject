export function getPicture(movie) {
  const imageLink = 'https://image.tmdb.org/t/p/w500/'
  const noImagePicture = 'no-pic.png'
  if (movie.get('poster_path') && movie.get('poster_path').length) {
    return imageLink + movie.get('poster_path')
  }
  if (movie.get('backdrop_path') && movie.get('backdrop_path').length) {
    return imageLink + movie.get('backdrop_path')
  }
  return noImagePicture
}
