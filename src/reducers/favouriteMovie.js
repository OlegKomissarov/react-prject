const initialState = {
  title: 'Iron man'
}

export function favouriteMovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FAVOURITE_MOVIE':
      return { ...state, movie: action.payload }
    default:
      return state
  }
}
