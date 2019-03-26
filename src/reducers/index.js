import { combineReducers } from 'redux'
import { favouriteMovieReducer } from './favouriteMovie'
import { userReducer } from './user'

export const rootReducer = combineReducers({
  favouriteMovie: favouriteMovieReducer,
  user: userReducer
})
