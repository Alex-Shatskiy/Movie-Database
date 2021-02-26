import { movieSearch } from "../apis/movies"

export const searchMovie = (search) => {
  return {
    type: "GET_MOVIE",
    movie: search,
  }
}

export const getMovies = (search) => {
  return (dispatch) => {
    movieSearch(search)
      .then((movies) => {
        return dispatch(searchMovie(movies))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
