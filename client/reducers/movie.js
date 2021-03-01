const reducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.movie;
    case "SET_MOVIES":
      return action.movie;
    default:
      return state;
    case "SET_GENRE_MOVIES":
      return action.movie;
  }
};

export default reducer;
