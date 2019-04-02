import { combineReducers } from 'redux'
import {
  modalMovieReducer,
  modalIdReducer,
  moviesIsLoadingReducer,
  moviesReducer
} from './modalMovie'

export const rootReducer = combineReducers({
  modalMovie: modalMovieReducer,
  modalId: modalIdReducer,
  moviesIsLoading: moviesIsLoadingReducer,
  movies: moviesReducer
})
