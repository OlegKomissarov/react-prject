export const SET_MODAL_MOVIE = 'SET_MODAL_MOVIE'
export const SET_MODAL_ID = 'SET_MODAL_ID'

export function setModalMovie(movie) {
  return {
    type: SET_MODAL_MOVIE,
    payload: movie
  }
}

export function setModalId(id) {
  return {
    type: SET_MODAL_ID,
    payload: id
  }
}
