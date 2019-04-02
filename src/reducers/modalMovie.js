import {
  SET_MODAL_MOVIE,
  SET_MOVIES,
  SET_MOVIES_IS_LOADING,
  SET_MODAL_ID
} from '../actions/modalMovieActions'

const initialMovieState = { movie: null }
const initialIdState = null
const initialMoviesState = []
const initialIsLoading = false

export const modalMovieReducer = createReducer(initialMovieState, {
  [SET_MODAL_MOVIE]: (state, action) => {
    return {...state, movie: action.payload}
  }
})

export const modalIdReducer = createReducer(initialIdState, {
  [SET_MODAL_ID]: (state, action) => {
    return action.payload
  }
})

export const moviesIsLoadingReducer = createReducer(initialIsLoading, {
  [SET_MOVIES_IS_LOADING]: (state, action) => {
    return action.payload
  }
})

export const moviesReducer = createReducer(initialMoviesState, {
  [SET_MOVIES]: (state, action) => {
    return action.payload
  }
})

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
