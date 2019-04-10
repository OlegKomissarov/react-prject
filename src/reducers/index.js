import { combineReducers } from 'redux'
import {
  modalMovieReducer,
  modalIdReducer,
  moviesIsLoadingReducer,
  moviesReducer
} from './movieReducers'

export const rootReducer = combineReducers({
  modalMovie: modalMovieReducer,
  modalId: modalIdReducer,
  moviesIsLoading: moviesIsLoadingReducer,
  movies: moviesReducer
})
