import axios from 'axios/index'
import { fromJS } from 'immutable'
import config from '../config'

export const SET_MODAL_MOVIE = 'SET_MODAL_MOVIE'
export const SET_MODAL_ID = 'SET_MODAL_ID'
export const SET_MOVIES_IS_LOADING = 'SET_MOVIES_IS_LOADING'
export const SET_MOVIES = 'SET_MOVIES'

export const setModalMovie = movie => ({
    type: SET_MODAL_MOVIE,
    payload: movie
})

export const setModalId = id => ({
    type: SET_MODAL_ID,
    payload: id
})

export const setMoviesIsLoading = moviesIsLoading => ({
    type: SET_MOVIES_IS_LOADING,
    payload: moviesIsLoading
})

export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
})

export const fetchMoviesFromApi = page => (dispatch => {
  axios.get(config.moviesUrl + '&page=' + page)
    .then(movies => {
      dispatch(setMoviesIsLoading(false))
      dispatch(setMovies(fromJS(movies.data.results)))
    })
    .catch(error => {
      console.log('Error with fetching movies', error)
    })
})
