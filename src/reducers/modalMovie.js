const initialState = {
  movie: null
}

export function modalMovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MODAL_MOVIE':
      return { ...state, movie: action.payload }
    default:
      return state
  }
}
