import { createReducer } from './storeUtils'
import {
  SET_MODAL_MOVIE,
  SET_MOVIES,
  SET_MOVIES_IS_LOADING,
  SET_MODAL_ID
} from '../actions/modalMovieActions'

const initialMovieState = null
const initialIdState = null
const initialMoviesState = []
const initialIsLoading = false

export const modalMovieReducer = createReducer(initialMovieState, {
  [SET_MODAL_MOVIE]: (state, action) => action.payload
})

export const modalIdReducer = createReducer(initialIdState, {
  [SET_MODAL_ID]: (state, action) => action.payload
})

export const moviesIsLoadingReducer = createReducer(initialIsLoading, {
  [SET_MOVIES_IS_LOADING]: (state, action) => action.payload
})

export const moviesReducer = createReducer(initialMoviesState, {
  [SET_MOVIES]: (state, action) => action.payload
})
