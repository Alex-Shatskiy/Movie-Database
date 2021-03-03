const reducer = (state = { results: [], pageNumber: 1 }, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.movie;
    case "SET_MOVIES":
      return action.movie;
    default:
      return state;
  }
};

export default reducer;
