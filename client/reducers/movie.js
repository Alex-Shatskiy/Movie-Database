const reducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.movie;

    default:
      return state;
  }
};

export default reducer;
