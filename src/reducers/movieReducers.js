import { List, Map } from 'immutable'
import { createReducer } from './storeUtils'
import {
  SET_MODAL_MOVIE,
  SET_MOVIES,
  SET_MOVIES_IS_LOADING,
  SET_MODAL_ID
} from '../actions/modalMovieActions'

const initialModalId = null
const initialMoviesIsLoading = false
const initialMovies = List()
const initialModalMovie = Map()

const getData = (state, action) => action.payload

// export const reducer = createReducer(initialState, {
//   [SET_MODAL_MOVIE]: getData,
//   [SET_MODAL_ID]: getData,
//   [SET_MOVIES_IS_LOADING]: getData,
//   [SET_MOVIES]: getData
// })

export const modalIdReducer = createReducer(initialModalId, {
  [SET_MODAL_ID]: getData
})

export const moviesIsLoadingReducer = createReducer(initialMoviesIsLoading, {
  [SET_MOVIES_IS_LOADING]: getData
})

export const moviesReducer = createReducer(initialMovies, {
  [SET_MOVIES]: getData
})

export const modalMovieReducer = createReducer(initialModalMovie, {
  [SET_MODAL_MOVIE]: getData
})
