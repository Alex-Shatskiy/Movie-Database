const reducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case "GET_GENRE":
      return action.genre;
    default:
      return state;
  }
};

export default reducer;
