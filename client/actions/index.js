import {
  movieSearch,
  getGenre,
  getPopularMovies,
  getGenreMovies,
} from "../apis/movies";

export const searchMovie = (search) => {
  return {
    type: "GET_MOVIE",
    movie: search,
  };
};

export const getGenres = (genres) => {
  return {
    type: "GET_GENRE",
    genre: genres,
  };
};

export const setPopularMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    movie: movies,
  };
};

export const setGenreMovies = (movies) => {
  return {
    type: "SET_GENRE_MOVIES",
    movie: movies,
  };
};

export const getMovies = (search) => {
  console.log("hit");
  return (dispatch) => {
    movieSearch(search)
      .then((movies) => {
        return dispatch(searchMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllGenres = () => {
  return (dispatch) => {
    getGenre()
      .then((genres) => {
        return dispatch(getGenres(genres));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllPopularMovies = () => {
  return (dispatch) => {
    getPopularMovies()
      .then((movies) => {
        return dispatch(setPopularMovies(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchGenreMovies = (genreId) => {
  return (dispatch) => {
    getGenreMovies(genreId)
      .then((movies) => {
        return dispatch(setGenreMovies(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
