import axios from 'axios/index'
import { fromJS } from 'immutable'
import config from '../config'

export const SET_MODAL_MOVIE = 'SET_MODAL_MOVIE'
export const SET_MODAL_ID = 'SET_MODAL_ID'
export const SET_MOVIES_IS_LOADING = 'SET_MOVIES_IS_LOADING'
export const SET_MOVIES = 'SET_MOVIES'

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

export function setMoviesIsLoading(moviesIsLoading) {
  return {
    type: SET_MOVIES_IS_LOADING,
    payload: moviesIsLoading
  }
}

export function setMovies(id) {
  return {
    type: SET_MOVIES,
    payload: id
  }
}

export function fetchMoviesFromApi(page) {
  return dispatch => {
    axios.get(config.moviesUrl + '&page=' + page)
      .then(movies => {
        dispatch(setMoviesIsLoading(false))
        dispatch(setMovies(fromJS(movies.data.results)))
      })
      .catch(error => {
        console.log('Error with fetching movies', error)
      })
  }
}
