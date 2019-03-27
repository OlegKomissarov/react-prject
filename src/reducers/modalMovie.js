const initialState = {
  movie: null
}

export const modalMovieReducer = createReducer(initialState, {
  ['SET_MODAL_MOVIE']: (state, action) => {
    return {...state, movie: action.payload}
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
