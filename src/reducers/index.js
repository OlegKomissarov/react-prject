import { combineReducers } from 'redux'
import { modalMovieReducer } from './modalMovie'
import { modalIdReducer } from './modalMovie'

export const rootReducer = combineReducers({
  modalMovie: modalMovieReducer,
  modalId: modalIdReducer
})
