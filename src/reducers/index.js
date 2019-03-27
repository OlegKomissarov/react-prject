import { combineReducers } from 'redux'
import { modalMovieReducer } from './modalMovie'

export const rootReducer = combineReducers({
  modalMovie: modalMovieReducer
})
