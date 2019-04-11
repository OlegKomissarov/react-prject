import { combineReducers } from 'redux'
import {
  modalMovieReducer,
  modalIdReducer,
  moviesIsLoadingReducer,
  moviesReducer
  // reducer
} from './movieReducers'

// Сделать здесь чтобы можно было написать просто {reducer}. Посмотреть как сделано на проекте
export const rootReducer = combineReducers({
  modalMovie: modalMovieReducer,
  modalId: modalIdReducer,
  moviesIsLoading: moviesIsLoadingReducer,
  movies: moviesReducer
  // modalMovie: reducer,
  // modalId: reducer,
  // moviesIsLoading: reducer,
  // movies: reducer
})
