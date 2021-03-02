import {
  movieSearch,
  getGenre,
  getPopularMovies,
  getGenreMovies,
  getTopRatedMovies,
} from "../apis/movies";

export const setMovie = (search) => {
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

export const getMovies = (search) => {
  return (dispatch) => {
    movieSearch(search)
      .then((movies) => {
        return dispatch(setMovie(movies));
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
        return dispatch(setMovie(movies));
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
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchTopRatedMovies = () => {
  return (dispatch) => {
    getTopRatedMovies()
      .then((movies) => {
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
