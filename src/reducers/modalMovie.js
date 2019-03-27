const initialMovieState = {
  movie: null
}

const initialIdState = {
  modalId: null
}

export const modalMovieReducer = createReducer(initialMovieState, {
  SET_MODAL_MOVIE: (state, action) => {
    return {...state, movie: action.payload}
  }
})

export const modalIdReducer = createReducer(initialIdState, {
  SET_MODAL_ID: (state, action) => {
    return {...state, modalId: action.payload}
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
